import {CircleNotch, Pause, Play} from "@phosphor-icons/react";
import {useDispatch, useSelector} from "react-redux";
import {setIsRunning} from "../../store";

export default function StationListItem({station, selected, onClick}) {
    const dispatch = useDispatch();
    const {isRunning, isLoading} = useSelector((state) => state.app);

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
            className={
                `cursor-pointer flex flex-row gap-4 items-center p-5 text-lg font-bold rounded-2xl text-white mr-2 md:p-4 ${
                    selected && "text-zinc-800 bg-white"
                }`
            }
            onClick={handleClick}
        >
            <div className="p-2 rounded-full bg-current" onClick={handleBtnClick}>
                {isLoading && selected ? (
                    <div className="animate-spin">
                        <CircleNotch color="#ffffff" weight={"bold"}/>
                    </div>
                ) : isRunning && selected ? (
                    <Pause weight="fill" color="#ffffff"/>
                ) : (
                    <Play weight="fill" color={selected ? "#ffffff" : "#27272a"}/>
                )}
            </div>
            <p className="color text-2xl break-all">{station.name}</p>
        </div>
    );
}
