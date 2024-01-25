import { Outlet } from "react-router-dom"
import NavBarPro from "../components/NavBarPro"
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"
import { Helmet } from "react-helmet"
function Pro() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Helmet>
        <title>Espace Professionnel | Theorem Services</title>
        <meta
          name="description"
          content="Bienvenue dans l'Espace Professionnel de Theorem Services. Découvrez comment nos compétences et notre expertise peuvent contribuer au succès de vos projets professionnels."
        />
      </Helmet>
      <div className="bg-gray-50 z-50 w-full sticky top-0">
        <NavBarPro />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Outlet />
      </div>
    </>
  )
}

export default Pro
