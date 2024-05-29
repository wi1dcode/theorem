import React from "react"
import { Link } from "react-router-dom"
import TheoremIcon from "../images/svg/TheoremIcon"

function Footer() {
  return (
    <footer className="bg-marron py-8">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-screen-xl md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col text-sm roboto md:flex-row md:items-center justify-between w-full md:w-auto space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-start md:mb-0 pr-4">
              <Link
                to="/"
                aria-label="Go home"
                className="inline-flex flex-col items-center mb-4"
              >
                <TheoremIcon className="w-32 text-white" />
                <span className="ml-2 text-white text-xl font-bold">
                  Theorem
                </span>
              </Link>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/realisations"
                    className="text-white hover:text-beige/50"
                  >
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/expertises"
                    className="text-white hover:text-beige/50"
                  >
                    Expertises
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-beige/50">
                    Qui sommes nous ?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/histoire"
                    className="text-white hover:text-beige/50"
                  >
                    Notre histoire
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/identite"
                    className="text-white hover:text-beige/50"
                  >
                    Notre identité
                  </Link>
                </li>
                <li>
                  <Link to="/eco" className="text-white hover:text-beige/50">
                    Démarche écologique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partenariat"
                    className="text-white hover:text-beige/50"
                  >
                    Partenariat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/estimation"
                    className="text-white hover:text-beige/50"
                  >
                    Estimation gratuite
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2">
                <li>
                  <Link to="/pro" className="text-white hover:text-beige/50">
                    Clients PRO
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white hover:text-beige/50">
                    Espace client
                  </Link>
                </li>
                <li>
                  <Link
                    to="/estimation"
                    className="text-white hover:text-beige/50"
                  >
                    Créer un compte
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-full md:w-[30%]">
              <p className="font-semibold tracking-wide text-white mb-2">
                Notre newsletter
              </p>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded bg-beige text-black placeholder-gray-500"
                />
                <button className="p-2 rounded bg-beige text-black">
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-white">
                Vous pouvez vous désabonner à tout moment. On n'est pas
                susceptibles, promis. Pour en savoir plus sur notre politique de
                protection des données,{" "}
                <Link to="/" className="underline">
                  cliquez ici
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center border-t border-beige/30 pt-4 mt-4">
          <p className="text-xs text-white mb-2 md:mb-0">
            © 2024. Tous droits réservés.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs">
            <Link to="/" className="text-white hover:text-beige/50">
              Politique de confidentialité
            </Link>
            <Link to="/" className="text-white hover:text-beige/50">
              Mentions légales
            </Link>
            <Link to="/" className="text-white hover:text-beige/50">
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
