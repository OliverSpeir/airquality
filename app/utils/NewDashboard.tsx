"use client"
import { FetchedData } from "./types";
import { SideBar, LiveData, Charts } from "./NewDashboardComponents";
import { useState } from "react";

const NewDashboard = ({ data }: { data: FetchedData }) => {
    const [selectedComponent, setSelectedComponent] = useState<'liveData' | 'charts' | null>(null);

    let componentToRender;
    switch (selectedComponent) {
      case 'liveData':
        componentToRender = <LiveData data={data} />;
        break;
      case 'charts':
        componentToRender = <Charts data={data} />;
        break;
      default:
        componentToRender = null;
    }

    return (
      <main className="">
        <SideBar setSelectedComponent={setSelectedComponent}>
            {componentToRender}
        </SideBar>
      </main>
    );
};
export default NewDashboard;