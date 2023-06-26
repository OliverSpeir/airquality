import { AQICategory, FetchedData, Data } from "./types";
import { PrismaClient } from "@prisma/client";

// AQI estimation function below: https://community.purpleair.com/t/how-to-calculate-the-us-epa-pm2-5-aqi/877
const categories: AQICategory[] = [
  { name: "Good", range: [0, 50], pm: [0, 12] },
  { name: "Moderate", range: [51, 100], pm: [12.1, 35.4] },
  {
    name: "Unhealthy for Sensitive Groups",
    range: [101, 150],
    pm: [35.5, 55.4],
  },
  { name: "Unhealthy", range: [151, 200], pm: [55.5, 150.4] },
  { name: "Very Unhealthy", range: [201, 300], pm: [150.5, 250.4] },
  { name: "Hazardous", range: [301, 400], pm: [250.5, 350.4] },
  { name: "Extremely Hazardous", range: [401, 500], pm: [350.5, 500.4] },
];

const calcAQI = (
  Cp: number,
  range: [number, number],
  pm: [number, number]
): number => {
  const [Ih, Il] = range;
  const [BPh, BPl] = pm;
  return Math.round(((Ih - Il) / (BPh - BPl)) * (Cp - BPl) + Il);
};

export const aqiFromPM = (pm: number | undefined): number | string => {
  if (pm === undefined || isNaN(pm) || pm < 0 || pm > 1000) {
    return "-";
  }

  for (const category of categories) {
    if (pm >= category.pm[0] && pm <= category.pm[1]) {
      return calcAQI(pm, category.range, category.pm);
    }
  }

  return "-";
};

// data fetching functions below:

const prisma = new PrismaClient();

async function saveSensorData(data: FetchedData): Promise<void> {
  // const prisma = new PrismaClient();
  try {
    await prisma.sensorData.create({
      data: {
        indoor_humidity: data.privData.sensor.humidity,
        indoor_temperature: data.privData.sensor.temperature,
        indoor_pressure: data.privData.sensor.pressure,
        indoor_pm10_0: data.privData.sensor["pm10.0"],
        indoor_pm25: data.privData.sensor["pm2.5"],
        indoor_pm1: data.privData.sensor["pm1.0"],
        indoor_um_count_0_3: data.privData.sensor["0.3_um_count"],
        indoor_um_count_0_5: data.privData.sensor["0.5_um_count"],
        indoor_um_count_1_0: data.privData.sensor["1.0_um_count"],
        indoor_um_count_2_5: data.privData.sensor["2.5_um_count"],
        indoor_um_count_5_0: data.privData.sensor["5.0_um_count"],
        indoor_um_count_10_0: data.privData.sensor["10.0_um_count"],
        indoor_time_stamp: data.privData.sensor.last_seen,
        outdoor_humidity: data.pubData.sensor.humidity,
        outdoor_temperature: data.pubData.sensor.temperature,
        outdoor_pressure: data.pubData.sensor.pressure,
        outdoor_pm10_0: data.pubData.sensor["pm10.0"],
        outdoor_pm25: data.pubData.sensor["pm2.5"],
        outdoor_pm1: data.pubData.sensor["pm1.0"],
        outdoor_um_count_0_3: data.pubData.sensor["0.3_um_count"],
        outdoor_um_count_0_5: data.pubData.sensor["0.5_um_count"],
        outdoor_um_count_1_0: data.pubData.sensor["1.0_um_count"],
        outdoor_um_count_2_5: data.pubData.sensor["2.5_um_count"],
        outdoor_um_count_5_0: data.pubData.sensor["5.0_um_count"],
        outdoor_um_count_10_0: data.pubData.sensor["10.0_um_count"],
        outdoor_time_stamp: data.pubData.sensor.last_seen,
      },
    });
    console.log('Saved.');
  } catch (error) {
    console.error(error);
    // console.error("didnt save")
  } finally {
    await prisma.$disconnect();
  }
}

export async function getData(): Promise<FetchedData> {
  const PrivAPIResults = await fetch(
    `https://api.purpleair.com/v1/sensors/${process.env.SENSOR_INDEX}?read_key=${process.env.READ_KEY}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": `${process.env.READ_API_KEY}`,
      },
      next: { revalidate: 120 },
    }
  );
  if (!PrivAPIResults.ok) {
    throw new Error("Failed to fetch private data");
  }
  const PubAPIResults = await fetch(
    `https://api.purpleair.com/v1/sensors/${process.env.PUBLIC_SENSOR_INDEX}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": `${process.env.READ_API_KEY}`,
      },
      next: { revalidate: 120 },
    }
  );
  if (!PubAPIResults.ok) {
    throw new Error("Failed to fetch private data");
  }
  const privData: Data = await PrivAPIResults.json();
  const pubData: Data = await PubAPIResults.json();
  return { privData, pubData };
}
export const fetchDataAndSave = async () => {
  try {
    const data = await getData();
    await saveSensorData(data);
    // console.log("Data fetched and saved successfully.");
    // return data as FetchedData;
  } catch (error) {
    throw new Error("Error fetching and saving");
  }
};
