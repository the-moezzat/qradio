import { Heart, Pause, Play, Shuffle } from "@phosphor-icons/react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsRunning,
  addToFav,
  removeFromFav,
  changeCurrentStation,
} from "../store";

export default function ControlBtns() {
  const audio = useRef();
  const dispatch = useDispatch();
  const { isRunning, currentStation, favoriteList, stations } = useSelector(
    (state) => state.app
  );

  const isFav = favoriteList[currentStation.id]?.id === currentStation.id;

  if (isRunning) audio.current?.play();
  else audio.current?.pause();

  const handlePlayClick = () => {
    dispatch(setIsRunning(!isRunning));
  };

  const handleFavoriteBtn = () => {
    isFav
      ? dispatch(removeFromFav(currentStation))
      : dispatch(addToFav(currentStation));
  };

  const handleShuffling = () => {
    dispatch(
      changeCurrentStation(
        stations[Math.floor(Math.random() * stations.length)]
      )
    );
    dispatch(setIsRunning(true));
  };

  return (
    <div className="flex w-full items-center justify-center gap-14 text-zinc-800">
      <audio
        src={currentStation?.url}
        autoPlay={isRunning ? true : false}
        ref={audio}
      ></audio>
      <button onClick={handleFavoriteBtn}>
        {isFav ? <Heart size={32} weight="fill" /> : <Heart size={32} />}
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
      <button onClick={handleShuffling}>
        <Shuffle size={32} weight={"fill"} />
      </button>
    </div>
  );
}
