import React, { useState, useEffect, useRef } from "react"

const steps = [
  {
    number: 1,
    title: "Concevoir",
    description: [
      "Vous avez un projet en tête ? Dites-nous tout en remplissant notre formulaire personnalisé.",
      "Vous échangez avec votre chef de projet par téléphone ou lors d’une visite pour discuter de vos besoins et co concevoir votre projet. Ensemble, nous fusionnons vos inspirations avec notre expertise pour concevoir un projet à votre image. Nous vous conseillons et fournissons votre devis ainsi qu'une estimation du planning.",
    ],
  },
  {
    number: 2,
    title: "Créer",
    description: [
      "C’est le moment de rêver en couleurs et en formes ! Votre architecte d'intérieur Theorem vous guide pour optimiser et personnaliser votre espace.",
      "Et ensuite ? Laissez-nous faire et profitez de cette aventure incroyable où vos aspirations les plus grandes se réalisent. Nous supervisons toutes les opérations, assurons le contrôle et le suivi du chantier pour transformer votre intérieur en un espace qui vous ressemble parfaitement.",
    ],
  },
  {
    number: 3,
    title: "Célébrer",
    description: [
      "Clap de fin ! Il est l'heure de découvrir le résultat... Nous organisons un rendez-vous pour valider la conformité du projet. Mais ce n’est pas la fin de notre aventure ensemble. Rejoignez notre communauté sur nos réseaux sociaux, et restez informé en avant-première de nos événements exclusifs, des conseils déco, et bien plus encore !",
    ],
  },
  {
    number: 4,
    title: "Nos engagements​",
    description: [
      "Roulons Vert l'Avenir ! Nos équipes privilégient les trajets en trottinette électrique pour leurs déplacements..",
      "Un Espace de Travail Eco-Friendly. Nous croyons que c’est ensemble que nous pouvons faire la différence et c’est par nos bureaux que nous commençons en sensibilisant nos équipes, réduisant nos déchets et notre consommation d’énergie.",
      "Le Theorem Gagnant pour la Jeunesse. Asso : https://destins-lies.org/ (engagement pour la réussite des jeunes)",
    ],
  },
]

const CircleSteps = () => {
  const [activeStep, setActiveStep] = useState(1)
  const stepsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return
      const scrollPositionY = window.scrollY + window.innerHeight / 2

      let newActiveStep = activeStep

      steps.forEach((step) => {
        const stepElement = document.getElementById(`step-${step.number}`)
        if (!stepElement) return

        const rect = stepElement.getBoundingClientRect()
        const elementMiddle = rect.top + window.scrollY + rect.height / 2

        if (
          elementMiddle >= window.scrollY &&
          elementMiddle <= scrollPositionY
        ) {
          newActiveStep = step.number
        }
      })

      setActiveStep(newActiveStep)
    }

    const handleTextScroll = () => {
      if (window.innerWidth > 1050) return
      const lists = document.querySelector(".lists")
      const children = lists.querySelectorAll(".step")
      const scrollPositionX = lists.scrollLeft + lists.clientWidth / 2

      let newActiveStep = activeStep

      children.forEach((stepElement) => {
        const rect = stepElement.getBoundingClientRect()
        const elementMiddle = rect.left + lists.scrollLeft + rect.width / 2

        if (
          elementMiddle >= lists.scrollLeft &&
          elementMiddle <= scrollPositionX
        ) {
          newActiveStep = parseInt(stepElement.id.split("-")[1])
        }
      })

      setActiveStep(newActiveStep)
    }

    window.addEventListener("scroll", handleScroll)
    const lists = document.querySelector(".lists")
    lists.addEventListener("scroll", handleTextScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      lists.removeEventListener("scroll", handleTextScroll)
    }
  }, [activeStep])

  return (
    <div className="flex justify-center main-block md:py-10">
      <div className="flex relative items-start justify-center space-x-20 main-block">
        <div
          ref={stepsRef}
          className="mt-64 w-64 h-64 flex-shrink-0 flex justify-center items-center border-2 border-gray-300 rounded-full sticky top-1/2 transform -translate-y-1/2 circle-block"
          style={{ marginRight: "40px" }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className={`absolute w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                activeStep === step.number
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 text-transparent"
              }`}
              style={{
                transform: `rotate(${
                  ((step.number - 1) / steps.length) * 360
                }deg) translate(0, -125px) rotate(-${
                  ((step.number - 1) / steps.length) * 360
                }deg)`,
              }}
            >
              {step.number}
            </div>
          ))}
        </div>
        <div className="md:space-y-10 px-5 md:px-10 md:w-3/5 lists">
          {steps.map((step) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className={`step transition-opacity max-md:text-sm duration-500 ${
                activeStep === step.number ? "opacity-100" : "opacity-50"
              }`}
            >
              <h3 className="text-2xl max-md:text-sm font-bold mb-2">
                {step.number}. {step.title}
              </h3>
              <ul className="list-disc ml-5 max-md:text-sm space-y-1 md:border-b-2 md:pb-4">
                {step.description.map((desc, idx) => (
                  <li key={idx} className="text-lg max-md:text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CircleSteps
