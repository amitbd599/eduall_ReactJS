import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import GallerySection from "../components/GallerySection";
import HeaderOne from "../components/HeaderOne";
import Animation from "../helper/Animation";

const GalleryPage = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Gallery"} />

      {/* GallerySection */}
      <GallerySection />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default GalleryPage;
