import './App.css'
import LandingPages from './Pages/LandingPages'

import AOS from "aos";          // correct import
import "aos/dist/aos.css";      // import styles

import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  return (
    <>
      <LandingPages />
    </>
  )
}

export default App