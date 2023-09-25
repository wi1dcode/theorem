import SecureSvg from "../images/svg/SecureSvg"

function Services() {
  return (
    <section className="w-full">
      <h2 className="text-center text-5xl pb-4 pt-5 rouge">
        <span className="text-2xl">⚜️ </span>Service
        <span className="text-2xl"> ⚜️</span>
      </h2>
      <div className="flex flex-wrap gap-2 md:gap-x-6 justify-center items-center">
        <article className="shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <SecureSvg /> */}
          <span className="text-6xl">⏰</span>
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-2">
              Estimation gratuite
            </h3>
            <p className="avenir">
              Devis estimatif détaillé, obtenu en un temps record
            </p>
          </div>
        </article>
        <article className=" shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <SecureSvg /> */}
          <span className="text-6xl">🏆</span>
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-2">
              Les meilleurs artisans
            </h3>
            <p className="avenir">
              Sélectionnés spécialement pour votre projet
            </p>
          </div>
        </article>
        <article className=" shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <SecureSvg /> */}
          <span className="text-6xl">💳</span>
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-2">Simple et sécurisé</h3>
            <p className="avenir">
              Signature électronique et paiements sécurisés
            </p>
          </div>
        </article>
        <article className=" shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          {/* <SecureSvg /> */}
          <span className="text-6xl">💎</span>
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-2">
              Une équipe d’experts
            </h3>
            <p className="avenir">Pour un accompagnement personnalisé</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services
