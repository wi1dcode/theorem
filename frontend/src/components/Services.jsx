import SvgInfo from "../images/svg/SvgInfo"
import SvgCard from "../images/svg/SvgCard"
import StarSvg from "../images/svg/StarSvg"
import ExpertSvg from "../images/svg/ExpertSvg"
import RepeatSvg from "../images/svg/RepeatSvg"

import Swal from "sweetalert2"
import { Link } from "react-router-dom"

function Services() {
  const paymentInfo = () => {
    Swal.fire({
      title: "Information sur paiement",
      text: "Nous comprenons que les chantiers représentent plus que de simples travaux ; ils incarnent des moments de transformation et d’évolution dans votre vie. Soyez assurés que chez Theorem, la gestion de vos fonds est une priorité absolue. Nous mettons en œuvre une pratique de mise en séquestre de fonds rigoureuse et transparente pour assurer la sécurité de votre investissement.   Notre équipe est là pour répondre à toutes vos questions et vous offrir une visibilité totale sur l'utilisation de vos fonds. Votre tranquillité d'esprit est notre engagement.",
      icon: "question",
      iconColor: "#C8B790",
      confirmButtonColor: "#C8B790",
    })
  }

  return (
    <section className="w-full flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <h2 className="text-center max-md:text-2xl text-3xl pb-6 pt-5 roboto-bold sm:text-4xl z-10">
          Prestations de service
          {/* <span className="text-2xl ml-2"> 🤝</span> */}
        </h2>
        {/* <span className="bg-sable max-md:w-[280px] w-[200px] h-[15px] block absolute top-9" /> */}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-x-6 justify-center items-center max-sm:flex-col max-sm:gap-y-10">
        <article className="w-[45%] max-sm:w-[80%] md:w-[18%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <span className="text-6xl">⏰</span> */}
          <RepeatSvg />
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-4">
              Estimation gratuite
            </h3>
            <p className="roboto-light w-[90%] text-center mx-auto">
              Devis détaillé et transparent, adapté à vos besoins spécifiques
            </p>
          </div>
        </article>
        <article className="w-[45%] max-sm:w-[80%] md:w-[18%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <span className="text-6xl">🏆</span> */}
          <StarSvg />
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-4">
              Les meilleurs artisans
            </h3>
            <p className="roboto-light w-[90%] text-center mx-auto">
              Sélectionnés pour votre projet d’exception
            </p>
          </div>
        </article>
        <article className="w-[45%] max-sm:w-[80%] md:w-[18%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center relative">
          {/* <span className="text-6xl">💳</span> */}
          <SvgCard />
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-4">Simple et sécurisé</h3>
            <p className="roboto-light w-[90%] text-center mx-auto">
              Signature électronique et paiements sécurisés
            </p>
          </div>
          <span className="absolute top-2 right-2" onClick={paymentInfo}>
            <SvgInfo />
          </span>
        </article>
        <article className=" w-[45%] max-sm:w-[80%] md:w-[18%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <span className="text-6xl">💎</span> */}
          <ExpertSvg />
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-4">
              Une équipe d’experts
            </h3>
            <p className="roboto-light w-[90%] text-center mx-auto">
              Pour un encadrement professionnel et personnalisé
            </p>
          </div>
        </article>
      </div>
      <Link to="/estimation">
        <button
          className="bg-marron shadow text-white font-semibold rounded-lg p-2 px-8 mt-1.5 roboto"
          type="button"
        >
          Commencer mon projet
        </button>
      </Link>
    </section>
  )
}

export default Services
