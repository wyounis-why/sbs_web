import "./App.css";
import LandingHeader from "./LandingHeader";
import HomePage from "./HomePage";
import Footer from "./Footer";
import HeroImage from "./HeroImage";
import MenuPage from "./MenuPage"; // You'll create this

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import Gallery from "./Gallery";
import FeaturedItems from "./FeaturedItems";

function App() {
  return (
    <Router>
      <LandingHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroImage height="60vh" />
              <FeaturedItems />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <HeroImage height="20vh" />
              {/* <LandingHeader /> */}
              <MenuPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <HeroImage height="20vh" />
              {/* <LandingHeader /> */}
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/reserve"
          element={
            <>
              <HeroImage height="20vh" />
              {/* <LandingHeader /> */}
              <Gallery />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
