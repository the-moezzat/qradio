import { Play, Pause } from "@phosphor-icons/react";
import { useSelector, useDispatch } from "react-redux";
import { setIsRunning } from "../../store";
import { useState, useEffect } from "react";

export default function StationListItem({ station, selected, onClick }) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.app.isRunning);

  useEffect(() => {
    dispatch(setIsRunning(selected));
  }, [selected]);

  const handleClick = () => {
    if (selected) return;
    dispatch(setIsRunning(true));
    onClick();
  };

  const handleBtnClick = () => {
    if (!selected) return;
    dispatch(setIsRunning(!isRunning));
  };

  return (
    <div
      className={`cursor-pointer flex flex-row gap-2 items-center p-5 text-lg font-bold rounded-2xl text-white mr-2 ${
        selected && "text-zinc-800 bg-white"
      }`}
      onClick={handleClick}
    >
      <div className="p-2 rounded-full bg-current" onClick={handleBtnClick}>
        {isRunning && selected ? (
          <Pause weight="fill" color="#ffffff" />
        ) : (
          <Play weight="fill" color={selected ? "#ffffff" : "#27272a"} />
        )}
      </div>
      <p className="color text-2xl break-all">{station.name}</p>
    </div>
  );
}
