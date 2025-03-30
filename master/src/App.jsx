import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop.jsx";
import LoadPhosphorIcons from "./helper/LoadPhosphorIcons.jsx";
import HomePageOne from "./pages/HomePageOne";
import AboutPage from "./pages/AboutPage.jsx";
import AboutFourPage from "./pages/AboutFourPage.jsx";
import AboutThreePage from "./pages/AboutThreePage.jsx";
import AboutTwoPage from "./pages/AboutTwoPage.jsx";
import ApplyAdmissionPage from "./pages/ApplyAdmissionPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogClassicPage from "./pages/BlogClassicPage.jsx";
import BlogDetailsPage from "./pages/BlogDetailsPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BookOnlineClassPage from "./pages/BookOnlineClassPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CoursePage from "./pages/CoursePage.jsx";
import CourseDetailsPage from "./pages/CourseDetailsPage.jsx";
import CourseListViewPage from "./pages/CourseListViewPage.jsx";
import EventDetailsPage from "./pages/EventDetailsPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import FavoriteCoursePage from "./pages/FavoriteCoursePage.jsx";
import FindTutorsPage from "./pages/FindTutorsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePageTwo from "./pages/HomePageTwo.jsx";
import HomePageThree from "./pages/HomePageThree.jsx";
import HomePageFour from "./pages/HomePageFour.jsx";
import InstructorPage from "./pages/InstructorPage.jsx";
import InstructorDetailsPage from "./pages/InstructorDetailsPage.jsx";
import InstructorTwoPage from "./pages/InstructorTwoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <LoadPhosphorIcons />
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/index-1' element={<HomePageOne />} />
        <Route exact path='/index-2' element={<HomePageTwo />} />
        <Route exact path='/index-3' element={<HomePageThree />} />
        <Route exact path='/index-4' element={<HomePageFour />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/about-two' element={<AboutTwoPage />} />
        <Route exact path='/about-three' element={<AboutThreePage />} />
        <Route exact path='/about-four' element={<AboutFourPage />} />
        <Route exact path='/apply-admission' element={<ApplyAdmissionPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/blog-classic' element={<BlogClassicPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        <Route exact path='/blog-list' element={<BlogListPage />} />
        <Route
          exact
          path='/book-online-class'
          element={<BookOnlineClassPage />}
        />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/course' element={<CoursePage />} />
        <Route exact path='/course-details' element={<CourseDetailsPage />} />
        <Route
          exact
          path='/course-list-view'
          element={<CourseListViewPage />}
        />
        <Route exact path='/event-details' element={<EventDetailsPage />} />
        <Route exact path='/events' element={<EventsPage />} />
        <Route exact path='/faq' element={<FaqPage />} />
        <Route exact path='/favorite-course' element={<FavoriteCoursePage />} />
        <Route exact path='/find-tutors' element={<FindTutorsPage />} />
        <Route exact path='/gallery' element={<GalleryPage />} />
        <Route exact path='/instructor' element={<InstructorPage />} />
        <Route
          exact
          path='/instructor-details'
          element={<InstructorDetailsPage />}
        />
        <Route exact path='/instructor-two' element={<InstructorTwoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
