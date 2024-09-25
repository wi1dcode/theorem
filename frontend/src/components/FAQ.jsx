import { useState } from "react"
import { Link } from "react-router-dom"
import HeartSvg from "../images/svg/HeartSvg"

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="text-start flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 soleil">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl soleil leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Foire aux questions
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Toutes les questions que vous vous posez, et bien plus encore ...
          </p>
        </div>
        <div className="space-y-4">
          <Item title="1. Theorem est-elle une entreprise de travaux ? ">
            <p className="soleil">
              Nous ne sommes pas simplement une entreprise de travaux. Nous
              offrons une expérience complète pour concrétiser les projets, qui
              vous tiennent à <HeartSvg /> <br /> Nos équipes s'occupent de la
              conception, de l'exécution et du suivi du chantier, vous libérant
              ainsi pour que vous puissiez vous concentrer pleinement sur ce qui
              compte le plus pour vous.
            </p>
          </Item>
          <Item title="2. Quels sont vos principaux domaines d'expertise ?">
            <p className="soleil">
              Notre savoir-faire couvre plusieurs aspects de votre projet, de la
              conception à la réalisation des travaux. Petit aperçu de ce que
              nous proposons :
            </p>
            <ul className="list-disc pl-14 py-2 soleil">
              <li>Pilotage de projet</li>
              <li>Conception</li>
              <li>Électricité</li>
              <li>Plomberie / Climatisation</li>
              <li>Revêtements Sols</li>
              <li>Revêtements Muraux</li>
              <li>
                Rénovation et réhabilitation de vos espaces intérieurs et
                extérieurs
              </li>
            </ul>
            <Link to="/expertises" className="flex justify-end">
              <button className="bg-vert_light rounded-lg p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300">
                En savoir plus
              </button>
            </Link>
          </Item>
          <Item title="3. Comment se passe le démarrage d'un projet chez Theorem ?">
            <ul className="list-disc pl-14 py-2 soleil flex flex-col gap-3">
              <li>
                Et si ça commençait par une{" "}
                <span className="soleil-bold">rencontre</span> ? Chez Theorem,
                chaque projet est important à nos yeux. Nous vous invitons à
                passer en agence pour{" "}
                <span className="soleil-bold">discuter de votre idée</span> et
                clarifier vos besoins. Nous concevrons une{" "}
                <span className="soleil-bold"> solution sur mesure.</span>
              </li>
              <li>
                Pas le temps de passer ?{" "}
                <span className="soleil-bold">Commencez dès maintenant</span> en
                remplissant notre formulaire personnalisé. Un chef de projet
                vous contactera pour affiner les détails, puis vous recevrez
                votre <span className="soleil-bold">devis.</span>
              </li>
            </ul>
            <Link to="/estimation" className="flex justify-end mt-2">
              <button className="bg-vert_light rounded-lg p-1 px-3 pt-2 text-white hover:bg-vert_principal transition duration-300">
                Démarrer mon projet
              </button>
            </Link>
          </Item>
          <Item title="4. Comment puis-je suivre l'avancement de mon projet en temps réel ?">
            <p className="soleil">
              C’est facile ! Il vous suffit de vous connecter à votre espace
              client. Vous y trouverez le statut de votre projet, vos documents,
              visuels et bien plus encore.
            </p>
          </Item>
          {/* <Item title="En quoi le paiement de l’acompte est-il sécurisé ?">
            <p>...</p> 
          </Item> */}
        </div>
      </div>
    </div>
  )
}
