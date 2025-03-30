import Breadcrumb from "../components/Breadcrumb";
import CertificateOne from "../components/CertificateOne";
import FooterOne from "../components/FooterOne";
import HeaderOne from "../components/HeaderOne";
import TuitionJobs from "../components/TuitionJobs";
import Animation from "../helper/Animation";

const TuitionJobsPage = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tuition Jobs"} />

      {/* TuitionJobs */}
      <TuitionJobs />

      {/* CertificateOne */}
      <CertificateOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default TuitionJobsPage;
