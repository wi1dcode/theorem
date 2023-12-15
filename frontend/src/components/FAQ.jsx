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
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Foire aux questions
          </h2>
          <p className="text-base text-gray-700 md:text-lg ">
            Toutes les questions que vous vous posez, et bien plus encore ...
          </p>
        </div>
        <div className="space-y-4">
          <Item title="Quels sont les domaines d'expertise de Theorem ?">
            <p>
              Chez Theorem, notre expertise s'étend à divers domaines,
              notamment:
            </p>
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
            <Link to="/expertises" className="flex justify-end">
              <button className="bg-marron rounded-lg p-1 px-2 text-white">
                En savoir plus
              </button>
            </Link>
          </Item>
          <Item title="Comment garantissez-vous la qualité de vos services dans chaque domaine d'expertise ?">
            <p>
              La qualité de nos services chez Theorem est assurée par une équipe
              qualifiée, des normes et certifications strictes, une gestion de
              projet méthodique, la sélection de matériaux de premier ordre, des
              contrôles de qualité réguliers, des retours clients précieux, une
              formation continue pour notre équipe, et un engagement envers
              l'innovation. Chaque étape de nos projets est soigneusement
              planifiée et exécutée dans le respect des normes les plus élevées
              de l'industrie, garantissant la satisfaction de nos clients et la
              durabilité de nos réalisations.
            </p>
          </Item>
          <Item title="Quelle est la portée géographique des services de Theorem ? ">
            <p>
              Les prestations de bornes de recharge et de panneaux solaires,
              s'étendent à l'échelle nationale, offrant nos solutions innovantes
              à travers toute la France. L’ensemble des autres services de
              Theorem dans le secteur tertiaire et résidentiel couvrent, quant à
              eux, l'ensemble de l'Île-de-France.N'hésitez pas à nous contacter
              pour discuter de la faisabilité de votre projet, que vous soyez en
              région parisienne ou dans d'autres régions du pays.
            </p>
          </Item>
          <Item title="Quelles certifications ou normes suivez-vous pour assurer la conformité de vos prestations ?">
            <p>
              Chez Theorem, nous nous engageons à garantir la conformité et la
              qualité de nos prestations en suivant des normes et certifications
              rigoureuses. Nous accordons une importance particulière aux normes
              CE (Conformité Européenne) : Nous nous assurons que nos produits
              et services respectent les directives et les normes de sécurité de
              l'Union européenne.
            </p>

            <ul className="list-disc pl-14 py-2">
              <li>
                La marque CE apposée sur nos produits indique leur conformité
                aux exigences essentielles en matière de santé, de sécurité et
                de protection de l'environnement. NF (Norme Française){" "}
              </li>
              <li>
                Nous privilégions l'utilisation de produits certifiés NF,
                garantissant une qualité supérieure et une conformité aux normes
                françaises.
              </li>
              <li>
                La certification NF atteste que nos produits répondent aux
                critères définis par les normes françaises, contribuant ainsi à
                la sécurité et à la satisfaction du client.
              </li>
            </ul>
            <Link to="/expertises" className="flex justify-end">
              <button className="bg-marron rounded-lg p-1 px-2 text-white">
                En savoir plus
              </button>
            </Link>
          </Item>
          <Item title="Comment sont déterminés les coûts de projets de rénovation par Theorem ? ">
            <p>
              Les coûts des projets de rénovation chez Theorem sont évalués de
              manière transparente et personnalisée en fonction de divers
              facteurs, tels que la complexité des travaux, les matériaux
              sélectionnés, la taille du projet et les spécifications du client.
              Notre équipe d'experts effectue une analyse détaillée pour
              garantir des estimations justes et compétitives. Nous sommes
              également ouverts à discuter des options budgétaires avec nos
              clients afin de trouver des solutions adaptées à leurs besoins. La
              transparence dans la tarification est au cœur de notre engagement
              envers la satisfaction client. Pour obtenir une estimation
              personnalisée pour votre projet de rénovation, n'hésitez pas à
              nous contacter.
            </p>
          </Item>
        </div>
      </div>
    </div>
  )
}
