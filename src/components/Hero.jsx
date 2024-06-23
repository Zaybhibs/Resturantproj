import React from "react";
import heroBg from "../assets/heroBg.png";
import vegpic from "../assets/hero-vegs.png";
import { FaArrowRight } from "react-icons/fa";
import "../index.css";

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroBg})` }}
        className=" animate-head bg-cover bg-no-repeat"
      >
        <div className=" animate-content flex flex-col lg:flex lg:flex-row lg:w-[97%] lg:h-[80vh] mx-auto">
          <div className=" animate-text order-last lg:order-first flex flex-col lg:w-[50%] lg:pt-48 pl-10 ">
            <h1 className="text-5xl font-semibold tracking-wide pb-8">
              Fresh & Healthy Meal Plan <br />
              <span className="font-abc text-green-400 font-bold">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <div className="font-semibold">
              <p>Delicious Meals Delivered to Your Door</p>
              <p>From $132.95 per week</p>
            </div>
            <div className="pt-7">
              <button className="bg-red-500 flex justify-between hover:bg-pink-300 items-center text-white pl-2">
                Choose Your Meal Plan{" "}
                <div className="bg-red-500 border-l-2 p-3 ml-4">
                  <FaArrowRight className="text-white" />
                </div>
              </button>
            </div>
          </div>
          <div className="animate-pic  lg:w-[50%] order-first md:order-last">
            <img src={vegpic} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
