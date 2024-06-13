import React, { useState } from "react";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin, setGlobalUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username === "" || password === "") {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return;
    }

    await axios
      .get(`http://localhost:5555/users/${username}/${password}`)
      .then((res) => {
        console.log(res.data);

        setGlobalUsername(username);

        enqueueSnackbar("Logged In", {
          variant: "success",
          autoHideDuration: 2000,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((err) => {
        enqueueSnackbar("Incorrect Credentials", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <div className="flex flex-col items-center">
      <SnackbarProvider />
      <h1 className="text-white text-2xl px-[40px] text-center py-10 mb-2 opacity-0 sm:opacity-100">
        Your friends are waiting. Sign in!
      </h1>
      <div className="flex flex-col gap-6 mb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Username"
            className="py-1.5 px-4 w-[130px] md:w-[190px] rounded-xl focus:outline-none text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="py-1.5 px-4 w-[130px] md:w-[190px] rounded-xl focus:outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-[#2BBB77] py-1 w-[130px] md:w-[190px] rounded-xl focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
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
