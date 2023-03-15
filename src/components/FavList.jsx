import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentStation } from "../store";

export default function FavList() {
  const favorites = useSelector((state) => state.app.favoriteList);
  const dispatch = useDispatch();
  const handleClick = (station) => {
    dispatch(changeCurrentStation(station));
  };

  const favoriteList = [];

  for (const station in favorites) {
    favoriteList.push(favorites[station]);
  }

  return (
    <div className="flex gap-4 w-full overflow-x-scroll">
      {favoriteList.map((station) => {
        return (
          station && (
            <div
              className="w-40 h-36 rounded-3xl bg-orange-500 flex-shrink-0 cursor-pointer p-3 flex items-end break-words text-2xl font-bold text-white overflow-hidden"
              onClick={() => handleClick(station)}
              kay={station?.id}
            >
              {station?.name}
            </div>
          )
        );
      })}
    </div>
  );
}
