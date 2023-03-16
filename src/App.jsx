import Station from "./components/station/Station";
import Header from "./components/Header";
import Controller from "./components/Controller";
import Favorite from "./components/Favorite";
import { useSelector } from "react-redux";

function App() {
  const showFavorite = useSelector(
    (state) => Object.keys(state.app.favoriteList).length > 0
  );

  return (
    <div className="container max-w-[1366px] mx-auto px-6 grid items-center  h-screen">
      <div className=" relative grid grid-cols-16 grid-rows-left gap-x-8 gap-y-4 w-full">
        <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 bg-green-400 blur-[200px] w-[450px] h-[450px] rounded-full -z-50"></div>
        <div className="col-span-9 ">
          <Header />
        </div>
        <div className="col-span-9 justify-items-center self-center">
          <Controller />
        </div>
        <div className="col-span-9 ">{showFavorite && <Favorite />}</div>
        <div className=" col-span-7 col-start-10 row-span-full">
          <Station />
        </div>
      </div>
    </div>
  );
}

export default App;
