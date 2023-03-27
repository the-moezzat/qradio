import Station from "./components/station/Station";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import Favorite from "./components/Favorite.jsx";
import Controller from "./components/Controller.jsx";
import React, {useState} from "react";
import Menu from "./components/Manu.jsx";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showFavorite = useSelector(
        (state) => Object.keys(state.app.favoriteList).length > 0
    );

    const handleMenuToggle = () => {
        setIsMenuOpen((menu) => !menu)
    }

    return (
        <div className="container max-w-[1366px] mx-auto px-6 py-6 grid items-center h-screen md:py-6 md:px-0 md:pb-0">
            <div
                className=" relative grid grid-cols-16 grid-rows-left gap-x-8 gap-y-4 w-full lg:gap-x-6 md:h-full md:gap-y-6">
                <div
                    className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 bg-green-300 blur-[200px] w-[450px] h-[450px] rounded-full -z-50"></div>
                <div
                    className="flex gap-6 items-center justify-end w-full col-span-9 lg:col-span-8  md:col-span-full md:px-6">
                    <Header/>
                    <div className={"hidden md:block"}>
                        <Menu onClick={handleMenuToggle}/>
                    </div>
                </div>
                <div
                    className={`${isMenuOpen ? "md:hidden" : ""} col-span-9 justify-items-center self-center lg:col-span-8 md:col-span-full  md:px-6`}>
                    <Controller/>
                </div>
                <div
                    className={`${isMenuOpen ? "md:hidden" : ""} col-span-9  md:col-span-full lg:col-span-8  md:pl-6 md:mb-6`}>
                    {showFavorite && <Favorite/>}
                </div>
                <div
                    className=
                        {`md:row-start-2 md:row-span-full h-full col-span-7 col-start-10 row-span-full lg:col-start-9 lg:col-span-8  md:col-start-1 md:col-span-full animate-slideUp ${isMenuOpen ? "md:bottom-0 md:relative" : "md:hidden"}`}
                >
                    <Station/>
                </div>
            </div>
        </div>
    );
}

export default App;
