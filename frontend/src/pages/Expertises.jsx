import React from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"

import pilotage from "../images/expertise_pilotage.jpg"
import energetique from "../images/expertise_energetique.jpg"
import solaire from "../images/expertise_pansolaire.jpg"
import platrerie from "../images/expertise_platrerie.jpg"
import plomberie from "../images/expertise_plomberie.jpg"
import sols from "../images/expertise_sols.jpg"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

const expertises = [
  {
    title: "Projet de pilotage / agencement",
    description:
      "THEOREM se distingue dans la gestion globale des projets, assurant une coordination efficace de toutes les phases, de la conception à la réalisation. Notre approche méticuleuse garantit une exécution fluide et réussie de chaque étape.",
    image: pilotage,
    className: "lg:rounded-tl-3xl",
  },
  {
    title: "Bornes de recharge / Panneaux solaires",
    description:
      "Engagés vers un avenir durable, nous proposons des solutions de bornes de recharge et de panneaux solaires reposant sur des matériaux de pointe. Théorème conjugue innovation et éco-responsabilité pour contribuer à la transition énergétique.",
    image: solaire,
    className: "",
  },
  {
    title: "Plomberie / Chauffagiste / VMC",
    description:
      "Théorème excelle dans la fourniture de solutions de plomberie, de chauffage et de VMC alliant performance et durabilité. Notre méthode rigoureuse assure des installations fiables et de qualité, en utilisant des matériaux performants pour une meilleure longévité. Nos installations respectent rigoureusement les normes les plus strictes pour garantir un confort optimal.",
    image: plomberie,
    className: "lg:rounded-tr-3xl",
  },
  {
    title: "Revêtements muraux / Plâtrerie",
    description:
      "THEOREM se distingue dans la gestion globale des projets, assurant une coordination efficace de toutes les phases, de la conception à la réalisation. Notre approche méticuleuse garantit une exécution fluide et réussie de chaque étape.",
    image: platrerie,
    className: "lg:rounded-bl-3xl",
  },
  {
    title: "Revêtement de sols",
    description:
      "Engagés vers un avenir durable, nous proposons des solutions de bornes de recharge et de panneaux solaires reposant sur des matériaux de pointe. Théorème conjugue innovation et éco-responsabilité pour contribuer à la transition énergétique.",
    image: sols,
    className: "",
  },
  {
    title: "Rénovation énergétique",
    description:
      "Théorème excelle dans la fourniture de solutions de plomberie, de chauffage et de VMC alliant performance et durabilité. Notre méthode rigoureuse assure des installations fiables et de qualité, en utilisant des matériaux performants pour une meilleure longévité. Nos installations respectent rigoureusement les normes les plus strictes pour garantir un confort optimal.",
    image: energetique,
    className: "lg:rounded-br-3xl",
  },
]

function Expertises() {
  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById("contact")
      const yOffset = -230
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }, 100)
  }

  return (
    <div>
      <Helmet>
        <title>Nos Expertises | Theorem Services</title>
        <meta
          name="description"
          content="Explorez nos domaines d'expertises chez Theorem Services. Notre équipe apporte des solutions complètes et personnalisées pour tous vos projets de construction et de rénovation."
        />
      </Helmet>
      <NavBar />
      <section>
        <div className="text-center mx-auto my-12 roboto">
          <h2 className="text-4xl font-bold">Notre expertise</h2>
          <p className="mt-4 text-lg text-gray-600">
            Retrouvez nos différents projets
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-8 roboto">
          <div className="flex flex-wrap justify-center gap-8">
            {expertises.map((expertise, index) => (
              <div
                key={index}
                className="flex cursor-pointer text-center flex-col items-center max-w-sm bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={expertise.image}
                  alt={expertise.title}
                  className={`w-full h-48 object-cover max-lg:rounded-t-xl ${expertise.className}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-700">{expertise.description}</p>
                  {expertise.title ===
                    "Bornes de recharge / Panneaux solaires" && (
                    <button
                      className="mt-4 py-2 px-4 bg-marron text-white rounded hover:bg-marron/80 transition duration-300 active:bg-marron/90"
                      onClick={scrollToContact}
                    >
                      Des questions ?
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Expertises
