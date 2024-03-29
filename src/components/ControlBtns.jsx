import {
  CircleNotch,
  Heart,
  Pause,
  Play,
  Shuffle,
} from "@phosphor-icons/react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsRunning,
  setIsLoading,
  addToFav,
  removeFromFav,
  changeCurrentStation,
} from "../store";

export default function ControlBtns() {
  const audio = useRef();
  const dispatch = useDispatch();
  const { isRunning, isLoading, currentStation, favoriteList, stations } =
    useSelector((state) => state.app);

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
    if (!stations.length) return;

    dispatch(
      changeCurrentStation(
        stations[Math.floor(Math.random() * stations.length)]
      )
    );
    dispatch(setIsRunning(true));
    dispatch(setIsLoading(true));
  };

  return (
    <div className="flex w-full items-center justify-center gap-14 text-zinc-800 text-3xl">
      <audio
        src={currentStation?.url}
        autoPlay={!!isRunning}
        ref={audio}
        onLoadedData={() => dispatch(setIsLoading(false))}
        onPause={() => dispatch(setIsRunning(false))}
        onPlaying={() => dispatch(setIsRunning(true))}
      ></audio>
      <button onClick={handleFavoriteBtn}>
        {isFav ? <Heart weight="fill" /> : <Heart />}
      </button>
      <button
        className="bg-zinc-800 p-3 text-white rounded-full"
        onClick={handlePlayClick}
      >
        {isLoading ? (
          <div className="animate-spin">
            <CircleNotch weight={"bold"} />
          </div>
        ) : isRunning ? (
          <Pause weight="fill" />
        ) : (
          <Play weight="fill" />
        )}
      </button>
      <button onClick={handleShuffling}>
        <Shuffle weight={"fill"} />
      </button>
    </div>
  );
}
