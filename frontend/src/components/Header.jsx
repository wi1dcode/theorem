import React from "react"
import TheoremLogo from "../images/svg/TheoremLogo"
import HeaderBg from "../images/bg-main.jpg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className={`bg-cover pt-10 bg-no-repeat w-full h-[80vh] flex flex-col gap-y-4 rounded-b-xl justify-center items-center`}
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <article className="flex w-full h-full flex-col justify-center items-start">
        <div className="flex flex-col items-start gap-y-8 w-[35%] max-lg:w-[70%] ml-20 max-md:ml-10">
          <TheoremLogo />
          <h2 className="roboto-bold text-3xl text-white">Theorem Services</h2>
          <h1 className="text-start text-white rounded-lg max-md:text-sm text-lg w-full roboto">
            Votre rénovation en toute tranquillité! une expérience rapide,
            simplifiée et sécurisée. Profitez d'un accompagnement personnalisé
            pour donner vie à vos projets
          </h1>
          <Link to="/estimation">
            <button
              className="bg-beige/50 shadow text-white font-semibold max-md:text-sm rounded-lg p-2 px-8 mt-1.5 roboto"
              type="button"
            >
              Commencer mon projet
            </button>
          </Link>
        </div>
      </article>
    </header>
  )
}

export default Header
