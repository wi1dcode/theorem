import { useState } from "react"
import { Link } from "react-router-dom"

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
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-3xl helvetica-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Foire aux questions
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Toutes les questions que vous vous posez, et bien plus encore ...
          </p>
        </div>
        <div className="space-y-4">
          <Item title="Theorem est-elle une entreprise de travaux ? ">
            <p>
              Chez Theorem, nous ne sommes pas simplement une entreprise de
              travaux. Nous offrons une expérience complète pour concrétiser les
              projets, qui vous tiennent à 💚 <br /> Nos équipes s'occupent de
              la conception, de l'exécution et du suivi du chantier, vous
              libérant ainsi pour que vous puissiez vous concentrer pleinement
              sur ce qui compte le plus pour vous.
            </p>
          </Item>
          <Item title="Quels sont vos principaux domaines d'expertise ?">
            <p>
              Notre savoir-faire couvre plusieurs aspects de votre projet, de la
              conception à la réalisation des travaux. Voici un aperçu de ce que
              nous proposons :
            </p>
            <ul className="list-disc pl-14 py-2">
              <li>Pilotage de projet</li>
              <li>Décoration intérieure</li>
              <li>Revêtement sol & murs</li>
              <li>Plomberie</li>
              <li>Électricité</li>
            </ul>
            <Link to="/expertises" className="flex justify-end">
              <button className="bg-marron rounded p-1 px-2 text-white">
                En savoir plus
              </button>
            </Link>
          </Item>
          <Item title="Quelles sont les étapes initiales pour commencer un projet avec vous ?">
            <p>Voici les étapes pour commencer votre projet</p>
            <ul className="list-disc pl-14 py-2">
              <li>
                Complétez notre formulaire personnalisé pour nous donner un
                aperçu de vos besoins et de votre vision.
              </li>
              <li>
                Votre chef de projet reviendra vers vous pour ajuster les
                détails de votre projet. Vous recevrez alors un devis et une
                estimation du planning.
              </li>
            </ul>
            <Link to="/estimation" className="flex justify-end mt-2">
              <button className="bg-marron rounded p-1 px-2 text-white">
                Commencer mon projet
              </button>
            </Link>
          </Item>
          <Item title="Comment puis-je suivre l'avancement de mon projet en temps réel ?">
            <p>
              C’est facile ! Il vous suffit de vous connecter à votre espace
              client. Vous y trouverez toutes les mises à jour, des photos des
              progrès aux prochaines étapes
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
