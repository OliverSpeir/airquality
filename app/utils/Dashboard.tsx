import {
  TempAndHumidity,
  PM25,
  Counts,
  AllPMs,
  Info,
} from "./DashboardComponents";
import { FetchedData } from "./types";

const Dashboard = ({ data }: { data: FetchedData }) => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Info />
      <div className="md:flex flex-wrap justify-center">
        <div className="md:flex m-2">
          <div className="flex-auto mx-2">
            <TempAndHumidity type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <TempAndHumidity type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="md:flex m-2">
          <div className="flex-auto mx-2">
            <AllPMs type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <AllPMs type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="md:flex m-2">
          <div className="flex-auto mx-2">
            <Counts type={"Indoor"} data={data.privData} />
          </div>
          <div className="flex-auto mx-2">
            <Counts type={"Outdoor"} data={data.pubData} />
          </div>
        </div>
        <div className="md:flex m-2">
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
};
export default Dashboard;
