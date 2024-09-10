import React from "react"
import HeaderBg from "../../images/pro-bg.jpg"
import WelcomeImage from "../../images/welcome_pro.jpg"
import ProClients from "./ProClients.jsx"
import LinkArrow from "../../images/svg/LinkArrow.jsx"
import TheoremLogo from "../../images/svg/TheoremLogo.jsx"
import Work from "../../components/Work.jsx"
import ServicesCarousel from "../../components/ServicesCarousel"

function Pro() {
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
                Chez Theorem, on sait que la clé de vos projets, c’est une
                collaboration solide. Dans cette plateforme dédiée aux
                professionnels, nous mettons à votre disposition l'ensemble de
                nos compétences techniques et relationnelles ; que vous soyez
                engagés dans la conception, la réalisation ou la gestion de
                travaux.
                <br />
                <br />
                Explorez votre espace dédié, pour découvrir comment nous pouvons
                être le partenaire stratégique dont vous avez besoin.
              </p>
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
    </div>
  )
}

export default Pro
