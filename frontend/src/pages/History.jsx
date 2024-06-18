import React from "react"
import { Helmet } from "react-helmet"

import history_one from "../images/about_history.jpg"
import history_two from "../images/history_two.png"

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

      <section
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 roboto-bold font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Notre <span className="inline-block text-marron">histoire</span>
              </h2>
              <p className="text-base roboto text-gray-700 md:text-lg mb-1">
                Elle commence avec une amitié solide et des rêves partagés. En
                associant nos compétences complémentaires, nous avons donné
                naissance à notre entreprise.
              </p>
              <p className="text-base roboto text-gray-700 md:text-lg mb-1 pt-6">
                Unis par les mêmes ambitions et valeurs, nous avons tracé le
                chemin de la réalisation de projets complets en tant
                qu'entreprise tous corps d'État. Chaque jour, nous mettons notre
                expertise au service de vos idées, transformant ensemble les
                défis en réussites.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:pl-8">
            <img
              className="object-cover rounded-3xl w-full lg:h-auto lg:w-auto"
              src={history_one}
              alt="Notre histoire"
            />
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 mt-10">
          <div className="flex items-center justify-center lg:pr-8">
            <img
              className="object-cover rounded-r-3xl rounded-b-3xl w-full h-64 lg:h-auto lg:w-auto"
              src={history_two}
              alt="Notre histoire"
            />
          </div>
          <div className="flex flex-col justify-end items-end">
            <p className="text-base roboto text-gray-700 md:text-lg mb-1">
              Notre parcours reflète notre concentration à l'excellence et notre
              passion pour créer des espaces uniques qui marquent une différence
              significative.
              <br />
              <br />
              Bienvenue dans l'aventure de THEOREM, où chaque projet est une
              histoire de collaboration, de passion et de réussite.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History
