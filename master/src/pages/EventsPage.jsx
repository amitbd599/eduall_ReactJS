import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import EventsAllOne from "../components/EventsAllOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import Animation from "../helper/Animation";

const EventsPage = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Events"} />

      {/* EventsAllOne */}
      <EventsAllOne />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default EventsPage;
