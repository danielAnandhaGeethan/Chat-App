import React, { useState } from "react";
import background from "../assets/background.jpg";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
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
        <Navbar />
        <div className="bg-black/60 h-[65%] w-[25%] mt-20 rounded-xl shadow-xl">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
