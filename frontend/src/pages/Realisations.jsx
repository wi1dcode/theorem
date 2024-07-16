import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

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
    "Local commercial",
    "Appartement",
    "Maison",
    "Bureaux",
    "Pro",
  ]

  const filterProjects = (category) => {
    setSelectedCategory(category)
    if (category === "Tous les projets") {
      setFilteredProjects(gallery)
    } else {
      setFilteredProjects(gallery.filter((item) => item.category === category))
    }
  }

  return (
    <section>
      <Helmet>
        <title>Nos Réalisations | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez nos réalisations et projets chez Theorem Services. Chaque projet est un témoignage de notre engagement envers la qualité et la satisfaction client."
        />
      </Helmet>

      <NavBar />
      <div className="mb-16 roboto">
        <h2 className="text-center text-4xl roboto-bold mt-6 mb-2">
          Nos Projets
        </h2>
        <p className="text-center mb-4">
          Maisons, appartements, conceptions architecturales, rénovations
          partielles ou complètes.
        </p>

        <div className="flex justify-center max-md:flex-col max-md:items-center max-md:gap-y-2 md:space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-full max-md:w-[80%] transition duration-300 ${
                selectedCategory === category
                  ? "bg-marron text-white"
                  : "bg-gray-200 text-black"
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
              <div
                key={item.id}
                className="relative cursor-pointer w-[380px] h-[400px] max-md:w-[80%] max-lg:w-[500px] overflow-hidden shadow-lg rounded-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 hover:backdrop-blur-md transition duration-300 rounded-xl p-4">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-center mb-4">
                    {item.description}
                  </p>
                  <Link
                    to={`/realisations/${item.id}`}
                    className="py-2 px-4 bg-marron text-white rounded-full hover:bg-marron/80 transition duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Realisations
