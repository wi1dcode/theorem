import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import pilotage from "../images/expertise_pilotage.jpg"
import energetique from "../images/expertise_energetique.jpg"
import solaire from "../images/expertise_pansolaire.jpg"
import platrerie from "../images/expertise_platrerie.jpg"
import plomberie from "../images/expertise_plomberie.jpg"
import sols from "../images/expertise_sols.jpg"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

const MySwal = withReactContent(Swal)

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
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const showExpertiseInfo = (expertise) => {
    MySwal.fire({
      title: expertise.title,
      text: expertise.description,
      confirmButtonColor: "#575548",
    })
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
        <div className="text-center mx-auto my-4 roboto">
          <h2 className="text-4xl font-bold">Notre expertise</h2>
        </div>

        <div className="max-w-screen-xl mx-auto md:pt-4 md:py-8 roboto">
          <div className="flex flex-wrap justify-center gap-8">
            {expertises.map((expertise, index) => (
              <div
                key={index}
                className="flex cursor-pointer text-center flex-col items-center max-w-sm bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => showExpertiseInfo(expertise)}
              >
                <div className="w-full h-48">
                  <img
                    src={expertise.image}
                    alt={expertise.title}
                    className={`w-[400px] h-full object-cover ${expertise.className}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {expertise.title}
                  </h3>
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
