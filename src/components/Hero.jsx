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
        className=" bg-cover bg-no-repeat"
      >
        <div className="flex flex-col lg:flex lg:flex-row pb-10 lg:w-[97%] mx-auto">
          <div className=" order-last lg:order-first flex flex-col lg:w-[50%] pt-24 xl:pt-48 pl-10 ">
            <h1
              data-aos="fade-up"
              className="text-5xl font-semibold tracking-wide pb-8"
            >
              Fresh & Healthy Meal Plan <br />
              <span className="font-abc text-green-400 font-bold">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <div data-aos="fade-up" className="font-semibold">
              <p>Delicious Meals Delivered to Your Door</p>
              <p>From $132.95 per week</p>
            </div>
            <div data-aos="fade-up" className="pt-7">
              <button className="bg-red-500 flex justify-between hover:bg-pink-300 items-center text-white pl-2">
                Choose Your Meal Plan{" "}
                <div className="bg-red-500 border-l-2 p-3 ml-4">
                  <FaArrowRight className="text-white" />
                </div>
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className=" lg:w-[50%] order-first lg:order-last"
          >
            <img
              src={vegpic}
              alt=""
              className="w-[100%] -mb-[100px] lg:-mb-[200px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
