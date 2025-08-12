import React from "react";
import logo from '../assets/logo.png'

const Loader = () => {
  return (
    <div className="relative bg-white w-screen h-screen flex items-center justify-center">
      <div className="absolute overflow-hidden w-32 h-32 border-4 border-white border-t-[#14725c] rounded-full animate-spin"></div>

      <img
        src={logo} 
        alt="Logo"
        className="w-20 h-20"
      />
    </div>
  );
};

export default Loader;
