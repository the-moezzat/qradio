import React from "react";
import { useFetchAllStationsQuery } from "../../store";
import Skeleton from "../Skelton";
import StationListItem from "./StationListItem";

export default function StationsList() {
  const { data, error, isLoading } = useFetchAllStationsQuery("eng");

  // const content = isLoading ? console.log("Loading") : console.log(data.radios);

  return (
    <div className="scroll overflow-y-scroll h-full">
      {isLoading ? (
        <Skeleton times={4} className="h-[68px] rounded-2xl mr-2" />
      ) : error ? (
        <div>error</div>
      ) : (
        data.map((station) => (
          <StationListItem key={station.id} name={station.name} />
        ))
      )}
    </div>
  );
}
