import React from "react"
import TheoremLogo from "../images/svg/TheoremLogo"
import HeaderBg from "../images/bg-main.jpg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className={`bg-cover pt-10 bg-no-repeat w-full h-[80vh] flex flex-col gap-y-4 justify-center items-center`}
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <article className="flex w-full h-full flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-y-8 w-[50%] max-lg:w-[70%]">
          <div className="flex items-center w-full flex-col justify-center">
            <TheoremLogo className="w-54" />
            {/* <h2 className="roboto-bold text-5xl text-white">Theorem</h2> */}
            <h1 className="text-center mt-10 mb-4 text-white pl-10 rounded-lg max-md:text-sm text-5xl w-full roboto-bold">
              Concevoir. Façonner. Célébrer
            </h1>
          </div>
          <Link to="/realisations">
            <button
              className="bg-beige/50 shadow text-white font-semibold max-md:text-sm rounded-lg p-2 px-8 roboto"
              type="button"
            >
              Découvrir nos projets
            </button>
          </Link>
        </div>
      </article>
    </header>
  )
}

export default Header
