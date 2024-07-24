import React from "react"
import EngImageOne from "../images/roulons_vert.jpg"
import EngImageTwo from "../images/bureau_eco_friendly.jpg"
import EngImageThree from "../images/theorem_gagnant.jpg"

const engagements = [
  {
    image: EngImageOne,
    title: "Roulons Vert l'Avenir !",
    description:
      "Nos équipes privilégient les trajets en trottinette électrique pour",
  },
  {
    image: EngImageTwo,
    title: "Un Espace de Travail Eco-Friendly",
    description:
      "Nous croyons que c’est ensemble que nous pouvons faire la différence et c’est par nos bureaux que nous commençons en sensibilisant nos équipes, réduisant nos déchets et notre consommation d’énergie.",
  },
  {
    image: EngImageThree,
    title: "Le Theorem Gagnant",
    description:
      "Coming soon...",
  },
]

export default function Engagements() {
  return (
    <section className="py-12 bg-white soleil">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl soleil text-center mb-8">Nos engagements</h2>
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
                <p className="text-gray-700 text-center american">
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
