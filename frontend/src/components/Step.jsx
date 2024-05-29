import { Link } from "react-router-dom"

export const Step = () => {
  return (
    <div className="px-4 mb-12 pt-16 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 roboto-bold text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto avenir">
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
      </div>
      <div className="flex gap-0 max-md:flex-col">
        <div className="sm:text-center relative py-8 px-4 bg-white rounded-tl- rounded-bl-sm shadow-md flex-grow max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-marron rounded-full"></div>
          </div>
          <h2 className="roboto-bold text-3xl mb-2">1</h2>
          <h6 className="mb-2 font-semibold leading-5">
            Partagez les détails de votre projet
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Lancez-vous dans votre projet en partageant les détails avec nous
            pour obtenir une estimation gratuite personnalisée.
          </p>
          <Link
            to="/estimation"
            className="inline-block bg-marron text-white font-semibold rounded-full px-6 py-2 mt-4"
          >
            Estimation
          </Link>
        </div>
        <div className="sm:text-center relative py-8 px-4 bg-white flex-grow shadow-inner max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-marron rounded-full"></div>
          </div>
          <h2 className="roboto-bold text-3xl mb-2">2</h2>
          <h6 className="mb-2 font-semibold leading-5">
            Nous l’estimons gratuitement et sur mesure
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Nous élaborons votre estimation gratuite et personnalisée et vous la
            transmettons rapidement.
          </p>
        </div>
        <div className="sm:text-center relative py-8 px-4 bg-white rounded-tr-sm rounded-br-sm shadow-md flex-grow max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-marron rounded-full"></div>
          </div>
          <h2 className="roboto-bold text-3xl mb-2">3</h2>
          <h6 className="mb-2 font-semibold leading-5">
            De la conception à la réalisation : notre expertise à votre service
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Nous vous accompagnons tout au long de votre projet, de la
            conception à la réalisation sur le chantier, avec expertise et
            dévouement.
          </p>
        </div>
      </div>
    </div>
  )
}
