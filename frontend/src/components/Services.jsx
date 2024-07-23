import SvgInfo from "../images/svg/SvgInfo";
import SvgCard from "../images/svg/SvgCard";
import StarSvg from "../images/svg/StarSvg";
import ExpertSvg from "../images/svg/ExpertSvg";
import RepeatSvg from "../images/svg/RepeatSvg";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Services() {
  const paymentInfo = () => {
    Swal.fire({
      title: "Information sur paiement",
      text: "Chez Theorem, nous comprenons que les travaux représentent des moments importants dans votre vie. Pour sécuriser votre investissement, nous garantissons une gestion rigoureuse et transparente de vos fonds, avec mise en séquestre et visibilité totale.",
      icon: "question",
      iconColor: "#575548",
      confirmButtonColor: "#575548",
    });
  };

  return (
    <section className="w-full flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <h2 className="text-center max-md:text-2xl text-3xl pb-6 pt-5 soleil-bold sm:text-4xl z-10">
          Services
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
            <p className="soleil-light w-[90%] text-center mx-auto">
              Obtenez un devis clair et détaillé, parfaitement adapté à vos
              besoins.
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
            <p className="soleil-light w-[90%] text-center mx-auto">
              Des artisans qualifiés et expérimentés, entièrement dédiés à la
              réussite de votre projet.
            </p>
          </div>
        </article>
        <article className="w-[45%] max-sm:w-[80%] md:w-[18%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center relative">
          {/* <span className="text-6xl">💳</span> */}
          <SvgCard />
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-4">Simple et sécurisé</h3>
            <p className="soleil-light w-[90%] text-center mx-auto">
              Profitez de la signature électronique et de paiements sécurisés
              pour une tranquillité d'esprit totale.
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
            <p className="soleil-light w-[90%] text-center mx-auto">
              Un encadrement professionnel et personnalisé, assuré par une
              équipe d'experts
            </p>
          </div>
        </article>
      </div>
      <Link to="/estimation">
        <button
          className="bg-marron shadow text-white font-semibold rounded-lg p-2 px-8  mt-10 soleil"
          type="button"
        >
          Commencer mon projet
        </button>
      </Link>
    </section>
  );
}

export default Services;
