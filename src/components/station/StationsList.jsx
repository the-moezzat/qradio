import React, { useState } from "react";
import Skeleton from "../Skelton";
import StationListItem from "./StationListItem";
import Error from "./Error";
import { useFetchAllStationsQuery, changeCurrentStation } from "../../store";
import { useDispatch, useSelector } from "react-redux";

export default function StationsList() {
  const dispatch = useDispatch();

  const {
    currentStation,
    language: { radios },
  } = useSelector((state) => state.app);

  const { data, error, isFetching, refetch } = useFetchAllStationsQuery(radios);

  // const content = isLoading ? console.log("Loading") : console.log(data.radios);

  return (
    <div className="scroll overflow-y-scroll h-[90%]">
      {isFetching ? (
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
              dispatch(changeCurrentStation(station));
            }}
          />
        ))
      )}
    </div>
  );
}
