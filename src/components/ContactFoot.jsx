import { FaLocationArrow } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";

const ContactFoot = () => {
  return (
    <div className="bg-[#f7eee0] rounded-t-lg pt-10">
      <div>
        <h1 className="text-center text-4xl  font-bold">Contact Us</h1>
        <div
          data-aos="fade"
          className="md:flex justify-around items-center  space-y-16 md:space-y-0 text-black mt-10"
        >
          <div className="text-center">
            <div className="flex justify-center items-center pb-3">
              <FaLocationArrow className="text-5xl font-bold" />
            </div>
            <p>#11, shodimu str, somolu, lagos,</p>
            <p>Seegehalli, Bengaluru, Karnataka 560049 </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-3">
              <FaMailBulk className="text-5xl font-bold" />
            </div>
            <p>nfo@bibifood.com</p>
            <p>hr@bibifood.com</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center pb-3">
              <FaVoicemail className="text-5xl font-bold" />
            </div>
            <p>+234 9643224232 - Sales and Services</p>
            <p>+234 9643224232 - Hiring queries</p>
            <p>+234 9643224232 - Whatsap</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className=" pt-8">
        <div className=" border-t-2 border-gray-600 py-7 mx-24">
          <div className="flex justify-between ">
            <p>© 2024 Zainab O. All rights reserved</p>
            <div className="flex space-x-4">
              <p> Privacy Policy</p>
              <p>Terms & Condition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFoot;
