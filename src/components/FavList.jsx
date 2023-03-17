import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentStation, setIsLoading, setIsRunning } from "../store";

export default function FavList() {
  const { favoriteList: favorites, currentStation } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  const handleClick = (station) => {
    if (currentStation.id === station.id) return;

    dispatch(changeCurrentStation(station));
    dispatch(setIsRunning(true));
    dispatch(setIsLoading(true));
  };

  const favoriteList = [];

  for (const station in favorites) {
    favoriteList.push(favorites[station]);
  }

  return (
    <div className=" hori-scrollbar flex gap-4 w-full overflow-x-auto">
      {favoriteList.map((station) => {
        return (
          station && (
            <div
              kay={station?.id}
              className=" pattern w-40 h-32 rounded-3xl bg-zinc-900 flex-shrink-0 flex-grow-0 cursor-pointer p-3 flex items-end text-xl font-bold text-white overflow-hidden"
              onClick={() => handleClick(station)}
            >
              {station?.name}
            </div>
          )
        );
      })}
    </div>
  );
}
