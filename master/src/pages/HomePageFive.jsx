import BannerFive from "../components/BannerFive";
import CounterFour from "../components/CounterFour";
import FeaturesThree from "../components/FeaturesThree";
import HeaderThree from "../components/HeaderThree";
import KidsCourses from "../components/KidsCourses";
import MarqueeOne from "../components/MarqueeOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";

const HomePageFive = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerFive */}
      <BannerFive />

      {/* FeaturesThree */}
      <FeaturesThree />

      {/* KidsCourses */}
      <KidsCourses />

      {/* CounterFour */}
      <CounterFour />

      {/* MarqueeOne */}
      <MarqueeOne />
    </>
  );
};

export default HomePageFive;
