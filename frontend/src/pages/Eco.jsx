import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"
import photo_one from "../images/photo-1.jpeg"
import photo_two from "../images/photo-2.jpeg"
import photo_three from "../images/photo-3.jpeg"

function Eco() {
  return (
    <div className="eco_bg h-screen">
      <Helmet>
        <title>Écologiques | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez nos démarches écologiques chez Theorem Services. Engagés dans la préservation de l'environnement, nous adoptons des pratiques durables dans tous nos projets de rénovation."
        />
      </Helmet>

      <NavBar />
      <section className="flex max-md:flex-col max-md:gap-y-10 gap-x-10 justify-center items-center mt-20 container mx-auto">
        <div className="flex items-center justify-center -mx-4 lg:pl-8 drop-shadow-lg">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={photo_one}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={photo_two}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={photo_three}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-md:w-full w-1/2 gap-y-5">
          <div className="text-5xl text-white drop-shadow-md avenir font-semibold text-center">
            Demarches ecologiques
          </div>
          <p className="w-[70%] max-md:w-full bg-white/10 backdrop-blur-md rounded-lg text-white text-center p-2 drop-shadow-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            placeat asperiores. Facere, consectetur rerum. Eum nemo ratione
            laudantium aut illo maxime deserunt beatae suscipit ipsum, possimus
            vero magni minima dicta.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Eco
