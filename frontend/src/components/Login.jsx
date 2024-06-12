import React from "react";

const Login = ({ setIsLogin }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-2xl px-[40px] text-center py-10 mb-2">
        Your friends are waiting. Sign in!
      </h1>
      <div className="flex flex-col gap-6 mb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Username"
            className="py-1.5 px-4 rounded-xl focus:outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1.5 px-4 rounded-xl focus:outline-none text-sm"
          />
        </div>
        <button className="bg-[#2BBB77] py-1 rounded-xl">Login</button>
      </div>
      <h1
        className="text-sm text-[#2B9095] cursor-pointer underline"
        onClick={() => setIsLogin(false)}
      >
        New User ? Register
      </h1>
    </div>
  );
};

export default Login;
