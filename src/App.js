import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  const [banner, setBanner] = React.useState({
    description: "Elevate Your Learning Journey with TUF+",
    timer: 60,
    link: "https://takeuforward.org/plus",
    visibility: true,
  });

  const updateBanner = (newBanner) => {
    setBanner(newBanner);
  };

  return (
    <div className="App min-h-screen bg-gradient-to-r from-[#211112] to-[#0F0F0F] flex flex-col items-center">
      <Navbar />
      <Banner banner={banner} onUpdate={updateBanner} />
      <Dashboard banner={banner} updateBanner={updateBanner} />
    </div>
  );
}

export default App;
