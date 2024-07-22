import { useEffect } from "react"
import { Helmet } from "react-helmet"

import AOS from "aos"
import "aos/dist/aos.css"

function Eco() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="h-screen">
      <Helmet>
        <title>Écologiques | Theorem Services</title>
        <meta
          name="description"
          content="Découvrez nos démarches écologiques chez Theorem Services. Engagés dans la préservation de l'environnement, nous adoptons des pratiques durables dans tous nos projets de rénovation."
        />
      </Helmet>

      <section
        className="flex max-md:flex-col max-md:gap-y-10 gap-x-10 justify-center items-center mt-20 container mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl helvetica-bold">Notre démarche écologique</h2>
      </section>
    </div>
  )
}

export default Eco
