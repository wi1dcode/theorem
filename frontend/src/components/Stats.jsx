import React from "react"
import CountUp from "react-countup"

export default function Stats() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-marron">
            <CountUp start={0} end={99} duration={5} separator="," />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base mt-1">
            Chantiers réalisés
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-marron">
            <CountUp start={0} end={100} duration={5} suffix="%" />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base mt-1">
            Projets achevés
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-marron">
            <CountUp start={0} end={100} duration={5} />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base mt-1">
            Quelque chose
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-marron">
            <CountUp start={0} end={94} duration={5} suffix="%" />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base mt-1">
            Nous recommandent
          </p>
        </div>
      </div>
    </div>
  )
}
