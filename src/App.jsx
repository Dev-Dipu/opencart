import React from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";



function App() {

  return (
    <div className="w-full h-screen bg-[rgb(20,20,20)] text-white flex overflow-hidden">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
