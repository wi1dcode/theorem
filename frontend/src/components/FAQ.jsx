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
          <h2 className="max-w-lg mb-6 text-3xl roboto-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Foire aux questions
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Toutes les questions que vous vous posez, et bien plus encore ...
          </p>
        </div>
        <div className="space-y-4">
          <Item title="Qu’est ce que Theorem ?">
            <p>
              Theorem est une entreprise de travaux à taille humaine, offrant
              des services complets de la conception à la réalisation. Nous vous
              conseillons, prenons en charge la conduite et la réalisation des
              travaux, et assurons un suivi rigoureux du chantier. Guidés par
              des valeurs d'éthique et de confiance, nous faisons de la
              satisfaction de nos clients notre priorité.
            </p>
          </Item>
          <Item title="Quels types de rénovation proposez-vous ?">
            <ul className="list-disc pl-14 py-2">
              <li>La gestion de projets et l'agencement, </li>
              <li>L’électricité, </li>
              <li>Bornes de recharges et Panneaux Solaires</li>
              <li>La plomberie, le chauffage et la VMC, </li>
              <li>La pose de revêtements muraux</li>
              <li>La pose de revêtements de sols</li>
              <li>
                L’isolation intérieure et extérieure (ITI / ITE) ainsi que le
                ravalement
              </li>
              <li>La couverture, la maçonnerie</li>
              <li>
                Les études de projets (structure, électricité, plomberie, CVC,
                design d’intérieur) Nous sommes fiers de proposer des solutions
                complètes pour répondre aux besoins variés de nos clients.
              </li>
            </ul>
            <p>
              Nous sommes fiers de proposer des solutions complètes qui
              répondent aux divers besoins de nos clients
            </p>
            <Link to="/realisations" className="flex justify-end">
              <button className="bg-marron rounded p-1 px-2 text-white">
                Découvrir nos réalisations
              </button>
            </Link>
          </Item>
          <Item title="Quelles zones géographiques couvrez-vous ?">
            <p>
              Nous intervenons principalement en Île-de-France. Pour vérifier
              votre éligibilité, il vous suffit de renseigner votre code postal
              dans notre formulaire en ligne.
            </p>
            <Link to="/estimation" className="flex justify-end mt-2">
              <button className="bg-marron rounded p-1 px-2 text-white">
                Commencer mon projet
              </button>
            </Link>
          </Item>
          <Item title="Comment Theorem assure-t-il la maîtrise des coûts et la sécurité des investissements de ses clients ? ">
            <p>
              Chez Theorem, nous garantissons la maîtrise des coûts et la
              sécurité des investissements de nos clients grâce à une
              <span className="roboto-bold">
                {" "}
                gestion financière rigoureuse
              </span>
              . Les fonds sont sécurisés via une
              <span className="roboto-bold"> mise en séquestre</span>, offrant
              une <span className="roboto-bold">visibilité</span> totale sur
              leur utilisation. Notre équipe est disponible pour répondre à
              toutes vos questions, assurant ainsi votre{" "}
              <span className="roboto-bold">tranquillité d'esprit.</span>
            </p>
          </Item>
        </div>
      </div>
    </div>
  )
}
