import "./App.css";
import LandingPages from "./Pages/LandingPages";

import AOS from "aos"; // correct import
import "aos/dist/aos.css"; // import styles

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import AboutPage from "./Pages/AboutPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <div className="overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
