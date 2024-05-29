import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
import LinkArrow from "../images/svg/LinkArrow"

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
        <h2 className="text-3xl roboto-bold">Notre démarche écologique</h2>
      </section>
      <Link
        to="/identite"
        className="flex roboto items-center justify-start mt-10"
      >
        <div className="flex px-4 shadow-md hover:bg-marron/10 duration-300 py-3 rounded ml-2">
          <LinkArrow right />
        </div>
        Notre identité
      </Link>
    </div>
  )
}

export default Eco
