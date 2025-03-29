import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop.jsx";
import LoadPhosphorIcons from "./helper/LoadPhosphorIcons.jsx";
import HomePageOne from "./pages/HomePageOne";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <BrowserRouter>
      <LoadPhosphorIcons />
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/index-1' element={<HomePageOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
