import React from "react"
import HeaderBg from "../../images/pro-bg.jpg"
import WelcomeImage from "../../images/welcome_pro.jpg"
import ProCentralAchatImage from "../../images/pro_centrale_achat.jpg"
import ProClients from "./ProClients.jsx"
import LinkArrow from "../../images/svg/LinkArrow.jsx"
import TheoremLogo from "../../images/svg/TheoremLogo.jsx"
import Work from "../../components/Work.jsx"
import { useNavigate } from "react-router-dom"

function Pro() {
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
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-6 mb-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl soleil-book mb-4">
                Bienvenue dans l'Espace Professionnel de THEOREM.
              </h2>
              <p className="text-base text-gray-800 md:text-lg soleil leading-relaxed">
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
        <section className="w-full mb-16">
          <Work />
        </section>
        <section className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-10 flex flex-col items-center">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 soleil-book text-3xl tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Notre{" "}
                  <span className="inline-block text-vert_principal">
                    histoire
                  </span>
                </h2>
                <p className="text-base soleil text-gray-700 md:text-lg mb-1">
                  Elle commence avec une amitié solide et des rêves partagés. En
                  associant nos compétences complémentaires, nous avons donné
                  naissance à notre entreprise.
                </p>
                <p className="text-base soleil text-gray-700 md:text-lg mb-1 pt-6">
                  Unis par les mêmes ambitions et valeurs, nous avons tracé le
                  chemin de la réalisation de projets complets en tant
                  qu'entreprise tous corps d'État. Chaque jour, nous mettons
                  notre expertise au service de vos idées, transformant ensemble
                  les défis en réussites.
                </p>
                <button
                  className="bg-vert_light rounded-lg mt-4 p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300"
                  onClick={scrollToContact}
                >
                  Des questions ?
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:pl-8">
              <img
                className="object-cover rounded-lg w-full lg:h-auto lg:w-auto"
                src={ProCentralAchatImage}
                alt="Notre histoire"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="my-16 mb-0" id="clients">
        <ProClients />
      </div>
    </div>
  )
}

export default Pro
