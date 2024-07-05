import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown, FaCaretUp, FaUser } from "react-icons/fa";
import Popup from "../components/Popup";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  // Function to close the popup
  const onClose = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div
        data-aos="fade"
        className="flex justify-between py-2 px-8 lg:px-20  items-center bg-white shadow-lg"
      >
        <div className=" text-3xl lg:pl-8 font-bold">BiBi</div>
        <div className=" flex justify-center items-center mr-4">
          <ul className="lg:flex gap-7 text-xl items-center font-semibold hidden ">
            <li className="hover:text-red-400">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="hover:text-red-400">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:text-red-400">
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="hover:text-red-400 flex items-center relative"
            >
              <NavLink to="/categories">Categories</NavLink>
              <span onMouseEnter={() => setDropdown(true)}>
                {dropdown ? <FaCaretUp /> : <FaCaretDown />}
              </span>
              {dropdown && (
                <ul className="absolute top-6 left-0 bg-white text-black w-36 block transition-all mt-1 hover:text-green-400">
                  <li className="p-2 hover:text-green-200">
                    {" "}
                    <NavLink to="">Vegetables</NavLink>
                  </li>
                  <li className="p-2 hover:text-orange-200">
                    {" "}
                    <NavLink to="">Fruit</NavLink>
                  </li>
                  <li className="p-2 hover:text-amber-600 ">
                    {" "}
                    <NavLink to="">Grain</NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <ul>
            <li className="block ml-4">
              <button
                onClick={togglePopup}
                className="flex justify-center items-center bg-green-400 gap-2 p-2 rounded-lg hover:scale-75 duration-300 "
              >
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
      {popupVisible && <Popup onClose={onClose} />}
    </>
  );
};

export default Navbar;
