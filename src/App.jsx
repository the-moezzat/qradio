function App() {
  return (
    <div className="container mx-auto px-3 grid items-center justify-center h-screen">
      <div className="h-96 w-[900px] bg-blue-500 grid grid-cols-12 gap-2">
        <div className="bg-orange-500 h-14 col-span-5 ">controllers</div>
        <div className="bg-green-500 h-14 col-span-7">List of stations</div>
      </div>
    </div>
  );
}

export default App;
