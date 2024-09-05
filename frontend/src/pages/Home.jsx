import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Work from "../components/Work"
import Faq from "../components/FAQ"
import Reviews from "../components/Reviews"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import AOS from "aos"
import "aos/dist/aos.css"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PopupModal } from "react-calendly"
import Stats from "../components/Stats"
import CircleSteps from "../components/CircleSteps"
import InterventionZones from "../components/InterventionZones"
import Engagements from "../components/Engagements"

function Home() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [showRecallButton, setShowRecallButton] = useState(false)
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

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
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    AOS.init()
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const openCalendlyPopup = () => {
    setIsCalendlyOpen(true)
  }

  const closeCalendlyPopup = () => {
    setIsCalendlyOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRecallButton(true)
    }, 60000) // 60,000 ms = 1 minute

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="w-full">
      <Helmet>
        <title>Theorem Concept | Rénovation</title>
        <meta
          name="description"
          content="Bienvenue sur Theorem Concept. Découvrez nos services de rénovation immobilière et nos solutions personnalisées pour tous vos projets."
        />
      </Helmet>
      <NavBar />
      <Header />
      <Stats />
      <div id="work" className="w-full mt-6 soleil">
        <Work />
      </div>
      <div
        className="w-full mt-2 mb-2 px-2 soleil flex items-center justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <CircleSteps />
      </div>
      <div
        className="w-full px-2 mb-2 soleil"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Engagements />
      </div>

      <div
        className="w-full mt-6 px-2 mb-2 soleil"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Reviews />
      </div>
      <div
        className="w-full mt-2 px-2 mb-2 soleil"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Faq />
      </div>
      <div id="contact" className="w-full mt-2 soleil">
        <InterventionZones />
      </div>
      <Footer />
      {isVisible && (
        <button
          className="fixed right-5 bottom-5 text-white p-2 bg-vert_principal rounded-full"
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
      {showRecallButton && (
        <button
          onClick={openCalendlyPopup}
          className="fixed left-5 soleil bottom-5 text-vert_principal p-2 bg-white rounded-lg z-10 border-vert_principal border"
        >
          📞 Être rappelé dès que possible
        </button>
      )}
      <div className="w-full h-full soleil">
        <PopupModal
          url="https://calendly.com/magomedunknown/test"
          onModalClose={closeCalendlyPopup}
          open={isCalendlyOpen}
          rootElement={document.getElementById("root")}
          text="Être rappelé dès que possible"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
    </main>
  )
}

export default Home
