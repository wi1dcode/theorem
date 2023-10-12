import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Work from "../components/Work"
import Services from "../components/Services"
import { Step } from "../components/Step"
import Faq from "../components/FAQ"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import AOS from "aos"
import "aos/dist/aos.css"

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    AOS.init()
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <main className="w-full">
      <NavBar />
      <Header />
      <div id="work" className="w-full mt-2 px-2">
        <Work />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Services />
      </div>
      <div
        className="w-full mt-2 px-2 mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Step />
      </div>
      <div
        className="w-full mt-24 px-2 mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Reviews />
      </div>
      <div
        className="w-full mt-2 px-2 mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Faq />
      </div>
      <div
        id="contact"
        className="w-full mt-2 px-2 mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Contact />
      </div>
      <Footer />
      {isVisible && (
        <button
          className="fixed right-5 bottom-5 text-white p-2 bg-marron rounded-full"
          onClick={scrollToTop}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </main>
  )
}

export default Home
