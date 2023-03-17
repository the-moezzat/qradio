import React, { useState } from "react";
import Skeleton from "../Skelton";
import StationListItem from "./StationListItem";
import Error from "./Error";
import {
  useFetchAllStationsQuery,
  changeCurrentStation,
  setIsLoading,
} from "../../store";
import { useDispatch, useSelector } from "react-redux";

export default function StationsList() {
  const dispatch = useDispatch();

  const {
    searchTerm,
    currentStation,
    language: { radios },
  } = useSelector((state) => state.app);

  const { data, error, isFetching, refetch } = useFetchAllStationsQuery(radios);

  const listData =
    data &&
    data.filter(
      (station) => station.name.toLowerCase().indexOf(searchTerm) !== -1
    );

  return (
    <div className="scroll overflow-y-scroll h-[90%]">
      {isFetching ? (
        <Skeleton times={6} className="h-[58px] rounded-2xl mr-2" />
      ) : error ? (
        <Error clickAction={refetch} />
      ) : (
        listData.map((station) => (
          <StationListItem
            key={station.id}
            station={station}
            selected={station.id === currentStation.id}
            onClick={() => {
              dispatch(changeCurrentStation(station));
              dispatch(setIsLoading(true));
            }}
          />
        ))
      )}
    </div>
  );
}
