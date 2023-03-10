import { ArrowCounterClockwise } from "@phosphor-icons/react";
import React from "react";
import { useFetchAllStationsQuery } from "../../store";

export default function Error({ clickAction }) {
  // const { data, refetch } = useFetchAllStationsQuery("eng");

  const handleClick = () => {
    clickAction();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h3 className="text-white text-4xl font-bold mb-6">
        Field to get all stations
      </h3>
      <button
        onClick={handleClick}
        className="bg-emerald-500 px-4 py-2 rounded-xl text-white text-lg flex items-center gap-2 shadow-md hover:bg-emerald-600 active:shadow-none transition-all"
      >
        <ArrowCounterClockwise size={22} weight="fill" />
        Try again
      </button>
    </div>
  );
}
