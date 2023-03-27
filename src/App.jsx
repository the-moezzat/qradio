import Station from "./components/station/Station";
import Header from "./components/Header";
import Controller from "./components/Controller";
import Favorite from "./components/Favorite";
import { useSelector } from "react-redux";
import Menu from "./components/Manu.jsx";

function App() {
  const showFavorite = useSelector(
    (state) => Object.keys(state.app.favoriteList).length > 0
  );

  return (
    <div className="container max-w-[1366px] mx-auto px-6 grid items-center h-screen max-md:py-6">
      <div className=" relative grid grid-cols-16 grid-rows-left gap-x-8 gap-y-4 w-full lg:gap-x-6 max-md:h-full">
        <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 bg-green-300 blur-[200px] w-[450px] h-[450px] rounded-full -z-50"></div>
        <div className="col-span-9 lg:col-span-8  max-md:col-span-full">
          <Header />
        </div>
        <div className="col-span-9 lg:col-span-8  justify-items-center self-center max-md:col-span-full">
          <Controller />
        </div>
        <div className="col-span-9 lg:col-span-8  max-md:col-span-full">{showFavorite && <Favorite />}</div>
        <div className=" col-span-7 col-start-10 row-span-full max-md:col-start-1 lg:col-start-9 lg:col-span-8  max-md:col-span-full max-md:row-start-4">
          <Station />
        </div>
      </div>
    </div>
  );
}

export default App;
