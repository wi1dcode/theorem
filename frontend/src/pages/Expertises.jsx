import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import expertise_bg from "../images/partenaire_bg.jpg";
import pilotage from "../images/expertise_pilotage.jpg";
import energetique from "../images/expertise_energetique.jpg";
import solaire from "../images/expertise_pansolaire.jpg";
import platrerie from "../images/expertise_platrerie.jpg";
import plomberie from "../images/expertise_plomberie.jpg";
import sols from "../images/expertise_sols.jpg";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import LinkArrow from "../images/svg/LinkArrow";

const expertises = [
  {
    id: "pilotage",
    title: "Projet de pilotage / agencement",
    description:
      "Theorem se distingue dans la gestion globale des projets, assurant une coordination efficace de toutes les phases, de la conception à la réalisation. Notre approche méticuleuse garantit une exécution fluide et réussie de chaque étape.",
    image: pilotage,
  },
  {
    id: "solaire",
    title: "Bornes de recharge / Panneaux solaires",
    description:
      "Engagés vers un avenir durable, nous proposons des solutions de bornes de recharge et de panneaux solaires reposant sur des matériaux de pointe. Théorème conjugue innovation et éco-responsabilité pour contribuer à la transition énergétique.",
    image: solaire,
  },
  {
    id: "plomberie",
    title: "Plomberie / Chauffagiste / VMC",
    description:
      "Theorem excelle dans la fourniture de solutions de plomberie, de chauffage et de VMC alliant performance et durabilité. Notre méthode rigoureuse assure des installations fiables et de qualité, en utilisant des matériaux performants pour une meilleure longévité. Nos installations respectent rigoureusement les normes les plus strictes pour garantir un confort optimal.",
    image: plomberie,
  },
  {
    id: "platrerie",
    title: "Revêtements muraux / Plâtrerie",
    description:
      "Theorem se distingue dans la gestion globale des projets, assurant une coordination efficace de toutes les phases, de la conception à la réalisation. Notre approche méticuleuse garantit une exécution fluide et réussie de chaque étape.",
    image: platrerie,
  },
  {
    id: "sols",
    title: "Revêtement de sols",
    description:
      "Engagés vers un avenir durable, nous proposons des solutions de bornes de recharge et de panneaux solaires reposant sur des matériaux de pointe. Théorème conjugue innovation et éco-responsabilité pour contribuer à la transition énergétique.",
    image: sols,
  },
  {
    id: "energetique",
    title: "Rénovation énergétique",
    description:
      "Theorem excelle dans la fourniture de solutions de plomberie, de chauffage и de VMC alliant performance et durabilité. Notre méthode rigoureuse assure des installations fiables et de qualité, en utilisant des matériaux performants pour une meilleure longévité. Nos installations respectent rigoureusement les normes les plus strictes pour garantir un confort optimal.",
    image: energetique,
  },
];

function Expertises() {
  const { pathname } = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = expertises.map((expertise) => ({
        id: expertise.id,
        offset: document.getElementById(expertise.id).offsetTop,
      }));

      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      const currentSection = sectionOffsets.find(
        (section, idx) =>
          scrollPosition >= section.offset &&
          (idx === sectionOffsets.length - 1 ||
            scrollPosition < sectionOffsets[idx + 1].offset)
      );

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }

      const navBar = document.getElementById("navBar");

      if (window.pageYOffset > navBar.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleSectionClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <section className="soleil">
        <div
          className="relative flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${expertise_bg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white p-6 max-w-xl">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Nos Expertises
            </h1>
          </div>
          <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
            <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
          </div>
        </div>
        <div className="md:w-[80%] max-md:flex-col w-full mx-auto md:pt-4 md:py-8 soleil flex">
          <div
            id="navBar"
            className={`w-[35%] max-md:w-full p-4 ${
              sticky ? "fixed top-20" : "sticky top-20"
            }`}
            style={sticky ? { width: "25%", backgroundColor: "white" } : {}}
          >
            <h3 className="font-bold text-lg mb-4">NOS MÉTIERS</h3>
            {expertises.map((section, index) => (
              <div
                key={index}
                className={`pb-2 mb-2 max-md:w-full border-b-2 cursor-pointer ${
                  activeSection === section.id ? "font-bold text-black" : ""
                }`}
                onClick={() => handleSectionClick(section.id)}
              >
                <span className="uppercase">{section.title}</span>
              </div>
            ))}
          </div>
          <div
            className="w-3/4 p-4 max-md:w-full"
            style={sticky ? { marginLeft: "32%" } : {}}
          >
            {expertises.map((expertise, index) => (
              <section key={index} id={expertise.id} className="my-8">
                <h2 className="text-3xl mb-4 soleil">{expertise.title}</h2>
                <p className="text-gray-700 american pb-4">
                  {expertise.description}
                </p>
                <img
                  src={expertise.image}
                  alt={expertise.title}
                  className="w-full h-[500px] object-cover mb-4"
                />
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Expertises;
