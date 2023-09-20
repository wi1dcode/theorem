import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-sable w-full h-[250px] max-md:h-[300px] p-7 flex flex-col gap-y-4 rounded-xl justify-center items-center">
      <article className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-5xl vogue text-center">Theorem Services</h1>
        <p className="text-center text-anthracite avenir">
          Plus rapide, plus simple, plus sûr : un accompagnement sur mesure pour
          rénover en toute sérénité.
        </p>
        <Link to="/estimation">
          <button
            className="bg-blanc rounded-lg p-2 px-4 uppercase animate-pulse avenir"
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
