import React, { useState } from "react";
import Login from "./Login";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-[#160F10] to-[#0F0F0F] text-white p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
          <h1
            className="text-5xl font-bold font-serif"
            style={{ color: "#D41F30" }}
          >
            BannerDashboard
          </h1>
          <button
            onClick={handleLoginClick}
            className="bg-rose-600 hover:bg-rose-500 text-white font-semibold py-2 px-5 rounded-md transition duration-300"
          >
            Login
          </button>
        </div>
      </nav>
      {}
      <Login isOpen={isLoginOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
