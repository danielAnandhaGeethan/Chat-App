import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Navbar = ({ isChatPage, globalUsername, setGlobalUsername }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    enqueueSnackbar("Logged out", { variant: "info", autoHideDuration: 2000 });

    setTimeout(() => {
      navigate("/");
      setGlobalUsername("");
    }, 2000);
  };

  return (
    <div className="absolute top-0 left-0 flex justify-center w-full">
      <SnackbarProvider />
      <div
        className={`absolute ${isChatPage ? "" : "hidden"} left-10 top-2 pt-5`}
      >
        <h1 className="text-2xl font-semibold text-white hover:scale-105 hover:text-[#2B9095] cursor-pointer">
          {globalUsername}
        </h1>
      </div>
      <div className="pt-5">
        <img src={logo} alt="Babble" className="h-10" />
      </div>
      <div
        className={`absolute ${
          isChatPage ? "" : "hidden"
        } pt-5 right-10 top-1.5`}
      >
        <button
          onClick={handleLogout}
          className="border border-[#2BBB77] rounded-xl px-1 bg-[#2B9095]/30"
        >
          <h1 className="text-lg font-semibold text-[#2BBB77]">Log out</h1>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
