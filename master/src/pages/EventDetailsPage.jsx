import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import EventDetailsOne from "../components/EventDetailsOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import Animation from "../helper/Animation";

const EventDetailsPage = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Event Details"} />

      {/* EventDetailsOne */}
      <EventDetailsOne />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default EventDetailsPage;
