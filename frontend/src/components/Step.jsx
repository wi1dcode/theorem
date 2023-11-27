import { Link } from "react-router-dom"

export const Step = () => {
  return (
    <div className="px-4 mb-12 pt-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto max-sm:text-center sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Notre super accompagnement
          </p> */}
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-33 -mt-8 -ml-20 text-marron lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                width="52"
                height="23"
              />
            </svg>
            <span className="relative">Comment</span>
          </span>{" "}
          ça marche ? 🤔
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Découvrez la simplicité avec Theorem en 3 étapes. Détendez-vous, on
          vous accompagne dès la prise de contact en ligne
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center relative">
          <div className="flex border border-black items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-marron sm:mx-auto max-sm:mx-auto">
            1
          </div>
          <h6 className="mb-2 font-semibold leading-5 max-sm:text-center">
            Partagez les détails de votre projet
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto max-sm:text-center">
            Lancez-vous dans votre projet en partageant les détails avec nous
            pour obtenir une estimation gratuite personnalisée.
          </p>
          <Link
            to="/estimation"
            className="flex justify-center bg-blue-200 items-center rounded-full w-[100px] mx-auto font-semibold text-white"
          >
            Estimation
          </Link>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="sm:text-center relative">
          <div className="flex border border-black items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-marron sm:mx-auto max-sm:mx-auto">
            2
          </div>
          <h6 className="mb-2 font-semibold leading-5 max-sm:text-center">
            Nous l’estimons gratuitement et sur mesure
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto max-sm:text-center">
            Nous élaborons votre estimation gratuite et personnalisée et vous la
            transmettons rapidement.
          </p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
              className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="15,5 22,12 15,19 "
              />
            </svg>
          </div>
        </div>
        <div className="sm:text-center">
          <div className="flex border border-black items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-marron sm:mx-auto max-sm:mx-auto">
            3
          </div>
          <h6 className="mb-2 font-semibold leading-5 max-sm:text-center">
            De la conception à la réalisation : notre expertise à votre service
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto max-sm:text-center">
            Nous vous accompagnons tout au long de votre projet, de la
            conception à la réalisation sur le chantier, avec expertise et
            dévouement.
          </p>
        </div>
      </div>
    </div>
  )
}
