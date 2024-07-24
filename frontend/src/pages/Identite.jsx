import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "aos/dist/aos.css"

import identite_one from "../images/identite_one.jpg"
import qualityImageOne from "../images/engagement_two.png"
import qualityImageTwo from "../images/engagement_two.png"
import qualityImageThree from "../images/engagement_three.png"

const qualities = [
  {
    image: qualityImageOne,
    title: "Engagement",
  },
  {
    image: qualityImageTwo,
    title: "Humain",
  },
  {
    image: qualityImageThree,
    title: "Positivité",
  },
  {
    image: qualityImageOne,
    title: "Eco-responsabilité",
  },
]

function Identite() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section data-aos="fade-up" data-aos-duration="1000">
      <Helmet>
        <title>A propos | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez Theorem Services, votre partenaire expert en rénovation. Notre engagement envers la qualité et l'innovation fait de nous le choix idéal pour vos projets de rénovation."
        />
      </Helmet>
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
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
              <h2 className="max-w-lg mb-6 soleil-bold font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Chez Theorem, <br /> nous transformons chaque projet en un{" "}
                <span className="inline-block text-vert_principal">
                  carré parfait
                </span>
              </h2>
              <p className="text-base soleil text-gray-700 md:text-lg mb-1">
                Theorem est bien plus qu'une simple entreprise; c'est une entité
                qui incarne l'essence d'une marque engagée et responsable. La
                mission est de transcender les attentes en offrant des solutions
                de rénovation innovantes et pérennes. Guidé par des valeurs de
                confiance et d'engagement envers l'avenir, Theorem rassemble une
                équipe dynamique, curieuse, à l'écoute et réactive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white pb-12 soleil w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="mx-auto px-4 w-full">
          <h2 className="text-4xl soleil-bold text-center mb-8">
            Nos plus belles qualités
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
                  <h3 className="text-xl font-semibold mb-4 text-center">
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
