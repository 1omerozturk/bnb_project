import React from "react";
import { useState } from "react";
import alertify from "alertifyjs";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    
    if (username === "admin" && password === "1234") {
      // Giriş başarılı
      alertify.success("Successful Login, You are Welcome Admin 👍😍");
      setTimeout(() => {
        window.location = "/auth";
      }, 1500);
    } else {
      // Giriş başarısız
      alertify.error("Fault Login, Please try again 😉");
    }
  };
  return (
    <div className="flex flex-col bg-indigo-200 items-center justify-center min-h-screen focus:shadow-2xl focus:shadow-indigo-950">
      <div className="text-center font-extrabold shadow-lg shadow-indigo-800 grid w-80">
        <h1 className="text-2xl font-extrabold mb-12 shadow-md shadow-indigo-950 select-none hover:bg-tranparent hover:shadow-2xl hover:shadow-slate-950 hover:scale-95">
          ADMİN LOGİN
        </h1>
        <div className="mb-2">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
            className="border w-4/5 focus:scale-105 hover:bg-slate-200 border-indigo-300 p-2 rounded-xl"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="border w-4/5 select-none focus:scale-105 hover:bg-slate-200 border-indigo-300 p-2 rounded-xl"
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="select-none w-2/5 mb-2 text-2xl hover:bg-indigo-700 hover:shadow-2xl hover:shadow-slate-950 bg-indigo-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
