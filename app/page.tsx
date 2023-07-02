import Dashboard from "./utils/Dashboard";
import { getData, saveData } from "./utils/functions";

setInterval(saveData, 240000);

export default async function Home() {
  let data = await getData(); 
  saveData();
  return <Dashboard data={data} />;
}
