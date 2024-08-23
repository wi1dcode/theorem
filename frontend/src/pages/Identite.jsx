import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "aos/dist/aos.css"

import identite_one from "../images/identite_one.jpg"
import qualityImageOne from "../images/coeur_ouvrage.jpg"
import qualityImageTwo from "../images/ethique.jpg"
import qualityImageThree from "../images/innovation.jpg"
import qualityImageFour from "../images/demarche_eco.jpg"
import { Link } from "react-router-dom"

const qualities = [
  {
    image: qualityImageOne,
    title: "Notre cœur à l’ouvrage",
  },
  {
    image: qualityImageTwo,
    title: "Nos pratiques éthiques",
  },
  {
    image: qualityImageThree,
    title: "Notre goût pour l’innovation",
  },
  {
    image: qualityImageFour,
    title: "Nos meilleures actions",
  },
]

function Identite() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section data-aos="fade-up" data-aos-duration="1000">
      <Helmet>
        <title>A propos | Theorem Concept</title>
        <meta
          name="description"
          content="Découvrez Theorem Concept, votre partenaire expert en rénovation. Notre engagement envers la qualité et l'innovation fait de nous le choix idéal pour vos projets de rénovation."
        />
      </Helmet>
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 soleil"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              className="object-cover rounded-3xl w-full h-[350px]"
              src={identite_one}
              alt="Chez Theorem"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 soleil-bold font-sans text-3xl soleil-book tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Moralité ?
              </h2>
              <p className="text-base american text-gray-700 md:text-lg mb-1">
                Parfois, il suffit de tourner une page pour découvrir la
                meilleure version de vous-même. Explorez notre univers à travers
                nos projets et suivez notre aventure sur les réseaux sociaux.
                Êtes-vous prêt pour votre nouveau chapitre ?
              </p>
            </div>
            <Link to="/estimation" className="flex justify-start mt-2">
              <button className="bg-vert_light rounded-lg p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300">
                Commencer mon projet
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bg-white pb-12 soleil w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="mx-auto px-4 w-full">
          <h2 className="text-4xl soleil-book text-center mb-8">
            Nos meilleurs atouts
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 w-full">
            {qualities.map((quality, idx) => (
              <div
                key={idx}
                className="h-auto flex flex-col items-center justify-start bg-white shadow-md rounded-md overflow-hidden"
              >
                <div className="w-full h-48">
                  <img
                    src={quality.image}
                    alt={quality.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-4 text-center px-4">
                    {quality.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Identite
