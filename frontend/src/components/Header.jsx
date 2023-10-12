import React from "react"
import LogoBlack from "../images/icons/logo_black.png"
import HeaderBg from "../images/header_bg.jpg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className={`bg-cover bg-no-repeat w-full h-[350px] max-md:h-[330px] flex flex-col gap-y-4 rounded-xl justify-center items-center`}
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <article className="flex backdrop-blur rounded-lg w-full h-full flex-col items-center justify-center gap-y-4 max-md:gap-y-2">
        <img
          src={LogoBlack}
          alt="header_logo"
          className="w-[250px] animate-fade-down animate-once"
        />
        {/* <h1 className="text-5xl vogue text-center">Theorem Services</h1> */}
        <p className="text-center bg-white bg-opacity-40 rounded-lg p-2 shadow text-lg max-md:w-full max-xl:w-[50%] w-1/4 text-noir avenir">
          Plus rapide, plus simple, plus sûr : un accompagnement sur mesure pour
          rénover en toute sérénité.
        </p>
        <Link to="/estimation">
          <button
            className="bg-marron shadow-md text-noir font-semibold rounded-lg p-2 px-4 mt-1.5 uppercase avenir"
            type="button"
          >
            Estimation gratuit
          </button>
        </Link>
      </article>
    </header>
  )
}

export default Header
