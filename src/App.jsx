import Station from "./components/station/Station";
import Header from "./components/Header";
import Controller from "./components/Controller";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="container max-w-[1366px] mx-auto px-3 grid items-center  h-screen">
      <div className="grid grid-cols-16 grid-rows-left gap-2 w-full">
        <div className="bg-blue-500 col-span-9 ">
          <Header />
        </div>
        <div className="bg-green-500 col-span-9 ">
          <Controller />
        </div>
        <div className="bg-yellow-500 col-span-9 ">
          <Favorite />
        </div>
        <div className=" col-span-7 col-start-10 row-span-full">
          <Station />
        </div>
      </div>
    </div>
  );
}

export default App;
