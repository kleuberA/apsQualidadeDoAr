"use client"
import InfoCards from "@/components/infoCards/Infos";
import Menu from "@/components/menu/Menu";
import NameRegion from "@/components/nameRegion/Region";
import TitlePage from "@/components/titlePage";
import { useState } from "react";

export default function Home() {

  const [value, setValue] = useState('here');

  const handleRegionNameSubmit = (regionName: any) => {
    setValue(regionName);
  };

  return (
    <div className="w-full bg-background h-screen">
      <div className="flex flex-col">
        <div>
          <Menu />
        </div>
        <div className="w-full text-center z-20 relative flex flex-col gap-10 items-center justify-center">
          <TitlePage />
          <div className="z-20 w-full">
            <NameRegion onRegionNameSubmit={handleRegionNameSubmit} />
          </div>
        </div>
        <div>
          <InfoCards value={value} />
        </div>
      </div>
    </div>
  )
}
