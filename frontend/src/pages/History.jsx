import React from "react"
import { Helmet } from "react-helmet"

import history_one from "../images/about_history.jpg"
import history_two from "../images/history_two.png"

function History() {
  return (
    <div>
      <Helmet>
        <title>Histoire | Theorem Concept</title>
        <meta
          name="description"
          content="Plongez dans l'histoire de Theorem Concept. Découvrez notre parcours, nos valeurs et comment nous transformons chaque projet de rénovation en une réussite exceptionnelle."
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
              <h2 className="max-w-lg mb-6 soleil-book text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Notre{" "}
                <span className="inline-block text-vert_principal">
                  histoire
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg mb-1 courier-prime-regular">
                Avez-vous déjà eu envie de faire les choses différemment ? Nous,
                oui. En travaillant pour les grands groupes du bâtiment, il nous
                manquait quelque chose, et ce{" "}
                <span className="courier-prime-bold">déclic</span> est devenu
                notre point de départ pour créer un{" "}
                <span className="courier-prime-bold">meilleur écosystème.</span>{" "}
                C’est ainsi qu’est née Theorem.
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-1 pt-6 courier-prime-regular">
                Nous ne sommes pas simplement une entreprise de travaux, mais
                une véritable{" "}
                <span className="courier-prime-bold">aventure humaine.</span>{" "}
                Chaque projet est animé par notre{" "}
                <span className="courier-prime-bold">passion,</span> notre{" "}
                <span className="courier-prime-bold">confiance</span> réciproque
                et notre engagement envers des pratiques{" "}
                <span className="courier-prime-bold">éthiques</span> et{" "}
                <span className="courier-prime-bold">écologiques.</span>
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
            <p className="text-base courier-prime-regular text-gray-700 md:text-lg mb-7">
              Notre équipe est une véritable{" "}
              <span className="courier-prime-bold">mosaïque de talents</span>,
              chacun apportant son expertise pour offrir un{" "}
              <span className="courier-prime-bold">service complet</span> sous
              un même toit. Notre histoire est en constante évolution, et chaque
              succès nous confirme que nous avons pris le bon tournant.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History
