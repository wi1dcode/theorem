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
    fullDescription:
      "Theorem simplifie la gestion de vos projets grâce à une <strong>solution clé en main</strong> et un interlocuteur unique. En alliant <strong>design thinking</strong> et <strong>expertise</strong> technique, nous créons des solutions adaptées à vos besoins. Nous prenons en charge toutes les phases, de la conception à la réalisation, en veillant au respect des délais et du budget.",
    image: Contractant,
  },
  {
    id: 2,
    title: "Électricité - Certifié Qualifelec / IRVE",
    description: "",
    fullDescription:
      "NOS SERVICES\n• Intervention / Petits et grands chantiers.\n• Prestations : Basse et haute tension jusqu’à 20 kV.\n• SSI, contrôle d’accès, domotique, VDI, bornes de recharge, panneaux solaires, GTB.\n• Secteurs : bureaux, locaux commerciaux, résidentiel et industriel.",
    image: Electricite,
  },
  {
    id: 3,
    title: "Plomberie / CVC / VMC",
    description: "",
    fullDescription:
      "NOS SERVICES\n• Des solutions de plomberie, climatisation et VMC alliant performance et durabilité.\n• Une méthode rigoureuse assure des installations fiables, conformes aux normes les plus strictes pour un confort optimal.\n• Secteurs : bureaux, locaux commerciaux, résidentiel et industriel.",
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

  return (
    <div>
      <div className="relative py-12 flex justify-center items-center max-md:hidden">
        <button
          onClick={handlePrev}
          className="text-gray-500 p-2 absolute left-0 transform -translate-y-1/2 top-1/2"
        >
          <LinkArrow className="h-[50px] w-[50px]" right fill="gray" />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-screen-xl mx-auto">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold">{currentService.title}</h2>
            <div
              className="mt-4 text-lg"
              style={{ height: currentIndex.id === 1 ? "72px" : "auto" }}
              dangerouslySetInnerHTML={{ __html: currentService.description }}
            />
            <div
              className="mt-4 text-base whitespace-pre-wrap"
              style={{
                height: currentIndex.id === 1 ? "180px" : "auto",
                overflow: "hidden",
                marginTop: currentIndex.id !== 2 && "10px",
                whiteSpace: "pre-line",
                lineHeight: "1.6",
              }}
              dangerouslySetInnerHTML={{
                __html: currentService.fullDescription,
              }}
            />
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
          className="text-gray-500 p-2 absolute right-0 transform -translate-y-1/2 top-1/2"
        >
          <LinkArrow
            className="h-[50px] w-[50px]"
            style={{ transform: "rotate(180deg)" }}
            fill="gray"
          />
        </button>
      </div>

      <div className="md:hidden flex flex-col gap-10 p-4">
        {servicesData.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <div className="text-left w-full">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <div
                className="mt-2 text-base whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: service.fullDescription }}
              />
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
