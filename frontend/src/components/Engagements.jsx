import React from "react"
import EngImageOne from "../images/roulons_vert.jpg"
import EngImageTwo from "../images/bureau_eco_friendly.jpg"
import EngImageThree from "../images/theorem_gagnant.jpg"

const engagements = [
  {
    image: EngImageOne,
    title: "Une empreinte + verte",
    description:
      "En 2024 en privilégiant les trajets en trottinettes et vélos électriques nous avons économisé CO². Soit x vol(s) Paris - Tlemcen.",
  },
  {
    image: EngImageTwo,
    title: "Un Espace de Travail Eco-Friendly",
    description:
      "C’est ensemble que nous faisons la différence et nous commençons par nos bureaux, en sensibilisant nos équipes, réduisant nos déchets, et modérant notre consommation d’énergie.",
  },
  {
    image: EngImageThree,
    title: "Le Theorem Gagnant",
    description: "Restez branchés !",
  },
]

export default function Engagements() {
  return (
    <section className="py-12 bg-white soleil">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl soleil text-center">Le Fil conducteur</h2>
        <p className="courier-prime-regular mt-2 mb-6 text-center">
          Ces actions sont au cœur de ce que nous faisons. <br /> Elles nous
          inspirent, nous motivent et donnent le ton à notre quotidien.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {engagements.map((engagement, idx) => (
            <div
              key={idx}
              className="max-w-sm max-md:h-auto h-[400px] flex flex-col items-center justify-start bg-white shadow-md rounded-md overflow-hidden"
            >
              <div className="w-[450px] h-48">
                <img
                  src={engagement.image}
                  alt={engagement.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl soleil-book mb-4 text-center">
                  {engagement.title}
                </h3>
                <p className="text-gray-700 text-center soleil overflow-hidden">
                  {engagement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
