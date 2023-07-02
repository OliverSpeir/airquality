import { saveData } from "./functions";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await saveData();
  const indoor_time_stamp = new Date(
    data.data.privData.sensor.last_seen * 1000
  ).toLocaleString("en-US", {
    timeZone: "America/Denver",
  });
  const outdoor_time_stamp = new Date(
    data.data.pubData.sensor.last_seen * 1000
  ).toLocaleString("en-US", {
    timeZone: "America/Denver",
  });
  return NextResponse.json({ indoor_time_stamp, outdoor_time_stamp, succes: data.success });
}
