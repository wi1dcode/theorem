import React from "react"
import CountUp from "react-countup"

export default function Stats() {
  return (
    <div className="px-4 py-12 max-md:p-2 bg-vert_principal w-full soleil">
      <div className="flex flex-col sm:flex-row justify-around max-md:justify-center items-center w-full max-w-screen-xl mx-auto">
        <div className="text-center flex-1 sm:border-r-2 border-gray-300 py-4">
          <h6 className="text-3xl font-bold lg:text-4xl text-white soleil-bold">
            <CountUp start={0} end={40} duration={5} prefix="+" />
          </h6>
          <p className="text-sm font-medium tracking-wide text-gray-100 lg:text-lg mt-2">
            Projets réalisés par nos équipes.
          </p>
        </div>
        <div className="text-center flex-1 sm:border-r-2 border-gray-300 py-4 px-6 max-md:border-y">
          <h6 className="text-3xl font-bold lg:text-4xl text-white soleil-bold">
            <CountUp start={0} end={95} duration={5} suffix="%" />
          </h6>
          <p className="text-sm font-medium tracking-wide text-gray-100 lg:text-lg mt-2">
            De nos clients viennent sur recommandation.
          </p>
        </div>
        <div className="text-center flex-1 max-md:pt-4">
          <h6 className="text-3xl font-bold lg:text-4xl text-white soleil-bold">
            <CountUp start={0} end={100} duration={5} suffix="%" />
          </h6>
          <p className="text-sm font-medium tracking-wide text-gray-100 lg:text-lg mt-2">
            Engagés éco-responsables.
          </p>
        </div>
      </div>
    </div>
  )
}
