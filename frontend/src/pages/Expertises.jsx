import React, { useEffect, useRef, useState } from "react"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import expertise_bg from "../images/partenaire_bg.jpg"
import archiImage from "../images/savoir_faire_archi.jpg"
import techImage from "../images/savoir_faire_tech.jpg"
import ecoImage from "../images/savoir_faire_eco.jpg"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import LinkArrow from "../images/svg/LinkArrow"

const expertises = [
  {
    id: "architecturale",
    title: "Conception",
    description:
      "Le cœur du projet réside dans une <strong>écoute attentive</strong> de vos besoins. Nous commençons par un échange approfondi pour élaborer un cahier des charges détaillé, couvrant tous les aspects techniques et architecturaux. Nous réalisons des <strong>études approfondies</strong>, concevons des plans détaillés et des visuels 3D pour une <strong>vision claire</strong> de votre projet. De l’étude initiale à la gestion de projet, nous assurons un processus fluide et transparent, pour vous offrir des solutions qui répondent parfaitement à vos attentes.",
    list: [],
    image: archiImage,
  },
  {
    id: "technique",
    title: "Réalisations Techniques",
    description:
      "Que vous souhaitiez rafraîchir des espaces ou entreprendre une <strong>rénovation</strong> complète, nous sommes là pour vous accompagner <strong>à chaque étape</strong>. Nous proposons une gamme complète de <strong>services</strong> pour donner vie à votre projet : électricité, plomberie, plâtrerie, parquet, carrelage, peinture, installation de bornes IRVE, et bien plus encore. Tout est réuni au même endroit pour <strong>simplifier</strong> votre expérience et vous rapprocher plus rapidement de votre vision.",
    list: [],
    image: techImage,
  },
  {
    id: "energetique",
    title: "Rénovation Énergétique",
    description: "Restez branchés !",
    list: [],
    image: ecoImage,
  },
]

function Expertises() {
  const { pathname } = useLocation()
  const [activeSection, setActiveSection] = useState("")
  const [sticky, setSticky] = useState(false)
  const navBarRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const navBarHeight = 80

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = expertises.map((expertise) => ({
        id: expertise.id,
        offset: document.getElementById(expertise.id).offsetTop,
      }))

      const scrollPosition = window.pageYOffset + window.innerHeight / 2

      const currentSection = sectionOffsets.find(
        (section, idx) =>
          scrollPosition >= section.offset &&
          (idx === sectionOffsets.length - 1 ||
            scrollPosition < sectionOffsets[idx + 1].offset)
      )

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id)
      }

      const header = headerRef.current

      if (window.pageYOffset > header.offsetTop + header.offsetHeight) {
        setSticky(true)
        if (window.innerWidth <= 768) {
          contentRef.current.style.marginTop = `${navBarHeight}px`
        }
      } else {
        setSticky(false)
        if (window.innerWidth <= 768) {
          contentRef.current.style.marginTop = "0px"
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleSectionClick = (id) => {
    const element = document.getElementById(id)
    const offsetTop = element.offsetTop - navBarHeight
    window.scrollTo({ top: offsetTop, behavior: "smooth" })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Helmet>
        <title>Notre Savoir-Faire | Theorem Concept</title>
        <meta
          name="description"
          content="Découvrez notre savoir-faire chez Theorem Concept. De la conception architecturale à la réalisation technique, nous vous accompagnons à chaque étape de votre projet."
        />
      </Helmet>
      <NavBar />
      <section className="soleil">
        <div
          ref={headerRef}
          className="relative flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${expertise_bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white p-6 max-w-xl md:w-full">
            <h1 className="text-4xl md:w-[600px] md:text-4xl font-bold mb-4">
              Conception & Réalisation de travaux
            </h1>
          </div>
          <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
            <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
          </div>
        </div>
        <div
          ref={contentRef}
          className="md:w-[80%] max-md:flex-col w-full mx-auto md:pt-4 md:py-8 soleil flex"
        >
          <div
            ref={navBarRef}
            id="navBar"
            className={`w-[35%] max-md:hidden max-md:w-full p-4 ${
              sticky
                ? "fixed top-16 max-md:hidden max-md:top-0 max-md:bg-white max-md:z-50"
                : "relative"
            }`}
            style={sticky ? { width: "25%", backgroundColor: "white" } : {}}
          >
            <h3 className="font-bold max-md:w-full text-lg mb-4 max-md:hidden">
              NOS MÉTIERS
            </h3>
            {expertises.map((section, index) => (
              <div
                key={index}
                className={`pb-2 mb-2 max-md:w-full max-md:p-2 border-b-2 cursor-pointer ${
                  activeSection === section.id ? "font-bold text-black" : ""
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                <span className="uppercase">{section.title}</span>
              </div>
            ))}
          </div>
          <div
            className={`w-3/4 p-4 max-md:w-full max-md:ml-0 ${
              sticky && "md:ml-[32%]"
            }`}
          >
            {expertises.map((expertise, index) => (
              <section key={index} id={expertise.id} className="my-2">
                <h2 className="text-3xl mb-4 soleil">{expertise.title}</h2>
                <p
                  className="text-gray-700 md:w-2/3 soleil pb-6"
                  dangerouslySetInnerHTML={{ __html: expertise.description }}
                />
                {expertise.list.length > 0 && (
                  <ul className="list-disc list-inside mb-6">
                    {expertise.list.map((item, idx) => (
                      <li key={idx} className="text-gray-700 pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <img
                  src={expertise.image}
                  alt={expertise.title}
                  className="md:w-2/3 w-full h-auto max-h-[600px] object-cover mb-14 rounded"
                />
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Expertises
