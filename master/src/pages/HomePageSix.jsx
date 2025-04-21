import React from "react";
import Preloader from "../helper/Preloader";
import Animation from "../helper/Animation";
import HeaderThree from "../components/HeaderThree";
import BannerSix from "../components/BannerSix";
import AboutFive from "../components/AboutFive";
import ExploreCourseThree from "../components/ExploreCourseThree";
import ChildFuture from "../components/ChildFuture";
import OurPopularCourse from "../components/OurPopularCourse";

const HomePageSix = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerSix */}
      <BannerSix />

      {/* AboutFive */}
      <AboutFive />

      {/* ExploreCourseThree */}
      <ExploreCourseThree />

      {/* ChildFuture */}
      <ChildFuture />

      {/* OurPopularCourse */}
      <OurPopularCourse />
    </>
  );
};

export default HomePageSix;
