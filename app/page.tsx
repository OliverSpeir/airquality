import {
  TempAndHumidity,
  PM25,
  Counts,
  AllPMs,
} from "./utils/components/Display";
import { getData, fetchDataAndSave } from "./utils/functions";

setInterval(fetchDataAndSave, 360 * 60 * 1000);

export default async function Home() {
  let data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-wrap justify-center">
        <div className="flex m-2">
          <div className="flex-auto mx-2">
            <TempAndHumidity type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <TempAndHumidity type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="flex m-2">
          <div className="flex-auto mx-2">
            <AllPMs type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <AllPMs type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="flex m-2">
          <div className="flex-auto mx-2">
            <Counts type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <Counts type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="flex m-2">
          <div className="flex-auto mx-2">
            <PM25 type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <PM25 type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
      </div>
    </main>
  );

  // return (
  //   <main className="flex min-h-screen flex-col items-center">
  //     {/* <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 auto-rows-min "> */}
  //     <div className="flex flex-wrap justify-center">
  //       <div className="m-2 flex-auto flex-row items-center">
  //         <TempAndHumidity type={"Indoor"} data={data.privData} />
  //         <TempAndHumidity type={"Outdoor"} data={data.pubData} />
  //       </div>
  //       <div className="m-2 flex-auto flex-row items-center">
  //       <Counts type={"Indoor"} data={data.privData} />
  //       <Counts type={"Outdoor"} data={data.pubData} /></div>
  //       <div className="m-2 flex-auto flex-row items-center">
  //       <AllPMs type={"Indoor"} data={data.privData} />
  //       <AllPMs type={"Outdoor"} data={data.pubData} /></div>
  //       <div className="m-2 flex-auto flex-row items-center">
  //       <PM25 type={"Indoor"} data={data.privData} />
  //       <PM25 type={"Outdoor"} data={data.pubData} /></div>
  //     </div>
  //     {/* </div> */}
  //   </main>
  // );
}
