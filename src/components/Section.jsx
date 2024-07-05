import React, { useEffect } from "react";
import leaf from "../assets/leaf.png";
import apple from "../assets/apple.png";
import kiwi from "../assets/kiwi.png";
import lemon from "../assets/lemon.png";
import tomato from "../assets/tomato.png";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-[95%] my-20 relative z-20">
      <div className="text-center relative z-20">
        <h1
          data-aos="fade-up"
          className="text-2xl font-semibold tracking-widest"
        >
          Taste the <span className="text-pink-500">healthy</span> difference
        </h1>
        <div className="w-[94%] mx-auto mt-20">
          <div className="md:float-start md:w-[50%]">
            <p data-aos="fade-up" className="text-start ">
              We know that <span className="text-pink-400">time</span> is the
              greatest value in the modern world.Our healthy meal plan delivery
              service Good Food in Miami is the answer for those who want to eat
              healthily, saving time for buying food and preparing delicious,
              healthy meals.
            </p>
          </div>
          <div className="md:float-end md:w-[50%] ">
            <p data-aos="fade-up" className="text-start pt-52 ">
              We know that <span className="text-pink-400">time</span> is the
              greatest value in the modern world.Our healthy meal plan delivery
              service Good Food in Miami is the answer for those who want to eat
              healthily, saving time for buying food and preparing delicious,
              healthy meals
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-20">
        <img
          src={leaf}
          alt=""
          className=" absolute -top-[40rem] md:-top-44 w-[170px] "
          data-aos="fade-right"
        />
        <img
          src={lemon}
          alt=""
          className=" animate-pic2 absolute right-4 md:right-12 -top-[32rem] md:-top-28 w-[132px] md:w-[210px]"
          data-aos="fade-left"
        />
        <img
          src={tomato}
          alt=""
          className="absolute -bottom-[120px] md:-bottom-[450px] w-[225px] md:w-[265px]"
          data-aos="fade-right"
        />
        <img
          src={apple}
          alt=""
          className="absolute  right-2 lg:-right-10 -bottom-[120px]  md:-bottom-[450px] w-[150px] md:w-[180px]"
          data-aos="fade-left"
        />
        <img
          src={kiwi}
          alt=""
          className="absolute lg:left-[331px] xl:left-[500px] left-[121px] md:left-[233px] bottom-[143px] md:-bottom-[273px] lg:-bottom-[300px] w-[160px]"
          data-aos="fade"
        />
      </div>
      <div className=" absolute  -bottom-[152px] md:-bottom-[500px] left-[82px] md:left-[233px] lg:left-[352px] xl:left-[660px]">
        <button className="bg-red-500 flex justify-between hover:bg-pink-300 items-center text-white pl-2">
          Choose Your Meal Plan{" "}
          <div className="bg-red-500 border-l-2 p-3 ml-4">
            <FaArrowRight className="text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section;
