import React from "react";
import StationsList from "./StationsList";

export default function Station() {
  return (
    <div className="station-lay p-6 rounded-[32px] overflow-hidden h-[620px]">
      <h2 className="text-4xl font-black text-white mb-5"> Stations</h2>
      <StationsList />
    </div>
  );
}
