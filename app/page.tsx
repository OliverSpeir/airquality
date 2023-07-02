import Dashboard from "./utils/Dashboard";
import { getData } from "./utils/functions";

export default async function Home() {
  let data = await getData(); 
  return <Dashboard data={data} />;
}
