import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

const gallery = require("../services/gallery.json")

function Realisations() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
  }, [pathname])

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
      <div className="mb-16">
        <h2 className="text-center text-4xl avenir mt-6 mb-4">
          Nos réalisations
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          Retrouvez nos différents projets
        </p>
        <div
          className="flex flex-wrap justify-center items-center gap-5 mx-auto max-w-xl  lg:max-w-screen-xl md:px-24 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {gallery.map((item, index) => {
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
                    En voir plus
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
