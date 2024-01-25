import React from "react"
import LogoBlack from "../images/icons/logo_black.png"
import HeaderBg from "../images/header_bg.jpg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className={`bg-cover bg-no-repeat w-full h-[400px] max-md:h-[350px] flex flex-col gap-y-4 rounded-xl justify-center items-center`}
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <article className="flex backdrop-blur rounded-lg w-full h-full flex-col items-center justify-center gap-y-4 max-md:gap-y-2">
        <img
          src={LogoBlack}
          alt="header_logo"
          className="w-[250px] animate-fade-down animate-once"
        />
        {/* <h1 className="text-5xl vogue text-center">Theorem Services</h1> */}
        <h1 className="text-center bg-white bg-opacity-40 rounded-lg p-2 shadow text-lg max-md:w-full max-xl:w-[50%] w-1/4 text-noir avenir">
          Votre rénovation en toute tranquillité! une expérience rapide,
          simplifiée et sécurisée. Profitez d'un accompagnement personnalisé
          pour donner vie à vos projets
        </h1>
        <Link to="/estimation">
          <button
            className="bg-marron shadow-md text-noir font-semibold rounded-lg p-2 px-4 mt-1.5 uppercase avenir"
            type="button"
          >
            Estimation gratuite
          </button>
        </Link>
      </article>
    </header>
  )
}

export default Header
