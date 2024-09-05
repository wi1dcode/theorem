import React from "react"
import { Link } from "react-router-dom"
import TheoremIcon from "../images/svg/TheoremIcon"

function Footer() {
  return (
    <footer className="bg-vert_principal py-8 soleil">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-screen-xl md:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              aria-label="Go home"
              className="flex flex-col items-center mb-4"
            >
              <TheoremIcon
                className="w-24 h-24 text-white"
                viewBox="10 0 50 50"
              />
              <span className="ml-2 text-white text-md text-center soleil-bold">
                Theorem
              </span>
            </Link>
          </div>
          <div className="flex flex-grow md:border-r max-md:border-b max-md:pb-2 justify-center max-md:justify-start pr-4">
            <div className="flex flex-col text-white max-md:text-left">
              <p className="soleil-bold mb-2">Nous contacter</p>
              <a
                className="courier-prime-regular"
                href="mailto:contact@theorem-concept.fr"
              >
                contact@theorem-concept.fr
              </a>
              <a className="courier-prime-regular" href="tel:+33695753702">
                06 95 75 37 02
              </a>
            </div>
          </div>
          <div className="flex flex-grow md:border-r max-md:border-b max-md:pb-2 justify-center max-md:justify-start pr-4">
            <div className="flex flex-col text-white max-md:text-left">
              <p className="soleil-bold mb-2">Nous suivre</p>
              <Link
                to="https://www.instagram.com/theorem_concept/"
                target="_blank"
                className="hover:text-beige/50 courier-prime-regular"
              >
                Instagram
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=61561426542985"
                target="_blank"
                className="hover:text-beige/50 courier-prime-regular"
              >
                Facebook
              </Link>
              <Link
                to="https://www.linkedin.com/company/theoremconcept/"
                className="hover:text-beige/50 courier-prime-regular"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="flex flex-grow md:border-r max-md:border-b max-md:pb-2 justify-center max-md:justify-start pr-4">
            <div className="flex flex-col text-white max-md:text-left">
              <p className="soleil-bold mb-2">Nous rendre visite</p>
              <p className="courier-prime-regular">
                27 rue Stalingrad, 95120, Ermont
              </p>
              <p className="soleil-bold mt-2">Horaires d'ouverture</p>
              <p className="courier-prime-regular">
                Du lundi au samedi de 10h à 18h
              </p>
            </div>
          </div>
          <div className="flex flex-grow justify-center max-md:justify-start">
            <div className="flex flex-col text-white max-md:text-left">
              <p className="soleil-bold mb-2">Plus d'informations</p>
              <Link
                to="/plaquetteprocg.pdf"
                target="_blank"
                className="hover:text-beige/50 courier-prime-regular"
              >
                Plaquette de présentation
              </Link>
              <Link
                to="/partenariat"
                className="hover:text-beige/50 courier-prime-regular"
              >
                Devenir partenaire
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-beige/30 pt-4 mt-4 space-y-4 md:space-y-0">
          <p className="text-xs text-white mb-2 md:mb-0">
            © 2024. Tous droits réservés.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs">
            <Link
              to="/politique.pdf"
              target="_blank"
              className="text-white hover:text-beige/50"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/mentions-legales"
              className="text-white hover:text-beige/50"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
