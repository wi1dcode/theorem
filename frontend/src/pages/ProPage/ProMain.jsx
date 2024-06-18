import React from "react"
import CountUp from "react-countup"

import HeaderBg from "../../images/pro-bg.jpg"
import WelcomeImage from "../../images/welcome_pro.jpg"
import ChantierImage from "../../images/pro_chantiers.jpg"
import ChiffresImage from "../../images/pro_chiffres.jpg"

import ProSavoir from "./ProSavoir.jsx"
import ProClients from "./ProClients.jsx"
import ProContact from "./ProContact.jsx"
import LinkArrow from "../../images/svg/LinkArrow.jsx"
import TheoremLogo from "../../images/svg/TheoremLogo.jsx"
import { Link } from "react-router-dom"

function Pro() {
  return (
    <div id="main">
      <div
        className="relative flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col gap-y-4 roboto items-center z-10 text-center text-white p-6 max-w-xl">
          <TheoremLogo className="w-24 h-24" />
          <h2 className="roboto-bold text-2xl text-white">Theorem</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Espace professionnel
          </h1>
        </div>
        <div className="absolute bottom-5 flex justify-center items-center w-[40px] h-[40px] mx-auto rounded-full slow-bounce">
          <LinkArrow className="h-[35px] w-[35px]" down fill="white" />
        </div>
      </div>
      <div className="mt-6 shadow-lg pb-2">
        <section className="flex flex-col justify-center items-center mt-10 mx-auto px-4 lg:px-8 shadow-lg mb-10">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-6 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl roboto-bold mb-4">
                Bienvenue dans l'Espace Professionnel de THEOREM.
              </h2>
              <p className="text-base text-gray-800 md:text-lg roboto leading-relaxed">
                Chez THEOREM, nous comprenons l'importance d'une collaboration
                efficace pour mener à bien vos projets professionnels. Dans cet
                espace dédié aux professionnels, nous mettons à votre
                disposition l'ensemble de nos compétences techniques et
                relationnelles ; que vous soyez engagés dans la conception, la
                réalisation ou la gestion de travaux, notre équipe expérimentée
                est prête à relever tous les défis pour concrétiser vos
                ambitions.
                <br />
                <br />
                Explorez l'Espace Professionnel de THEOREM pour découvrir
                comment nous pouvons être le partenaire stratégique dont vous
                avez besoin. Merci de choisir la qualité, la confiance et
                l'excellence pour mener à bien vos projets professionnels.
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
        <section className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 text-center">
          <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Prestations de service
          </h2>
          <div className="grid gap-8 row-gap-5 mb-10 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="shadow-lg rounded-xl bg-white">
              <div className="h-full p-5 shadow-sm rounded-xl">
                <h6 className="mb-2 font-semibold leading-5">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl bg-white">
              <div className="h-full p-5 shadow-sm rounded-xl">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl bg-white">
              <div className="h-full p-5 shadow-sm rounded-xl">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
            <div className="shadow-lg rounded-xl bg-white">
              <div className="h-full p-5 shadow-sm rounded-xl">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quaerat, at illo cumque culpa laudantium!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center px-4 max-md:mb-10">
            <Link
              to="/expertises"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-marron focus:shadow-outline focus:outline-none"
            >
              En voir plus
            </Link>
          </div>
        </section>
        <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-10 flex flex-col items-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Nos réalisations
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            <div className="flex gap-y-4 flex-col items-center bg-white rounded-t-xl shadow-md pb-6 w-full lg:w-1/3">
              <img
                src={ChantierImage}
                alt="Chantiers"
                className="object-cover w-full h-48 rounded-t-xl"
              />
              <div className="text-center mt-4">
                <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  <CountUp start={0} end={100} duration={5} separator="," />
                </h6>
                <p className="text-center md:text-base font-semibold mt-2">
                  chantiers par an
                </p>
                <p className="text-center mt-6 md:text-base text-gray-700">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
              <Link
                to="/realisations"
                className="inline-flex mt-2 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-marron focus:shadow-outline focus:outline-none"
              >
                Nos réalisations
              </Link>
            </div>
            <div className="flex gap-y-4 flex-col items-center bg-white rounded-t-xl shadow-md pb-6 w-full lg:w-1/3">
              <img
                src={ChiffresImage}
                alt="Chiffres"
                className="object-cover w-full h-48 rounded-t-xl"
              />
              <div className="text-center mt-4">
                <h6 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  <CountUp start={0} end={11} duration={5} suffix="M€" />
                </h6>
                <p className="text-center md:text-base font-semibold mt-2">
                  de chiffre d’affaires
                </p>
                <p className="text-center  mt-6 md:text-base text-gray-700">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
              <Link
                to="/realisations"
                className="inline-flex mt-2 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-marron focus:shadow-outline focus:outline-none"
              >
                Nos réalisations
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="mb-12" id="savoir">
        <ProSavoir />
      </div>
      <div className="my-20" id="clients">
        <ProClients />
      </div>
      <div className="mt-6" id="contact">
        <ProContact />
      </div>
    </div>
  )
}

export default Pro
