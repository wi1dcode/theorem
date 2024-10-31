import React, { useState } from "react";
import HeaderBg from "../../images/pro-bg.jpg";
import WelcomeImage from "../../images/welcome_pro.jpg";
import ProClients from "./ProClients.jsx";
import LinkArrow from "../../images/svg/LinkArrow.jsx";
import TheoremLogo from "../../images/svg/TheoremLogo.jsx";
import Work from "../../components/Work.jsx";
import ServicesCarousel from "../../components/ServicesCarousel";
import { PopupModal } from "react-calendly";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

function Pro() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendlyPopup = () => {
    setIsCalendlyOpen(true);

    ReactGA.event({
      category: "Calendly",
      action: "Open Calendly Popup",
      label: "Être appelé",
    });
  };

  const closeCalendlyPopup = () => {
    setIsCalendlyOpen(false);
  };

  const handlePlaquetteDownload = () => {
    ReactGA.event({
      category: "Download",
      action: "Download Plaquette Pro",
      label: "Plaquette Pro",
    });
  };

  return (
    <div id="main">
      <div
        className="relative flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col gap-y-4 soleil items-center z-10 text-center text-white p-6 max-w-xl">
          <TheoremLogo className="w-24 h-24" />
          <h2 className="soleil-book text-2xl text-white">Theorem</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Espace professionnel
          </h1>
        </div>
        <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
          <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
        </div>
      </div>
      <div className="mt-6 shadow-md pb-2">
        <section className="flex flex-col justify-center items-center mt-10 mx-auto px-4 lg:px-8 shadow-md mb-10">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl soleil-book mb-4">
                Bienvenue dans l’Espace Pro
              </h2>
              <p className="text-base text-gray-800 md:text-lg soleil leading-relaxed">
                Chez Theorem, nous comprenons que chaque projet nécessite une
                attention particulière à chaque étape, de la conception à la
                réalisation. Nous vous offrons des solutions adaptées à vos
                besoins, afin que vous puissiez vous concentrer pleinement sur
                ce que vous faites de mieux.
                <br />
                <br />
                Explorez votre espace dédié, pour découvrir comment nous pouvons
                être le partenaire stratégique dont vous avez besoin.
              </p>
              <div className="flex gap-x-4 mt-10">
                <button
                  className="bg-vert_light rounded-lg p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300"
                  onClick={openCalendlyPopup}
                >
                  Être appelé
                </button>
                <Link
                  to="/plaquetteprocg.pdf"
                  target="_blank"
                  className="bg-vert_light rounded-lg p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300"
                  onClick={handlePlaquetteDownload}
                >
                  Plaquette Pro
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-[30%]">
              <img
                src={WelcomeImage}
                alt="About"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full mb-10">
          <Work />
        </section>
        <section className="w-full mb-16 shadow-md pb-2">
          <h2 className="text-center max-md:text-2xl text-4xl pt-4 soleil z-10">
            Nos services
          </h2>
          <ServicesCarousel />
        </section>
        <div className="my-16 mb-0" id="clients">
          <ProClients />
        </div>
      </div>
      <div className="w-full h-full soleil">
        <PopupModal
          url="https://calendly.com/theorem-concept/appel-decouverte"
          onModalClose={closeCalendlyPopup}
          open={isCalendlyOpen}
          rootElement={document.getElementById("root")}
          text="Être rappelé dès que possible"
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
    </div>
  );
}

export default Pro;
