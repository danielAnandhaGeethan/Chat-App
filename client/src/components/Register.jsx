import React, { useState } from "react";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLogin, setGlobalUsername, setProfile }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (identifier === "" || password === "" || repassword === "") {
      enqueueSnackbar("Incomplete Credentials", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return;
    }

    if (password !== repassword) {
      enqueueSnackbar("Passwords doesn't match", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return;
    }

    const data = [identifier, password];

    await axios
      .post(`http://localhost:5555/users/${data}`)
      .then((res) => {
        console.log(res.data);

        setGlobalUsername(res.data.username);
        setProfile("");

        enqueueSnackbar("Registered", {
          variant: "success",
          autoHideDuration: 2000,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <SnackbarProvider />
      <h1 className="text-white text-2xl px-[30px] text-center py-5 md:py-10 mb-2 opacity-0 sm:opacity-100">
        Express yourself freely. Sign up for free!
      </h1>
      <div className="flex flex-col gap-6 mb-3">
        <div className="flex flex-col items-center gap-3">
          <input
            type="text"
            placeholder="Mail / Mobile"
            className="py-1.5 px-4 w-[130px] md:w-[190px] rounded-xl focus:outline-none text-sm"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="py-1.5 px-4 w-[130px] md:w-[190px] rounded-xl focus:outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="py-1.5 px-4 w-[130px] md:w-[190px] rounded-xl focus:outline-none text-sm"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>
        <button
          className="bg-[#2BBB77] py-1 w-[130px] md:w-[190px] rounded-xl focus:outline-none"
          onClick={handleRegister}
        >
          Register
        </button>
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
