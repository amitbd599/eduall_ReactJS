import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import CourseGridView from "../components/CourseGridView";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import Animation from "../helper/Animation";

const CoursePage = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Courses Grid View"} />

      {/* CourseGridView */}
      <CourseGridView />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default CoursePage;
