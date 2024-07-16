import React from "react"
import { Link } from "react-router-dom"
import TheoremIcon from "../images/svg/TheoremIcon"

function Footer() {
  return (
    <footer className="bg-marron py-8">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-screen-xl md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/"
              aria-label="Go home"
              className="flex items-center flex-col mb-4 md:mb-0"
            >
              <TheoremIcon className="w-24 h-24 text-white" />
              <span className="ml-2 text-white text-xl font-bold">Theorem</span>
            </Link>
            <div className="flex flex-col text-white">
              <span className="font-bold mb-2">Nous contacter</span>
              <span>contact@theorem-concept.fr</span>
              <span>06 95 75 37 02</span>
            </div>
            <div className="flex flex-col text-white">
              <span className="font-bold mb-2">Nous suivre</span>
              <Link to="/" className="hover:text-beige/50">
                Instagram
              </Link>
              <Link to="/" className="hover:text-beige/50">
                Facebook
              </Link>
              <Link to="/" className="hover:text-beige/50">
                LinkedIn
              </Link>
            </div>
            <div className="flex flex-col text-white">
              <span className="font-bold mb-2">Nous rendre visite</span>
              <span>27 rue stalingrad, 95120, Ermont</span>
              <span className="font-bold mt-2">Horaires d'ouverture</span>
              <span>Du lundi au samedi de 10h à 18h</span>
            </div>
            <div className="flex flex-col text-white">
              <span className="font-bold mb-2">Ressources</span>
              <Link to="/" className="hover:text-beige/50">
                Plaquette de présentation
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-beige/30 pt-4 mt-4 space-y-4 md:space-y-0">
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
