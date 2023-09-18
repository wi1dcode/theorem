import React from "react"

function Header() {
  return (
    <header className="bg-sable w-full h-[250px] p-7 flex flex-col gap-y-4 rounded-xl justify-center items-center">
      <article className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl vogue text-center">Theorem Services</h1>
        <p className="text-center text-anthracite avenir">
          Plus rapide, plus simple, plus sûr : un accompagnement sur mesure pour
          rénover en toute sérénité.
        </p>
        <button
          className="bg-blanc rounded-lg p-2 px-4 uppercase animate-pulse avenir"
          type="button"
        >
          Estimation gratuit
        </button>
      </article>
    </header>
  )
}

export default Header
