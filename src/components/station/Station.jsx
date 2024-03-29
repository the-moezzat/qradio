import React from "react";
import Search from "./Search";
import StationsList from "./StationsList";

export default function Station() {
  return (
    <div className="station-lay pl-6 py-6 pr-3  rounded-[32px] overflow-hidden h-[620px] lg:h-[570px] md:min-h-full md:rounded-b-none md:rounded-[24px]">
      <div className="flex items-center justify-between mb-5 ">
        <h2 className="text-4xl font-black text-white tracking-tight">
          All stations
        </h2>
        <div>
          <Search />
        </div>
      </div>
      <StationsList />
    </div>
  );
}
