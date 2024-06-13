import React from "react";
import Navbar from "./Navbar";
import background from "../assets/background.jpg";

const Chat = ({ globalUsername, setGlobalUsername, profile, setProfile }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
        height: "100vh",
      }}
    >
      <div className="bg-white/20 h-full z-1 flex justify-center items-center">
        <Navbar
          isChatPage={true}
          globalUsername={globalUsername}
          setGlobalUsername={setGlobalUsername}
          profile={profile}
          setProfile={setProfile}
        />
      </div>
    </div>
  );
};

export default Chat;
