import Dashboard from "./utils/Dashboard";
import { getData } from "./utils/functions";

export default async function Home() {
  const data = await getData(); 
  return <Dashboard data={data} />;
}
