import { Play, Pause } from "@phosphor-icons/react";

export default function StationListItem({ station, selected, onClick }) {
  const handleClick = () => {
    if (selected) return;
    onClick();
  };

  // const handleBtnClick = () => {
  //   if (!selected) return;
  //   setRunning(!running);
  // };

  return (
    <div
      className={`cursor-pointer flex flex-row gap-2 items-center p-5 text-lg font-bold rounded-2xl text-white mr-2 ${
        selected && "text-[#1f2937] bg-white"
      }`}
      onClick={handleClick}
    >
      <div className="p-2 rounded-full bg-current">
        {selected ? (
          <Pause weight="fill" color="#ffffff" />
        ) : (
          <Play weight="fill" color="#1f2937" />
        )}
      </div>
      <p className="color text-2xl">{station.name}</p>
    </div>
  );
}
