import { Play } from "@phosphor-icons/react";
import classNames from "classnames";
import React from "react";

export default function StationListItem({ name, running }) {
  return (
    <div className="cursor-pointer flex flex-row gap-2 items-center p-5 text-lg font-bold rounded-2xl text-white">
      <div className="p-2 rounded-full bg-current">
        {running ? (
          <Pause weight="fill" color="#ffffff" />
        ) : (
          <Play weight="fill" color="#1f2937" />
        )}
      </div>
      <p className="color text-2xl">{name}</p>
    </div>
  );
}
