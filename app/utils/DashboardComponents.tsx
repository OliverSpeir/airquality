import { Data } from "./types";
import { aqiFromPM } from "./functions";
import Image from "next/image";

export const Info = () => {
  "use client"
  return (
    <>
      <div className="collapse collapse-plus bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">More Info</div>
        <div className="collapse-content flex flex-col justify-center items-center md:flex-row md:justify-evenly">
          <div className="card w-60 bg-secondary text-secondary-content my-5 md:my-0 mx-5">
            <div className="card-body w-full">
              <div className="table flex flex-col w-full">
                {/* row 1 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">AQI Chart</div>
                    <div className="p-2 whitespace-nowrap">
                      <label
                        htmlFor="my_modal_1"
                        className="btn btn-error px-2 font-bold"
                      >
                        open
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_1"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box max-w-3xl">
                          <Image
                            src="/aqiChart.png"
                            width={2134}
                            height={1328}
                            alt="AQI Chart"
                          />
                          <div className="modal-action">
                            <label htmlFor="my_modal_1" className="btn">
                              Close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row 2 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">Hair Comparison</div>
                    <div className="p-2 whitespace-nowrap">
                      <label
                        htmlFor="my_modal_2"
                        className="btn btn-error px-2 font-bold"
                      >
                        open
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_2"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box max-w-3xl">
                          <Image
                            src="/hair.jpg"
                            width={1379}
                            height={963}
                            alt="AQI Chart"
                          />
                          <div className="modal-action">
                            <label htmlFor="my_modal_2" className="btn">
                              Close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row 3 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">Particle Chart</div>
                    <div className="p-2 whitespace-nowrap">
                      <label
                        htmlFor="my_modal_3"
                        className="btn btn-error px-2 font-bold"
                      >
                        open
                      </label>
                      <input
                        type="checkbox"
                        id="my_modal_3"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box max-w-3xl">
                          <Image
                            src="/Particle-Sizes.png"
                            width={800}
                            height={892}
                            alt="AQI Chart"
                          />
                          <div className="modal-action">
                            <label htmlFor="my_modal_3" className="btn">
                              Close
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-60 bg-secondary text-accent-content my-5 md:my-0 mx-5">
            <div className="card-body w-full">
              <div className="table flex flex-col w-full">
                {/* row 1 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">PA API Docs</div>
                    <div className="p-2 whitespace-nowrap">
                      <a
                        href="https://api.purpleair.com/#api-sensors-get-sensor-data"
                        target="_blank"
                        className="btn btn-error px-3 font-bold"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
                {/* row 2 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">Project Repo</div>
                    <div className="p-2 whitespace-nowrap">
                      <a
                        href="https://github.com/OliverSpeir/airquality"
                        target="_blank"
                        className="btn btn-error px-3 font-bold"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
                {/* row 3 */}
                <div className="border-b border-gray-200">
                  <div className="grid grid-cols-2 gap-4 rounded-lg">
                    <div className="p-2 font-bold">About Me</div>
                    <div className="p-2 whitespace-nowrap">
                      <a
                        href="https://www.oliverspeir.com"
                        target="_blank"
                        className="btn btn-error px-3 font-bold"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TempAndHumidity = ({
  data,
  type,
}: {
  data: Data;
  type: string;
}) => {
  const cardClassName = type === "Indoor" ? "bg-accent" : "bg-primary";
  const cardTextClassName =
    type === "Indoor" ? "text-accent-content" : "text-primary-content";
  return (
    <div
      className={`card w-60 ${cardClassName} ${cardTextClassName} my-5 md:my-0`}
    >
      <div className="card-body w-full">
        <h2 className="card-title">{data.sensor.name}</h2>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 whitespace-nowrap">
                {new Date(data.time_stamp * 1000).toLocaleTimeString("en-US", {
                  timeZone: "America/Denver",
                })}
              </div>
              <div className="p-2">
                {new Date(data.time_stamp * 1000).toLocaleDateString("en-US", {
                  timeZone: "America/Denver",
                })}
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
  const cardTextClassName =
    type === "Indoor" ? "text-accent-content" : "text-primary-content";
  return (
    <div
      className={`card w-60 ${cardClassName} ${cardTextClassName} my-5 md:my-0`}
    >
      <div className="card-body">
        <div className="collapse collapse-arrow -mt-6">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-lg">
            {type} PM2.5 AQI
          </div>
          <div className="collapse-content">
            <p>
              Rolling average mass concentration estimated by PurpleAir fed into{" "}
              <a
                href="https://community.purpleair.com/t/how-to-calculate-the-us-epa-pm2-5-aqi/877"
                className="link text-slate-900 hover:text-blue-900"
              >
                {" "}
                AQI Equation
              </a>
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
  const cardTextClassName =
    type === "Indoor" ? "text-accent-content" : "text-primary-content";
  return (
    <div
      className={`card w-60 ${cardClassName} ${cardTextClassName} my-5 md:my-0`}
    >
      <div className="card-body">
        {/* <h2 className="card-title">{type} Size Counts</h2> */}
        <div className="collapse collapse-arrow -mt-6">
          <input type="checkbox" />
          <div className="collapse-title font-bold text-lg">
            {type} Count Concentration
          </div>
          <div className="collapse-content">
            <p>(particles/100ml) of all particles greater than x diameter</p>
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
  const cardTextClassName =
    type === "Indoor" ? "text-accent-content" : "text-primary-content";
  return (
    <div
      className={`card w-60 ${cardClassName} ${cardTextClassName} my-5 md:my-0`}
    >
      <div className="card-body w-full">
        <div className="collapse collapse-arrow -mt-6">
          <input type="checkbox" />
          <div className="collapse-title --3 font-bold text-md">
            {type} Mass Concentration
          </div>
          <div className="collapse-content">
            <p>Estimated (&mu;g/m&#179;)</p>
          </div>
        </div>
        <div className="table flex flex-col w-full">
          {/* row 1 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">1.0 &mu;m</div>
              <div className="p-2 ">{data.sensor["pm1.0"]}</div>
            </div>
          </div>
          {/* row 2 */}
          <div className="border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">2.5 &mu;m</div>
              <div className="p-2 ">{data.sensor["pm2.5"]}</div>
            </div>
          </div>
          {/* row 3 */}
          <div className="">
            <div className="grid grid-cols-2 gap-4 hover:bg-gray-600 rounded-lg">
              <div className="p-2 font-bold">10 &mu;m</div>
              <div className="p-2 ">{data.sensor["pm10.0"]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
