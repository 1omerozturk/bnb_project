import React, { useState } from "react";
import { loginAction, registerAction } from "../redux/actions/auth.js";
import {useDispatch} from 'react-redux'
import alertify from "alertifyjs";
const Auth = () => {
  const [signUp, setSignUp] = useState(true);


  const [authData, setAuthData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const dispatch=useDispatch();


  const onChanegeFunc = (e) => {
    setAuthData({...authData, [e.target.name]: e.target.value})

  };

  const clearInput=()=>{
    const allInputs = document.getElementsByTagName('input');
    for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].value = '';
}

  }

  const authFunc=()=>{
    if(signUp){
      dispatch(registerAction(authData));
      alertify.success("Registration is successful and you can log in now.")
      setTimeout(()=>{clearInput()},100);
      setSignUp(false);
    }
    
    else{
      dispatch(loginAction(authData))
      alertify.success("Please wait the loging")
      
    }
  }
  

  return (
    <div
      className="w-full h-screen bgc 
    flex items-center justify-center overflow-hidden"
    >
      <div className="w-2/7 bg-indigo-200 bg-opacity-75 p-3 opacity-85 z-10 ">
        <h1 className="text-center text-4xl text-zinc-900 font-bold hover:opacity-85 hover:scale-x-75">
          {signUp ? "SIGN UP" : "SIGN IN"}
        </h1>
        <div className="flex flex-col space-y-3 my-4 z-0">
          {signUp && (
            <input
              type="text"
              value={authData.name}
              name="name"
              onChange={onChanegeFunc}
              placeholder="Name"
              className="input-style input-text"
            />
          )}
          {signUp && (
            <input
              type="text"
              value={authData.lastname}
              name="lastname"
              onChange={onChanegeFunc}
              placeholder="Last Name"
              className="input-style input-text"
            />
          )}
          {signUp && (
            <input
              type="text"
              value={authData.username}
              name="username"
              onChange={onChanegeFunc}
              placeholder="Username"
              className="input-style input-text"
            />
          )}
          <input
            type="text"
            value={authData.email}
            name="email"
            onChange={onChanegeFunc}
            placeholder="Email"
            className="input-style input-text"
          />
          <input
            type="password"
            value={authData.password}
            name="password"
            onChange={onChanegeFunc}
            placeholder="Password"
            className="input-style input-text"
          />
          {signUp && (
            <input
              type="password"
              placeholder="Password Again"
              className="input-style input-text"
            />
          )}
        </div>
        <div className="text-white w-full hover:bg-indigo-700 hover:scale-95 bg-indigo-400 text-sm cursor-pointer mb-3">
          {signUp ? (
            <span onClick={() => setSignUp(false)&&clearInput()}>
              Are you registered? Sign in
            </span>
          ) : (
            <span onClick={() => setSignUp(true) && clearInput()}>
              If you are not registered. Register
            </span>
          )}
        </div>
        <div onClick={authFunc} className="cursor-pointer hover:scale-95 hover:bg-violet-950 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
          {signUp ? "Sign Up" : "Sign In"}
        </div>
      </div>
    </div>
  );
};


export default Auth;