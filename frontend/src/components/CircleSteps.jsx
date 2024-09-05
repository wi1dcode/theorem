import React, { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const steps = [
  {
    number: 1,
    title: "Concevoir",
    description: [
      "Tout commence par une idée. Puis, nous prenons le relais pour la transformer en un projet solide. Nous analysons vos besoins et vos envies pour créer une solution sur mesure, parfaitement adaptée à vos attentes.",
    ],
  },
  {
    number: 2,
    title: "Créer",
    description: [
      "Notre savoir-faire est notre force. Grâce à une équipe talentueuse, une expérience prouvée et une renommée bien établie, nous menons à bien vos projets. Nos artisans de la création s'engagent à perfectionner chaque détail pour garantir une exécution impeccable, fidèle à votre vision.",
    ],
  },
  {
    number: 3,
    title: "Célébrer",
    description: [
      "Clap de fin ! Le moment est venu de découvrir le résultat. Nous célébrons vos projets, où chaque aspect – qualité, délais et budget – a été parfaitement maîtrisé.",
      "Poursuivez l'aventure avec nous en rejoignant notre communauté sur les réseaux sociaux.",
    ],
  },
]

const CircleSteps = () => {
  const navigate = useNavigate()
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

  // const generateSmallCircles = () => {
  //   const smallCircles = []
  //   for (let i = 0; i < steps.length * 2; i++) {
  //     const angle = (i * 360) / (steps.length * 2)
  //     smallCircles.push(
  //       <div
  //         key={`small-circle-${i}`}
  //         className="absolute w-4 h-4 bg-vert rounded-full"
  //         style={{
  //           transform: `rotate(${angle}deg) translate(0, -126px) rotate(-${angle}deg)`,
  //         }}
  //       />
  //     )
  //   }
  //   return smallCircles
  // }

  const scrollToContact = () => {
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById("contact")
      const yOffset = -150
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="flex flex-col justify-center main-block md:py-10">
      <div className="relative flex justify-center items-center">
        <div className="pb-10">
          <h2 className="text-center max-md:text-2xl text-4xl soleil z-10">
            Notre Theorem
          </h2>
        </div>
      </div>
      <div className="flex relative items-start justify-center space-x-20 main-block">
        <div
          ref={stepsRef}
          className="mt-64 max-md:mt-48 md:mr-[48px] w-64 h-64 flex-shrink-0 flex justify-center items-center border-2 border-vert_principal/50 rounded-full sticky top-1/2 transform -translate-y-1/2 circle-block"
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className={`absolute w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                activeStep === step.number
                  ? "bg-vert_principal text-white font-bold border-vert_principal"
                  : "bg-white border-vert_principal/50 text-transparent"
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
          <span className="soleil uppercase">Notre Process</span>
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
              <h3 className="text-2xl max-md:text-sm soleil-bold mb-2">
                {step.number}. {step.title}
              </h3>
              <ul className="list-disc soleil ml-5 max-md:text-sm space-y-1 md:border-b-2 md:pb-4">
                {step.description.map((desc, idx) => (
                  <p key={idx} className="text-lg max-md:text-sm">
                    {desc}
                  </p>
                ))}
                {step.number === 1 && (
                  <Link to="/estimation">
                    <button
                      className="bg-vert_light shadow text-white text-sm max-md:text-sm rounded-lg p-1 pt-2 mt-3 px-4 soleil hover:bg-vert_principal transition duration-300"
                      type="button"
                    >
                      Dites-nous tout
                    </button>
                  </Link>
                )}
                {step.number === 3 && (
                  <span>
                    <button
                      className="bg-vert_light shadow text-white text-sm max-md:text-sm rounded-lg p-1 pt-2 mt-3 px-4 soleil hover:bg-vert_principal transition duration-300"
                      type="button"
                      onClick={scrollToContact}
                    >
                      Nous suivre
                    </button>
                  </span>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CircleSteps
