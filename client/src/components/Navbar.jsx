import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import close from "../assets/close.png";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import axios from "axios";

const Navbar = ({
  isChatPage,
  globalUsername,
  setGlobalUsername,
  profile,
  setProfile,
}) => {
  const navigate = useNavigate();

  const [blob, setBlob] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  useEffect(() => {
    if (profile === "") return;

    const response = fetch(`https://gateway.pinata.cloud/ipfs/${profile}`);
    setBlob(response.blob());
  }, [profile]);

  const handleLogout = () => {
    enqueueSnackbar("Logged out", { variant: "info", autoHideDuration: 2000 });

    setTimeout(() => {
      navigate("/");
      setGlobalUsername("");
    }, 2000);
  };

  const removeProfileChange = async () => {
    const temp = "";

    await axios
      .put(`http://localhost:5555/users/${globalUsername}/${temp}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="absolute top-0 left-0 flex justify-center w-full">
      <SnackbarProvider />
      <div
        className={`absolute ${
          isChatPage ? "" : "hidden"
        } left-10 top-0 flex items-end gap-3 h-full`}
      >
        <img
          src={profile === "" ? user : blob}
          alt="Profile"
          className="h-8 cursor-pointer"
          onClick={() => setIsProfileClicked(true)}
        />
        <h1 className="text-2xl font-semibold text-gray-400 hover:scale-105 hover:text-[#2B9095] cursor-pointer">
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
          <h1 className="text-lg font-semibold text-[#2BBB77] focus:outline-none">
            Log out
          </h1>
        </button>
      </div>
      {isProfileClicked ? (
        <div className="bg-black/40 h-screen w-full flex items-center justify-center absolute">
          <img
            src={close}
            alt="Close"
            className="top-3 right-3 absolute h-8 cursor-pointer"
            onClick={() => setIsProfileClicked(false)}
          />
          <div className="flex flex-col items-center gap-10">
            <img
              src={profile === "" ? user : blob}
              alt="Profile"
              className="h-48 w-60 px-4"
            />
            <div className="flex gap-4">
              <button
                className="text-cyan-800 font-semibold border border-gray-300 px-2 py-1 rounded-2xl bg-gray-300/90"
                onClick={removeProfileChange}
              >
                Remove Profile
              </button>
              <button className="text-cyan-800 font-semibold border border-gray-300 px-2 py-1 rounded-2xl bg-gray-300/90">
                Upload Picture
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
