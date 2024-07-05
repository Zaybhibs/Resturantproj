/* eslint-disable no-unused-vars */
import React from "react";
import "../index.css";
import Ribeye from "../assets/Ribeye.jpg";
import lemonwatering from "../assets/lemonwatering.jpg";
import pancake from "../assets/pancake.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const TodaysMenu = () => {
  return (
    <div className="w-[85%] mx-auto my-28">
      <div>
        <h1 className="text-3xl text-yellow-700 tracking-wider font-bold text-center">
          Today&apos;s special
        </h1>
        <p className="text-center font-abc pt-1 text-3xl text-bold">
          Savor the Best of Today&apos;s Kitchen Creations
        </p>
      </div>
      <div className="  md:flex items-center md:space-x-7  mt-20">
        <div
          data-aos="fade-right"
          className="bg-[#dd42ba] rounded-b-lg rounded-t-lg shadow-lg h-[80%] mt-20 pb-9 group  scale"
        >
          <img src={pancake} className="w-[500px] rounded-t-lg " alt="" />
          <div className="pl-5 pt-3 space-y-3">
            <p className="pt-3 text-2xl font-bold text-white group-hover:text-black">
              Berry Beef Bliss
            </p>
            <div className="flex  items-center space-x-2">
              <FaClock className="font-extralight text-white" />
              <p className="font-light text-white">10 mins</p>
            </div>
            <div className="flex  justify-between items-center">
              <div className="flex  font-light">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className="underline text-yellow-200 mr-4 text-xl font-bold cursor-pointer hover:text-gray-900">
                order now
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="bg-[#ff98e7] rounded-b-lg rounded-t-lg pb-9 shadow-lg mt-20 md:mt-0 group scale"
        >
          <img src={Ribeye} className="w-[600px] rounded-t-lg" alt="" />
          <div className="pl-5 pt-3 space-y-3">
            <p className="pt-2 text-2xl font-bold text-white group-hover:text-green-500 ">
              Steak & veggies Delight
            </p>
            <div className="flex items-center space-x-2">
              <FaClock className="font-extralight text-white" />
              <p className="font-light text-white">10 mins</p>
            </div>
            <div className="flex  justify-between items-center">
              <div className="flex   font-light">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className="bg-gray-800 text-white rounded-lg text-xl font-bold py-2 px-4 mr-4 cursor-pointer  group-hover:bg-yellow-200 group-hover:text-green-500 hover:text-green-400 ">
                Order now
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="bg-[#dd42ba] rounded-b-lg rounded-t-lg shadow-lg h-[80%] mt-20 pb-7 group scale "
        >
          <img src={lemonwatering} className="w-[500px] rounded-t-lg" alt="" />
          <div className="pl-5 pt-3 space-y-3 scale">
            <p className="pt-3 text-2xl font-bold  text-white group-hover:text-black">
              Morning Harvest Delight
            </p>
            <div className="flex items-center text-white space-x-2 ">
              <FaClock />
              <p className="font-light text-white">10 mins</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex   font-light">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className="">
                <p className="underline  text-yellow-200 text-xl font-bold cursor-pointer hover:text-black mr-4 ">
                  order now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysMenu;
