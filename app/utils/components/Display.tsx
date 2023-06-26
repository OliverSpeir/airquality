import { Data } from "../types";
import { aqiFromPM } from "../functions";

export const TempAndHumidity = ({
  data,
  type,
}: {
  data: Data;
  type: string;
}) => {
  const cardClassName = type === "Indoor" ? "bg-accent" : "bg-primary";
  return (
    <div
      className={`card w-60 ${cardClassName} text-accent-content my-5 md:my-0`}
    >
      <div className="card-body w-full">
        <h2 className="card-title">{data.sensor.name}</h2>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 whitespace-nowrap">
                {new Date(data.time_stamp * 1000).toLocaleTimeString()}
              </div>
              <div className="p-2">
                {new Date(data.time_stamp * 1000).toLocaleDateString()}
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Humidity</div>
              <div className="p-2">{data.sensor.humidity}%</div>
            </div>
          </div>
          {/* row 3 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Temperature</div>
              <div className="p-2">{data.sensor.temperature}&deg; F</div>
            </div>
          </div>
          {/* row 4 */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Pressure</div>
              <div className="p-2">{data.sensor.pressure} mbar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PM25 = ({ data, type }: { data: Data; type: string }) => {
  const cardClassName = type === "Indoor" ? "bg-accent" : "bg-primary";
  return (
    <div
      className={`card w-60 ${cardClassName} text-accent-content my-5 md:my-0`}
    >
      <div className="card-body">
        <div className="collapse -mt-6">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-lg">
            {type} PM2.5 AQI
          </div>
          <div className="collapse-content">
            <h3 className="font-bold whitespace-nowrap">Estimated AQI</h3>
            <p>
              PM2.5 mass concentration (&mu;g/m&#179;) value from PurpleAir fed
              into AQI Equation
            </p>
          </div>
        </div>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Current</div>
              <div className="p-2">{aqiFromPM(data.sensor.stats["pm2.5"])}</div>
            </div>
          </div>
          {/* row 2 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">10 Min Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_10minute"])}
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">30 Min Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_30minute"])}
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">60 Min Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_60minute"])}
              </div>
            </div>
          </div>
          {/* row 5 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">6 Hour Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_6hour"])}
              </div>
            </div>
          </div>
          {/* row 6 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Daily Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_24hour"])}
              </div>
            </div>
          </div>
          {/* row 7 */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">Weekly Average</div>
              <div className="p-2">
                {aqiFromPM(data.sensor.stats["pm2.5_1week"])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Counts = ({ data, type }: { data: Data; type: string }) => {
  const cardClassName = type === "Indoor" ? "bg-accent" : "bg-primary";
  return (
    <div
      className={`card w-60 ${cardClassName} text-accent-content my-5 md:my-0`}
    >
      <div className="card-body">
        {/* <h2 className="card-title">{type} Size Counts</h2> */}
        <div className="collapse -mt-6">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-lg">
            {type} Size Counts
          </div>
          <div className="collapse-content">
            <h3 className="font-bold whitespace-nowrap">Count concentration</h3>
            <p>
              (particles/100ml) of all particles greater than 0.3 &mu;m diameter
            </p>
          </div>
        </div>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">0.3 &mu;m</div>
              <div className="p-2">{data.sensor["0.3_um_count"]}</div>
            </div>
          </div>
          {/* row 2 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">0.5 &mu;m</div>
              <div className="p-2">{data.sensor["0.5_um_count"]}</div>
            </div>
          </div>
          {/* row 3 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">1 &mu;m</div>
              <div className="p-2">{data.sensor["1.0_um_count"]}</div>
            </div>
          </div>
          {/* row 4 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">2.5 &mu;m</div>
              <div className="p-2">{data.sensor["2.5_um_count"]}</div>
            </div>
          </div>
          {/* row 5 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">5 &mu;m</div>
              <div className="p-2">{data.sensor["5.0_um_count"]}</div>
            </div>
          </div>
          {/* row 6 */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold"> 10 &mu;m</div>
              <div className="p-2">{data.sensor["10.0_um_count"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllPMs = ({ data, type }: { data: Data; type: string }) => {
  const cardClassName = type === "Indoor" ? "bg-accent" : "bg-primary";
  return (
    <div
      className={`card w-60 ${cardClassName} text-accent-content my-5 md:my-0`}
    >
      <div className="card-body w-full">
        <div className="collapse -mt-6">
          <input type="checkbox" />
          <div className="collapse-title whitespace-nowrap -ml-3 font-bold text-lg">
            {type} PM Values
          </div>
          <div className="collapse-content">
            <h3 className="font-bold whitespace-nowrap">Mass concentration</h3>
            <p>Estimated (&mu;g/m&#179;)</p>
          </div>
        </div>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">PM 1.0</div>
              <div className="p-2 whitespace-nowrap">
                {data.sensor["pm1.0"]} &mu;g/m&#179;
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">PM 2.5</div>
              <div className="p-2 whitespace-nowrap">
                {data.sensor["pm2.5"]} &mu;g/m&#179;
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">PM 10</div>
              <div className="p-2 whitespace-nowrap">
                {data.sensor["pm10.0"]} &mu;g/m&#179;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
