import React from "react";
import logo from "../../public/imgs/logo.svg";
import Dropdown from "./Dropdown";
import Menu from "./Manu.jsx";

export default function Header() {
    return (
        <div className="flex items-center gap-6">
            <img src={logo} alt="QRadio logo" className="h-9 mr-auto"/>
            <Dropdown/>

                <Menu/></div>
    );
}
