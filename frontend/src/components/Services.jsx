function Services() {
  return (
    <section className="w-full">
      <div className="relative flex justify-center items-center">
        <h2 className="text-center underline max-md:text-2xl text-3xl pb-4 pt-5 maves z-10">
          Service
          {/* <span className="text-2xl ml-2"> 🤝</span> */}
        </h2>
        {/* <span className="bg-sable max-md:w-[280px] w-[200px] h-[15px] block absolute top-9" /> */}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-x-6 justify-center items-center">
        <article className="shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
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
        <article className="shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
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
        <article className="shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
          <span className="text-6xl">💳</span>
          <div className="text-center px-3">
            <h3 className="uppercase font-semibold mb-2">Simple et sécurisé</h3>
            <p className="avenir">
              Signature électronique et paiements sécurisés
            </p>
          </div>
        </article>
        <article className="shadow-xl w-[45%] md:w-[14%] h-[230px] md:h-[240px] rounded-xl flex flex-col justify-center gap-y-6 items-center">
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
