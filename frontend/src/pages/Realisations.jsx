import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import ReactGA from "react-ga4"

import ComingSoon from "../images/projects/coming_soon.jpg"
import RapeeMain from "../images/projects/rapee/main_rapee.jpg"
import FabourgOne from "../images/projects/fabourg/fabourg_one.jpg"
import JauresMain from "../images/projects/jaures/jaures_main.jpg"
import OphelieChambreTwo from "../images/projects/ophelie/ophelie_salon_2.jpg"
import JuppiterProjet from "../images/projects/juppiter/projet-juppiter.jpg"

const gallery = require("../services/gallery.json")

function Realisations() {
  const { pathname } = useLocation()
  const [filteredProjects, setFilteredProjects] = useState(gallery)
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets")

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
  }, [pathname])

  const categories = [
    "Tous les projets",
    "Appartement/Maison",
    "Local commercial",
    "Bureaux",
  ]

  const imageMap = {
    "main_rapee.jpg": RapeeMain,
    "fabourg_one.jpg": FabourgOne,
    "jaures_main.jpg": JauresMain,
    "ophelie_salon_2.jpg": OphelieChambreTwo,
    "projet-juppiter.jpg": JuppiterProjet,
    "coming_soon.jpg": ComingSoon,
  }

  const filterProjects = (category) => {
    setSelectedCategory(category)
    if (category === "Tous les projets") {
      setFilteredProjects(gallery)
    } else {
      setFilteredProjects(gallery.filter((item) => item.category === category))
    }
  }

  const trackProjectClick = (projectTitle) => {
    ReactGA.event({
      category: "Projets",
      action: `Projet ouvert: ${projectTitle}`,
      label: projectTitle,
    })
  }

  return (
    <section>
      <Helmet>
        <title>Nos Réalisations | Theorem Concept</title>
        <meta
          name="description"
          content="Découvrez nos réalisations et projets chez Theorem Concept. Chaque projet est un témoignage de notre engagement envers la qualité et la satisfaction client."
        />
      </Helmet>

      <NavBar />
      <div className="mb-16 soleil">
        <h2 className="text-center text-4xl soleil mt-6 mb-2">Nos Projets</h2>
        <p className="text-center mb-4 courier-prime-regular">
          Maisons, appartements, conceptions architecturales, rénovations
          partielles ou complètes.
        </p>

        <div className="flex justify-center max-md:flex-col max-md:items-center max-md:gap-y-2 md:space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 pb-1 rounded-full max-md:w-[80%] transition hover:bg-vert_principal hover:text-white border border-vert_principal duration-300 ${
                selectedCategory === category
                  ? "bg-vert_principal border-vert_principal text-white"
                  : "text-black"
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-center items-center gap-5 mx-auto max-w-xl lg:max-w-screen-xl md:px-24 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {filteredProjects.map((item, index) => {
            return (
              <Link
                to={`/realisations/${item.id}`}
                onClick={() => trackProjectClick(item.title)}
                key={item.id}
              >
                <div className="relative cursor-pointer max-md:w-[350px] w-[380px] h-[400px] max-lg:w-[500px] overflow-hidden shadow-lg rounded-xl transition duration-300 transform hover:scale-105">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={imageMap[item.img]}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 hover:backdrop-blur-md transition duration-300 rounded-xl p-4">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-center mb-4">
                      {item.under_title}
                    </p>
                    <Link
                      to={`/realisations/${item.id}`}
                      className="py-2 px-4 pb-1 bg-vert_principal text-white rounded-full hover:bg-vert_principal transition duration-300"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Realisations
