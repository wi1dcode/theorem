import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import { Link, useLocation } from "react-router-dom"

import LinkArrow from "../images/svg/LinkArrow"
import about_bg from "../images/about_bg.jpg"

import History from "./History"
import Identite from "./Identite"

import AOS from "aos"
import "aos/dist/aos.css"

function About() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
  }, [pathname])

  return (
    <section>
      <Helmet>
        <title>Qui sommes nous ? | Theorem Concept</title>
        <meta
          name="description"
          content="Découvrez Theorem Concept, votre partenaire expert en rénovation. Notre engagement envers la qualité et l'innovation fait de nous le choix idéal pour vos projets de rénovation."
        />
      </Helmet>
      <NavBar />
      <div
        className="relative soleil flex items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${about_bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-6 max-w-xl">
          <h1 className="text-4xl max-md:text-2xl md:text-4xl font-bold mb-4">
            Une aventure humaine ancrée dans des principes forts
          </h1>
          <Link
            to="/realisations"
            className="inline-block mt-4 px-6 py-2 pb-1 bg-vert_light text-white font-semibold rounded-lg hover:bg-vert_principal/80 transition duration-300"
          >
            Découvrir nos projets
          </Link>
        </div>
        <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
          <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
        </div>
      </div>
      <History />
      <Identite />
      <Footer />
    </section>
  )
}

export default About
