import React, { useEffect } from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import LinkArrow from "../images/svg/LinkArrow"

import about_history from "../images/about_history.jpg"
import about_identite from "../images/about_identite.jpg"
import about_eco from "../images/about_eco.jpg"

import AOS from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  const sections = [
    {
      image: about_history,
      title: "Notre histoire",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/histoire",
    },
    {
      image: about_identite,
      title: "Notre identité",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/identite",
    },
    {
      image: about_eco,
      title: "Démarche écologique",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/eco",
    },
  ]

  return (
    <section>
      <Helmet>
        <title>Qui sommes nous ? | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez Theorem Services, votre partenaire expert en rénovation. Notre engagement envers la qualité et l'innovation fait de nous le choix idéal pour vos projets de rénovation."
        />
      </Helmet>
      <NavBar />
      <section
        className="flex flex-col justify-center items-center mt-14 mx-auto pb-4"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-8">Qui sommes nous ?</h2>
        <div className="flex flex-col lg:flex-row gap-6 px-4">
          <div className="flex flex-col gap-6 lg:w-2/3">
            {sections.slice(0, 2).map((section, idx) => (
              <Link to={section.link}>
                <article
                  key={idx}
                  className="rounded-3xl border-2 shadow-md overflow-hidden flex items-center max-md:flex-col"
                >
                  <img
                    src={section.image}
                    alt="about_photo"
                    className="object-cover w-[50%] max-md:w-full h-[250px] rounded-lg transition-transform transform hover:scale-105 duration-300"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow ">
                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                    {section.description && (
                      <p className="text-gray-700 mb-4">
                        {section.description}
                      </p>
                    )}
                    <div className="flex items-center">
                      <div className="inline-flex items-center">
                        <p>En savoir plus</p>
                        <LinkArrow className="ml-2" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="lg:w-1/3">
            <Link to={sections[2].link}>
              <article className="rounded-3xl border-2 shadow-md overflow-hidden flex flex-col h-full items-center">
                <img
                  src={sections[2].image}
                  alt="about_photo"
                  className="object-cover w-full h-[250px] rounded-lg transition-transform transform hover:scale-105 duration-300"
                />
                <div className="p-4 flex flex-col md:py-10 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">
                    {sections[2].title}
                  </h3>
                  {sections[2].description && (
                    <p className="text-gray-700 mb-4">
                      {sections[2].description}
                    </p>
                  )}
                  <div className="inline-flex items-center">
                    En savoir plus
                    <LinkArrow className="ml-2" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default About
