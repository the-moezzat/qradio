import React from "react";
import logo from "../../public/imgs/logo.svg";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="QRadio logo" className="h-9" />
      <Dropdown />
    </div>
  );
}
