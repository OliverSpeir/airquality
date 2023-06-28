import Dashboard from "./utils/Dashboard";
import { getData, saveData } from "./utils/functions";

setInterval(saveData, 360 * 60 * 1000); // logs data every 6 hours (not sure if works)

// async component
export default async function Home() {
  let data = await getData(); // fetches data from PA API
  saveData(); // logs data to DB every page load
  return <Dashboard data={data} />;
}
