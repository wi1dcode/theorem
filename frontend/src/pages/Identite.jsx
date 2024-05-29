import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "aos/dist/aos.css"

import identite_one from "../images/identite_one.jpg" // Update these paths to your image paths
import identite_two from "../images/identite_two.jpg"

function Identite() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section>
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
              <h2 className="max-w-lg mb-6 roboto-bold font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Chez Theorem, <br /> nous transformons chaque projet en un{" "}
                <span className="inline-block text-marron">carré parfait</span>
              </h2>
              <p className="text-base roboto text-gray-700 md:text-lg mb-1">
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
        <div className="flex flex-col gap-6 my-20">
          <div className="flex items-center w-full justify-center gap-8 max-md:flex-col">
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Transparent
            </span>
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Expert
            </span>
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Habile
            </span>
          </div>

          <div className="flex items-center w-full justify-center gap-8 max-md:flex-col">
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Maîtrisée
            </span>
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Efficacité
            </span>
            <span className="flex items-center justify-center w-[30%] max-md:w-full py-4 text-xl roboto bg-gray-200 rounded-full">
              Respectueuse
            </span>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h5 className="mb-4 text-3xl roboto-bold leading-none font-sans">
              Notre objectif est de rendre possible{" "}
              <span className="inline-block text-marron">votre imaginaire</span>
            </h5>
            <p className="text-base roboto text-gray-700 md:text-lg mb-1">
              Ces principes autour desquels se réunissent Theorem permettent
              d'atteindre l'objectif défini étant donné la satisfaction des
              clients en matière de rénovation. L'expérience Theorem représente
              l'engagement envers un avenir meilleur, où l'innovation rencontre
              l'équité, et où rénovation et travaux riment avec sérénité et
              quiétude créant ainsi une expérience qui va au-delà des simples
              modifications d'espaces.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <img
              className="object-cover rounded-3xl w-full h-[350px]"
              src={identite_two}
              alt="Notre objectif"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Identite
