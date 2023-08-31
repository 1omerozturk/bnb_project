import React from "react";
import { BiLogOut, BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

const userName=(JSON.parse(localStorage.getItem("auth")).user?.username)
  return (
    <div className="h-16  bg-indigo-600 flex items-center justify-between px-5">
      <div
        className="text-decoration-none hover:text-zinc-950 text-white font-bold text-2xl cursor-pointer hover:scale-x-90"
        href="/"
        title="NFT"
      >
        NFT APP
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none rounded-md h-10 w-full "
          />
          <BiSearch
            title="Search"
            className="cursor-pointer hover:scale-90"
            size={25}
          ></BiSearch>
        </div>
        <div
          onClick={openModal}
          className="w-36 border p-2 rounded-md text-center border-indigo-950 text-white flex items-center hover:bg-indigo-950 cursor-pointer hover:text-slate-50 hover:scale-90"
        >
          Upload NFT
        </div>
        <div
          title="Account"
          className="border-4  p-2 rounded-full 
        text-center text-zinc-950 border-indigo-950
         text-white flex text-center hover:bg-indigo-950
          cursor-pointer hover:text-slate-50 hover:skew-x-12
           
           "
        >
           <h2 className="text-white text-xl font-bold mb-2 hover:scale-90
          ">
               {userName? userName:"LogIn"&&localStorage.clear()&&<Link to={"/auth"}/>}

           </h2>

        </div>
        <BiLogOut
          onClick={logoutFunc}
          size={25}
          title="Logout"
          className="cursor-pointer hover:scale-90 "
        />
      </div>
    </div>
  );
};

export default Navbar;
