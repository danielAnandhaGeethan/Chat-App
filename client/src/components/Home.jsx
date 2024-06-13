import React, { useState } from "react";
import background from "../assets/background.jpg";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

const Home = ({ globalUsername, setGlobalUsername, profile, setProfile }) => {
  const [isLogin, setIsLogin] = useState(true);

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
          isChatPage={false}
          globalUsername={globalUsername}
          setGlobalUsername={setGlobalUsername}
          profile={profile}
          setProfile={setProfile}
        />
        <div className="bg-black/60 h-[65%] w-[60%] md:w-[36%] lg:w-[23%] mt-20 rounded-xl shadow-xl">
          {isLogin ? (
            <Login
              setIsLogin={setIsLogin}
              setGlobalUsername={setGlobalUsername}
              setProfile={setProfile}
            />
          ) : (
            <Register
              setIsLogin={setIsLogin}
              setGlobalUsername={setGlobalUsername}
              setProfile={setProfile}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
