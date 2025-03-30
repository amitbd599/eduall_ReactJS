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

function App() {
  return (
    <BrowserRouter>
      <LoadPhosphorIcons />
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/index-1' element={<HomePageOne />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
