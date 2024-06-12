import React from "react";

const Register = ({ setIsLogin }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-2xl px-[30px] text-center py-10 mb-2">
        Express yourself freely. Sign up for free!
      </h1>
      <div className="flex flex-col gap-6 mb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Mail / Mobile"
            className="py-1.5 px-4 rounded-xl focus:outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-1.5 px-4 rounded-xl focus:outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="py-1.5 px-4 rounded-xl focus:outline-none text-sm"
          />
        </div>
        <button className="bg-[#2BBB77] py-1 rounded-xl">Register</button>
      </div>
      <h1
        className="text-sm text-[#2B9095] cursor-pointer underline"
        onClick={() => setIsLogin(true)}
      >
        Already a user ? Login
      </h1>
    </div>
  );
};

export default Register;
