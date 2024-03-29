import React from "react";
import { useSelector } from "react-redux";
import ControlBtns from "./ControlBtns";

export default function Controller() {
  const currentStation = useSelector((state) => state.app.currentStation);

  return (
    <div>
      <h6 className="text-lg uppercase tracking-wide text-gray-700 mb-3 ">
        Playing now
      </h6>
      <p className="text-5xl font-bold text-zinc-800 mb-6 tracking-tighter ">
        {currentStation?.name || "--Choose station--"}
      </p>
      <ControlBtns />
    </div>
  );
}
