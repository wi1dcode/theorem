import React from "react"
import TestSvg from "../../images/svg/TestSvg"
import LittleCard from "../../components/LittleCard"
import savoirFaire from "../../services/savoirFaire.json"
import CircleSvg from "../../images/svg/CircleSvg"

function ProSavoir() {
  const getSvg = (icon) => {
    switch (icon) {
      case "TestSvg":
        return <TestSvg />

      default:
        return null
    }
  }

  return (
    <section>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0 h-[100vh]">
          <CircleSvg className="w-[70%]" />
        </div>
        <div className="flex flex-col items-center gap-y-3 md:w-1/2 mx-auto py-6 text-center justify-center">
          <h2 className="font-semibold text-3xl">Savoir faire</h2>
          <p>
            Depuis notre création, notre réputation repose sur la qualité de nos
            services, notre approche bienveillante et notre engagement
            indéfectible envers nos clients Nous comprenons que chaque projet
            professionnel nécessite une approche personnalisée; c’est pourquoi
            nous mettons un point d'honneur à vous offrir non seulement des
            solutions sur mesure, mais aussi un accompagnement réactif et des
            conseils avisés. Nos valeurs telles que la confiance et la précision
            sont au cœur de chacune de nos interventions. Nous sommes déterminés
            à faire de vos projets des réussites mémorables, en accordant une
            attention particulière à la réalisation méticuleuse de chaque
            collaboration.
          </p>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {savoirFaire.map((card) => (
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
  )
}

export default ProSavoir
