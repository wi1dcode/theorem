import { Outlet } from "react-router-dom"
import NavBarPro from "../components/NavBarPro"
import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"
function Pro() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div>
        <NavBarPro />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Outlet />
      </div>
    </>
  )
}

export default Pro
