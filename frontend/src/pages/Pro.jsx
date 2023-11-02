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
