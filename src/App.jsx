import Station from "./components/station/Station";

function App() {
  return (
    <div className="container max-w-[1366px] mx-auto px-3 grid items-center  h-screen">
      <div className="grid grid-cols-16 gap-2 w-full">
        <div className="bg-blue-500 h-14 col-span-9 ">controllers</div>
        <div className=" col-span-7">
          <Station />
        </div>
      </div>
    </div>
  );
}

export default App;
