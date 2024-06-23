import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ onClose }) => {
  return (
    <>
      <div className="h-screen w-screen backdrop-blur-lg z-50 top-0 left-0 bg-black/50 fixed">
        <div className="bg-gray-300 fixed rounded-md p-4  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[270px] duration-200">
          <div className="flex justify-between">
            <h2 className="font-semibold">Login</h2>
            <IoCloseOutline onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="flex mt-3">
            <form className="space-y-2  ">
              <input
                className="border-2 rounded-md w-[270px]"
                type="text"
                placeholder="Your name"
              />
              <input
                className="border-2 rounded-md w-[270px]"
                type="password"
                placeholder="Password"
              />
            </form>
          </div>
          <div>
            <button className="block bg-pink-500 font-semibold text-white text-center py-1 my-4 rounded-md px-[93px]">
              Login Now
            </button>
          </div>
          <p className="text-center">or login with</p>
          <div className="text-center flex justify-center text-2xl space-x-3 mt-1 duration-300">
            <FaFacebook className="hover:text-blue-600" />
            <FaGoogle className="hover:text-pink-500 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
