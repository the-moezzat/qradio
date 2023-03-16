import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React from "react";
import FavList from "./FavList";

export default function Favorite() {
  return (
    <div>
      <div className="flex items-center mb-4 justify-between">
        <h3 className=" text-3xl font-bold text-zinc-800">Favorite</h3>
        <div className="flex gap-3 ">
          <button className="px-5 py-1 bg-gray-100 rounded-full shadow-md">
            <ArrowLeft size={26} />
          </button>
          <button className="px-5 py-1 bg-gray-100 rounded-full shadow-md">
            <ArrowRight size={26} />
          </button>
        </div>
      </div>
      <FavList />
    </div>
  );
}
