import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Chooseus from "../components/Chooseus";
import Aboutus from "../components/Aboutus";
import TodaysMenu from "../components/TodaysMenu";
import ContactFoot from "../components/ContactFoot";

const Home = () => {
  return (
    <div
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      data-aos-delay="100"
      className="overflow-hidden"
    >
      <Navbar />
      <Hero />
      <Section />
      <Chooseus />
      <Aboutus />
      <TodaysMenu />
      <ContactFoot />
    </div>
  );
};

export default Home;
