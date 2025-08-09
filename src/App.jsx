import React, { useState, useEffect } from "react";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px se chhota to mobile
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-screen bg-[rgb(20,20,20)] text-white flex items-center justify-center text-center p-6">
        <h1 className="text-2xl font-bold">
          Please view this site on a desktop.<br />  
          Mobile version coming soon 🚀
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[rgb(20,20,20)] text-white flex overflow-hidden">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
