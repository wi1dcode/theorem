import React, { useState } from "react"
import LinkArrow from "../images/svg/LinkArrow"
import Contractant from "../images/contractant-pro.jpg"
import Electricite from "../images/electrecite-pro.jpg"
import Plomberie from "../images/plomberie-pro.jpg"

const servicesData = [
  {
    id: 1,
    title: "Contractant Général",
    description: "",
    fullDescription: (
      <>
        Theorem simplifie la gestion de vos projets grâce à une{" "}
        <strong>solution clé en main</strong> et un interlocuteur{" "}
        <strong>unique.</strong> En alliant{" "}
        <span className="tooltip underline ">
          <strong>design thinking</strong>
          <span className="tooltip-text">
            Le design thinking c’est co-concevoir une solution personnalisée en
            écoutant attentivement vos besoins.
          </span>
        </span>{" "}
        et expertisetechnique, nous créons des solutions adaptées à vos besoins.
        Nous prenons en charge toutes les phases, de la conception à la
        réalisation, en veillant au respect des délais et du budget.
      </>
    ),
    image: Contractant,
  },
  {
    id: 2,
    title: "Électricité - Certifié Qualifelec / IRVE",
    description: "",
    fullDescription: (
      <>
        Nous réalisons des chantiers de toutes tailles, avec des services en{" "}
        <strong>basse et haute tension</strong> (jusqu’à 20 kV). Nos
        interventions couvrent la sécurité incendie, le contrôle d’accès, la
        domotique, les réseaux VDI, les bornes de recharge, les panneaux
        solaires et la gestion technique du bâtiment. Nous opérons dans les
        bureaux, locaux commerciaux, résidentiels et industriels.
      </>
    ),
    image: Electricite,
  },
  {
    id: 3,
    title: "Plomberie / CVC / VMC",
    description: "",
    fullDescription: (
      <>
        Nous offrons des solutions en plomberie, climatisation et VMC, alliant{" "}
        <strong>performance</strong> et <strong>durabilité</strong>. Grâce à une
        méthode rigoureuse, nos installations sont <strong>fiables</strong> et
        respectent les <strong>normes</strong> les plus strictes, garantissant
        un confort optimal. Nous intervenons dans les bureaux, locaux
        commerciaux, résidentiels et industriels.
      </>
    ),
    image: Plomberie,
  },
]

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    )
  }

  const currentService = servicesData[currentIndex]

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div>
      <div className="relative py-12 flex justify-center items-center max-md:hidden">
        <button
          onClick={handlePrev}
          className="text-vert_principal p-2 absolute left-0 transform -translate-y-1/2 top-1/2"
        >
          <LinkArrow className="h-[50px] w-[50px]" right fill="#353d2b" />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-screen-xl mx-auto">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold">{currentService.title}</h2>
            <div className="mt-4 text-lg">{currentService.description}</div>
            <div className="mt-4 text-base whitespace-pre-wrap">
              {currentService.fullDescription}
            </div>
          </div>

          <div className="md:w-1/2 h-[400px]">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="text-vert_principal p-2 absolute right-0 transform -translate-y-1/2 top-1/2"
        >
          <LinkArrow
            className="h-[50px] w-[50px]"
            style={{ transform: "rotate(180deg)" }}
            fill="#353d2b"
          />
        </button>
      </div>

      <div className="flex justify-center mb-6 max-md:hidden">
        {servicesData.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-2 rounded-full ${
              currentIndex === index ? "bg-vert_principal" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-10 p-4">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <div className="text-left w-full">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <div className="mt-2 text-base whitespace-pre-wrap">
                {service.fullDescription}
              </div>
            </div>
            <div className="w-full h-auto mt-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesCarousel
