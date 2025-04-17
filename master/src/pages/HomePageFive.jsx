import BannerFive from "../components/BannerFive";
import HeaderThree from "../components/HeaderThree";
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
    </>
  );
};

export default HomePageFive;
