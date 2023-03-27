import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store";
import React from "react";

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.app.searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="relative flex">
          <div className="absolute top-1/2 left-2 -translate-y-1/2 text-zinc-700 text-2xl">
            <MagnifyingGlass />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-11 py-2 rounded-xl focus-within:outline-none text-lg text-zinc-700 bg-white/60 focus:bg-white transition-all w-[200px]"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
