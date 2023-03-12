import { Heart, Pause, Play, Shuffle } from "@phosphor-icons/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsRunning } from "../store";

export default function ControlBtns() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.app.isRunning);

  const handlePlayClick = () => {
    dispatch(setIsRunning(!isRunning));
  };

  return (
    <div className="flex w-full items-center justify-center gap-14 text-zinc-800">
      <button>
        <Heart size={32} weight="fill" />
      </button>
      <button
        className="bg-zinc-800 p-3 text-white rounded-full"
        onClick={handlePlayClick}
      >
        {isRunning ? (
          <Pause size={32} weight="fill" />
        ) : (
          <Play size={32} weight="fill" />
        )}
      </button>
      <button>
        <Shuffle size={32} weight="fill" />
      </button>
    </div>
  );
}
