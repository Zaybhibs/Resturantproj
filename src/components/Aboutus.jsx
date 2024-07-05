import { useState } from "react";

import polygon from "../assets/polygon.png";
import { FaUser } from "react-icons/fa";
import Popup from "../components/Popup.jsx";
import vector from "../assets/vector.png";
import "../index.css";

const Aboutus = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  // Function to close the popup
  const onClose = () => {
    setPopupVisible(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${polygon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70%",
        marginBottom: "20px",
        paddingBottom: "60px",
        position: "relative",
      }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl text-center  pt-36 pb-10 text-yellow-50 font-semibold">
          About Us
        </h1>
        <div data-aos="fade" className="bg-gray-100 w-[95%] mx-auto ">
          <p className=" font-bcc p-20 text-lg tracking-wider ">
            Welcome to{" "}
            <span className="text-pink-500 font-cdd font-bold">Bibifood</span>,
            where culinary excellence meets the convenience of online dining.
            Our mission is to bring gourmet experiences to your doorstep,
            combining the freshest ingredients with masterful preparation. Every
            dish is crafted with passion, ensuring a delightful dining
            experience in the comfort of your home. At{" "}
            <span className="text-pink-500 font-bold font-cdd">Bibifood</span>,
            we believe in the power of good food to bring people together. Our
            team of experienced chefs and dedicated staff work tirelessly to
            create a menu that caters to diverse tastes and preferences. Whether
            you &quot; re craving a classic comfort dish or an exotic new
            flavor, we have something to satisfy every palate. We are committed
            to sustainability and source our ingredients from local farms and
            suppliers who share our values. This not only ensures the highest
            quality and freshness but also supports our community and reduces
            our environmental footprint.
          </p>
          <div className="flex flex-col justify-center items-center pb-8">
            <button
              onClick={togglePopup}
              className="flex justify-center items-center bg-green-400 gap-2 p-2 rounded-lg hover:scale-75 duration-300 "
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full">
        <img src={vector} alt="" className="mx-auto" />
      </div>
      {popupVisible && <Popup onClose={onClose} />}
    </div>
  );
};

export default Aboutus;
