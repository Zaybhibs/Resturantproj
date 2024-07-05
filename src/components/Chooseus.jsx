import React, { useEffect } from "react";
import { FaBus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Chooseus = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className=" mt-[15rem] md:mt-[34rem] bg-[#f9fafb] ">
      <div className=" w-[90%] mx-auto py-10 md:py-32">
        <h1 data-aos="fade" className="text-center text-2xl font-semibold">
          Why Choose Us
        </h1>
        <div
          data-aos="fade"
          data-aos-delay="300"
          className=" md:flex gap-2 justify-center text-center mt-5 md:mt-20"
        >
          <div className=" flex items-center space-y-28">
            <div className="flex flex-col justify-center items-center space-y-4">
              <p className="font-semibold">
                Delicious Meals Delivered to Your Doorstep
              </p>
              <p className=" text-5xl text-pink-500 rotate-90 translate-x-5 text-center font-bold">
                ....
              </p>
              <FaBus className="text-pink-500 text-5xl font-bold" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <FaBus className="text-5xl text-green-300 font-bold" />
              <p className=" text-5xl text-green-300 rotate-90 translate-x-5 text-center font-bold">
                ....
              </p>
              <p className="font-semibold">
                Convenient Online Ordering/User-Friendly Website
              </p>
            </div>
          </div>
          <div className="flex items-center space-y-28">
            <div className="flex flex-col justify-center items-center space-y-4">
              <p className="font-semibold">
                Exceptional Quality and Freshness Ingredients
              </p>
              <p className=" text-5xl text-pink-500 rotate-90 translate-x-5 text-center font-bold">
                ....
              </p>
              <FaBus className="text-pink-500 text-5xl font-bold" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4">
              <FaBus className="text-5xl text-green-300 font-bold" />
              <p className="text-5xl text-green-300 rotate-90 translate-x-5 text-center font-bold">
                ....
              </p>
              <p className="font-semibold">Customer-Centric Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
