import React from "react"
import NavBar from "../components/NavBar"

import expertiseData from "../services/expertises.json"
import CircleSvg from "../images/svg/CircleSvg"
import LittleCard from "../components/LittleCard"
import TestSvg from "../images/svg/TestSvg"

function Expertises() {
  const getSvg = (icon) => {
    switch (icon) {
      case "ElectroSvg":
        return <TestSvg />

      default:
        return null
    }
  }

  return (
    <div>
      <NavBar />
      <section>
        <article className="w-1/2 avenir mx-auto text-center">
          <h2 className="text-center text-4xl mt-6 mb-4">Nos expertises</h2>
          <span className="inline-block h-1 w-20 rounded bg-marron mb-6"></span>
          <div className="text-xl">
            <p className="mb-5">
              Bienvenue dans la section dédiée à nos expertises au sein de
              Theorem, votre partenaire tous corps d'état en conception,
              réalisation et gestion de projets. Que vous envisagiez des projets
              de construction, de rénovation, ou d'aménagement, notre équipe
              dévouée est prête à piloter chaque étape du processus. Explorez
              nos domaines d'expertises pour découvrir le savoir-faire de
              l’équipe Theorem.
            </p>
          </div>
        </article>

        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-[90%] md:px-24 lg:px-8 lg:py-12">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:-inset-y-32 h-[80vh]">
            <CircleSvg className="w-[50%]" />
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {expertiseData.map((card) => (
              <LittleCard
                key={card.id}
                title={card.title}
                description={card.description}
              >
                {getSvg(card.svg)}
              </LittleCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Expertises
