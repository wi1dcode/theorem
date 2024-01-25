import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"

function Energetique() {
  return (
    <div>
      <Helmet>
        <title>Rénovation Énergétique | Theorem Services</title>
        <meta
          name="description"
          content="Optez pour une rénovation énergétique avec Theorem Services. Nos solutions innovantes contribuent à l'amélioration de l'efficacité énergétique de vos espaces de vie."
        />
      </Helmet>
      <div className="eco_bg h-screen">
        <NavBar />
        <section className="flex flex-col gap-y-10 justify-center items-center mt-20 container mx-auto">
          <div className="text-5xl text-white drop-shadow-md avenir font-semibold text-center">
            Rénovation énergétique
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-transparent backdrop-blur-md border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 border border-green-600 border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5 avenir text-green-600 text-xl">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-transparent backdrop-blur-md border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 border border-green-600 border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-transparent backdrop-blur-md border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 border border-green-600 border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-transparent backdrop-blur-md border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 border border-green-600 border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quaerat, at illo cumque culpa laudantium!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Energetique
