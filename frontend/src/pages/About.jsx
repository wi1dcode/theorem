import React, { useEffect } from "react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import Stats from "../components/Stats"
import { Helmet } from "react-helmet"
import photo_one from "../images/photo-1.jpeg"
import photo_two from "../images/photo-2.jpeg"
import photo_three from "../images/photo-3.jpeg"

import AOS from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section>
      <Helmet>
        <title>A propos | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez Theorem Services, votre partenaire expert en rénovation. Notre engagement envers la qualité et l'innovation fait de nous le choix idéal pour vos projets de rénovation."
        />
      </Helmet>
      <NavBar />
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-marron/20">
              <span className="text-3xl">💼</span>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Chez Theorem,
                <br className="hidden md:block" />
                nous transformons chaque projet en un carré{" "}
                <span className="inline-block text-marron">parfait</span>
              </h2>
              <p className="text-base avenir text-gray-700 md:text-lg mb-1">
                Theorem est bien plus qu'une simple entreprise; c'est une entité
                qui incarne l’essence d’une marque engagée et responsable. La
                mission est de transcender les attentes en offrant des solutions
                de rénovation novatrices et pérennes. Guidés par des valeurs de
                confiance et d'engagement envers l’avenir, Theorem rassemble une
                équipe dynamique, curieuse, à l'écoute et réactive.
              </p>
              <p className="mt-3 avenir text-gray-700 md:text-lg"></p>
              <div className="pt-6 text-gray-700 avenir grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Transparente
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Habile
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Efficace
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Respectueuse
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Experte
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-marron"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                      </svg>
                    </span>
                    Maîtrisée
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={photo_one}
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={photo_two}
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={photo_three}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <img
                className="object-cover w-full h-56 rounded-xl shadow-lg sm:h-96"
                src="https://i.imgur.com/g3Y6mry.png"
                alt=""
              />
            </div>
            <div className="lg:pr-10">
              <h5 className="mb-4 text-4xl font-bold leading-none font-sans">
                Notre but est de rendre
                <br className="hidden md:block" />{" "}
                <span className="inline-block text-marron">réel</span> votre
                imaginaire 🌌
              </h5>
              <p className="mb-6 text-gray-700 avenir md:text-lg">
                Ces principes autour desquels se réunissent Theorem permettent
                d’atteindre l’objectif défini étant la satisfaction des clients
                en matière de rénovation. L’expérience Theorem représente
                l'engagement envers un avenir meilleur, où l'innovation
                rencontre l’équité, et où rénovation et travaux riment avec
                sérénité et quiétude créant ainsi une expérience qui va au-delà
                des simples modifications d’espaces.
              </p>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-marron"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </Link>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-marron"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-2 mb-2">
          <Stats />
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About
