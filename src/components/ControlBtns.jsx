import { Heart, Pause, Play, Shuffle } from "@phosphor-icons/react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsRunning } from "../store";

export default function ControlBtns() {
  const audio = useRef();
  const dispatch = useDispatch();
  const { isRunning, currentStation } = useSelector((state) => state.app);

  if (isRunning) audio.current?.play();
  else audio.current?.pause();

  const handlePlayClick = () => {
    dispatch(setIsRunning(!isRunning));
  };

  const handleAudioLoad = () => console.log("load");

  return (
    <div className="flex w-full items-center justify-center gap-14 text-zinc-800">
      <audio
        src={currentStation?.url}
        autoPlay={isRunning ? true : false}
        onLoadedData={handleAudioLoad}
        ref={audio}
      ></audio>
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
