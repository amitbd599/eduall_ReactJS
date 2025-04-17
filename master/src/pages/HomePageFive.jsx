import BannerFive from "../components/BannerFive";
import FeaturesThree from "../components/FeaturesThree";
import HeaderThree from "../components/HeaderThree";
import KidsCourses from "../components/KidsCourses";
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
    </>
  );
};

export default HomePageFive;
