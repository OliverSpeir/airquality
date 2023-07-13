import { ReactNode } from "react";
import { FetchedData } from "./types";
import { useRef, useEffect, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

export type SideBarProps = {
  children: ReactNode;
  setSelectedComponent: React.Dispatch<
    React.SetStateAction<"liveData" | "charts" | null>
  >;
};

export const SideBar = ({ children, setSelectedComponent }: SideBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={`drawer ${isOpen ? '' : ''}`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" 
               checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        { !isOpen &&
          <label htmlFor="my-drawer-2" 
                 className="btn btn-primary absolute top-0 left-0 mt-4 ml-4">
            Open drawer
          </label> 
        }
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a onClick={() => setSelectedComponent('liveData')}>Live Data</a>
            </li>
            <li>
              <a onClick={() => setSelectedComponent('charts')}>Charts</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  

export type LiveDataProps = {
  data: FetchedData;
};

export const LiveData = ({ data }: LiveDataProps) => {
  return (
    <>
      <div> {data.privData.sensor.name} </div>
      <div> {data.pubData.sensor.name} </div>
    </>
  );
};

export type ChartsProps = {
  data: FetchedData;
};

export const Charts = ({ data }: ChartsProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );

  useEffect(() => {
    let chartInstance: Chart | null = null; // Initialize the variable to store the chart instance

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "Current",
              "10 minute",
              "30 minute",
              "60 minute",
              "6 hour",
              "24 hour",
              "1 week",
            ],
            datasets: [
              {
                label: "Private Data",
                data: [
                  data.privData.sensor.stats["pm2.5"],
                  data.privData.sensor.stats["pm2.5_10minute"],
                  data.privData.sensor.stats["pm2.5_30minute"],
                  data.privData.sensor.stats["pm2.5_60minute"],
                  data.privData.sensor.stats["pm2.5_6hour"],
                  data.privData.sensor.stats["pm2.5_24hour"],
                  data.privData.sensor.stats["pm2.5_1week"],
                ],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Public Data",
                data: [
                  data.pubData.sensor.stats["pm2.5"],
                  data.pubData.sensor.stats["pm2.5_10minute"],
                  data.pubData.sensor.stats["pm2.5_30minute"],
                  data.pubData.sensor.stats["pm2.5_60minute"],
                  data.pubData.sensor.stats["pm2.5_6hour"],
                  data.pubData.sensor.stats["pm2.5_24hour"],
                  data.pubData.sensor.stats["pm2.5_1week"],
                ],
                fill: false,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Time",
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Value",
                },
              },
            },
          },
        });
      }
    }

    return () => {
      // Cleanup chart instance on component unmount
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};
