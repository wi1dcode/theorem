import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"

function History() {
  return (
    <div>
      <Helmet>
        <title>Histoire | Theorem Services</title>
        <meta
          name="description"
          content="Plongez dans l'histoire de Theorem Services. Découvrez notre parcours, nos valeurs et comment nous transformons chaque projet de rénovation en une réussite exceptionnelle."
        />
      </Helmet>

      <NavBar />
      <section
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-marron/20">
              <span className="text-3xl">📜</span>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Notre{" "}
                <span className="inline-block text-marron">histoire...</span>
              </h2>
              <p className="text-base avenir text-gray-700 md:text-lg mb-1">
                commence avec une amitié solide et des rêves partagés. En
                associant nos compétences complémentaires, nous avons donné
                naissance à notre entreprise. Unis par les mêmes ambitions et
                valeurs, nous avons tracé le chemin de la réalisation de projets
                complets en tant qu'entreprise tous corps d'état. Chaque jour,
                nous mettons notre expertise au service de vos idées,
                transformant ensemble les défis en réussites. Notre parcours
                reflète notre dévouement à l'excellence et notre passion pour
                créer des espaces uniques qui marquent une différence
                significative. Bienvenue dans l'aventure de THEOREM, où chaque
                projet est une histoire de collaboration, de passion et de
                réussite.
              </p>
              <p className="mt-3 avenir text-gray-700 md:text-lg"></p>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default History
