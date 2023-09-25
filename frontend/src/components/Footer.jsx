import React from "react"
import Logo from "../images/icons/logo_black.png"
import Social from "./Social"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="relative mt-16 bg-nuage">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-nuage"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2 max-md:flex max-md:items-center max-md:justify-center max-md:flex-col max-md:text-center">
            <Link
              to="/"
              aria-label="Go home"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                <img src={Logo} alt="theorem-logo" className="w-[120px]" />
              </span>
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <Link>
                <button className="bg-yellow-300 px-3 py-2 rounded-lg shadow text-xl mt-2">
                  Devenir PRO
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 mt-6">
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                A propos
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Ils parlent de nous
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Nos super avis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Nos super avis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Liens utiles
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Nous recrutons
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Mentions légales & CGU
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-yellow-600">
                Ressources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Rénovation Énergétique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Rénovation Appartement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Rénovation Maison
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-yellow-600"
                  >
                    Rénovation Salle de bain
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-6">
              <Social />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-3 pb-4 border-t border-anthracite sm:flex-row">
          <p className="text-sm text-black mx-auto">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
