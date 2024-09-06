import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import { Link, useLocation } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

import partenaire_bg from "../images/partenaire_bg.jpg"
import entrepreneut_image from "../images/entrepreneur.jpg"
import architecte_image from "../images/architecte.jpg"
import maitredouvre_image from "../images/maitredouvre.jpg"
import LinkArrow from "../images/svg/LinkArrow"
import Footer from "../components/Footer"

function Pro() {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const cardData = [
    {
      img: entrepreneut_image,
      title: "Entrepreneur du bâtiment",
      link: "/candidate",
    },
    {
      img: architecte_image,
      title: "Architecte décorateur",
      link: "/candidate",
    },
    {
      img: maitredouvre_image,
      title: "Maître d'oeuvre",
      link: "/candidate",
    },
  ]

  return (
    <section className="bg-white soleil">
      <Helmet>
        <title>Partenariat avec Theorem</title>
        <meta
          name="description"
          content="Rejoignez le réseau de partenaires de Theorem Concept. Ensemble, nous pouvons réaliser des projets de rénovation exceptionnels et développer des relations professionnelles durables."
        />
      </Helmet>

      <NavBar />
      <div
        className="relative flex flex-col items-center justify-center h-[70vh] bg-cover bg-center soleil"
        style={{ backgroundImage: `url(${partenaire_bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-6 max-w-xl">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Devenez nos partenaires
          </h1>
        </div>
        <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
          <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
        </div>
      </div>

      <div className="px-4 py-10 md:px-24 lg:px-8">
        <div className="text-start mb-8">
          <h2 className="text-2xl font-semibold mb-10">
            Vous êtes entrepreneur du bâtiment, architecte décorateur ou maître
            d'œuvre ? Travaillons ensemble !
          </h2>
          <p className="text-lg text-gray-700 mb-10 courier-prime-regular">
            Pourquoi choisir Theorem : accédez à une diversité de projets et à
            une expertise de pointe pour propulser votre activité vers de
            nouveaux sommets, en concrétisant des concepts novateurs et en
            transformant chaque espace en une œuvre d'art vivante.
            <br />
            <br />
            Rejoignez-nous, vous êtes …
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[30%] flex flex-col items-center text-center rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-8">{card.title}</h3>
                <Link
                  to={card.link}
                  className="bg-vert_light rounded-lg p-2 px-10 pt-3 text-white hover:bg-vert_principal transition duration-300"
                >
                  Postuler
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Pro
