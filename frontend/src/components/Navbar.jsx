import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center w-full">
      <div className="pt-5">
        <img src={logo} alt="Babble" className="h-10" />
      </div>
    </div>
  );
};

export default Navbar;
