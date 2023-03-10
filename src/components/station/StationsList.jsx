import React, { useState } from "react";
import { useFetchAllStationsQuery } from "../../store";
import Skeleton from "../Skelton";
import StationListItem from "./StationListItem";
import Error from "./Error";

export default function StationsList() {
  const [currentStation, setCurrentStation] = useState({});

  const { data, error, isLoading, refetch } = useFetchAllStationsQuery("eng");

  // const content = isLoading ? console.log("Loading") : console.log(data.radios);

  return (
    <div className="scroll overflow-y-scroll h-[90%]">
      {isLoading ? (
        <Skeleton times={6} className="h-[58px] rounded-2xl mr-2" />
      ) : error ? (
        <Error clickAction={refetch} />
      ) : (
        data.map((station) => (
          <StationListItem
            key={station.id}
            station={station}
            selected={station.id === currentStation.id}
            onClick={() => {
              setCurrentStation(station);
            }}
          />
        ))
      )}
    </div>
  );
}
