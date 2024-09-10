import { Link } from "react-router-dom"

export const Step = () => {
  return (
    <div className="px-4 mb-12 pt-10 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 soleil-bold text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto avenir">
          Comment ça marche ?
        </h2>
      </div>
      <div className="flex gap-0 max-md:flex-col">
        <div className="sm:text-center relative py-8 px-4 bg-white rounded-tl- rounded-bl-sm shadow-md flex-grow max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-vert_principal rounded-full"></div>
          </div>
          <h2 className="soleil-bold text-3xl mb-2">1</h2>
          <h6 className="mb-2 font-semibold leading-5">
            Partagez votre Projet
          </h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Commencez votre projet en nous partageant ses détails.
          </p>
          <Link
            to="/estimation"
            className="inline-block bg-vert_principal text-white font-semibold rounded-lg px-6 py-2 mt-4"
          >
            Obtenir mon estimation
          </Link>
        </div>
        <div className="sm:text-center relative py-8 px-4 bg-white flex-grow shadow-inner max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-vert_principal rounded-full"></div>
          </div>
          <h2 className="soleil-bold text-3xl mb-2">2</h2>
          <h6 className="mb-2 font-semibold leading-5">Devis Personnalisé</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Recevez rapidement votre estimation gratuite, conçue sur mesure.
          </p>
        </div>
        <div className="sm:text-center relative py-8 px-4 bg-white rounded-tr-sm rounded-br-sm shadow-md flex-grow max-md:text-center">
          <div className="flex items-center justify-center w-8 h-8 mb-4 text-2xl font-extrabold rounded-full bg-gray-200 mx-auto">
            <div className="w-4 h-4 bg-vert_principal rounded-full"></div>
          </div>
          <h2 className="soleil-bold text-3xl mb-2">3</h2>
          <h6 className="mb-2 font-semibold leading-5">Service 360°</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            C’est parti ! Bénéficiez d'un accompagnement complet, de la
            conception à la réalisation des travaux, incluant un suivi
            post-travaux.
          </p>
        </div>
      </div>
    </div>
  )
}
