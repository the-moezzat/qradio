import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Audio({ src }) {
  const audio = useRef();
  const isRunning = useSelector((state) => state.app.isRunning);

  isRunning ? audio.current?.play() : audio.current?.pause();

  return <audio src={src} useRef={audio} autoPlay={false}></audio>;
}
