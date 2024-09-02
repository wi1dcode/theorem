import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import UserSvg from "../images/svg/UserSvg"
import MenuCloseSvg from "../images/svg/MenuCloseSvg"
import TheoremIcon from "../images/svg/TheoremIcon"
import MenuSvg from "../images/svg/MenuSvg"
import ContactPhone from "../images/svg/ContactPhone"
import AOS from "aos"
import "aos/dist/aos.css"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { title: "À propos", path: "/about" },
    { title: "Nos projets", path: "/realisations" },
    { title: "Notre Savoir-faire", path: "/expertises" },
    {
      title: "J’estime mes travaux",
      path: "/estimation",
      className: "bg-beige/40",
    },
    { title: "Espace Pro", path: "/pro", target: "_blank" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleScroll = () => {
    if (window.scrollY > 50) setScrolled(true)
    else setScrolled(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    AOS.init()
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToContact = () => {
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById("contact")
      const yOffset = -150
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
      setIsOpen(false)
    }, 100)
  }

  return (
    <nav
      className={`w-full soleil
         z-50 top-0 px-4 transition-all duration-300 ${
           pathname === "/"
             ? `fixed ${
                 scrolled ? "bg-vert_principal" : "bg-vert_principal/30"
               }`
             : "sticky bg-vert_principal"
         }`}
    >
      <div className="flex items-center justify-between mx-0 py-2 w-full max-lg:text-sm">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center mr-4"
          >
            <TheoremIcon />
            <span className="text-white text-2xl pt-2 soleil-bold">
              Theorem
            </span>
            {/* <TheoremText className="text-white" /> */}
          </Link>

          <div className="hidden pt-1 md:flex space-x-6">
            {navigation.slice(0, 3).map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                target={item.target}
                className="text-white pb-1 hover:bg-beige/40 p-2 rounded transition-all soleil duration-300"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <div
            onClick={scrollToContact}
            className="text-white cursor-pointer hover:bg-beige/40 p-2 rounded transition-all duration-300"
          >
            <ContactPhone
              v2
              stroke="white"
              className="text-white w-6 pt-1 transition-all duration-300"
            />
          </div>
          {navigation.slice(3).map((item, idx) =>
            item.isContact ? (
              <div
                key={idx}
                onClick={scrollToContact}
                className="text-white cursor-pointer hover:bg-beige/40 p-2 rounded transition-all duration-300"
              >
                <ContactPhone
                  v2
                  stroke="white"
                  className="text-white w-8 pt-1 transition-all duration-300"
                />
              </div>
            ) : (
              <NavLink
                key={idx}
                to={item.path}
                target={item.target}
                className={`text-white pb-1 hover:bg-beige/40 p-2 rounded-lg transition-all duration-300 ${
                  item.className || ""
                }`}
              >
                {item.title}
              </NavLink>
            )
          )}
          <NavLink
            to="/login"
            className="text-white hover:bg-beige/40 p-2 rounded transition-all duration-300"
          >
            <UserSvg />
          </NavLink>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <MenuCloseSvg /> : <MenuSvg />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute top-0 left-0 right-0 p-2 bg-vert_principal z-50 flex items-center justify-between transition-all duration-300">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center"
            >
              <TheoremIcon />
              <span className="text-white text-xl font-bold">Theorem</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded focus:outline-none transition-transform duration-300"
            >
              <MenuCloseSvg />
            </button>
          </div>
          <div className="absolute top-16 left-0 right-0 z-40 flex flex-col items-center justify-center space-y-4 text-center text-white soleil-bold text-2xl p-2 rounded mt-10">
            {navigation
              .filter((item) => !item.isDropdown)
              .map((item, idx) =>
                item.isContact ? (
                  <div
                    key={idx}
                    onClick={scrollToContact}
                    className={`drop-shadow-lg cursor-pointer p-2 rounded transition-all duration-300 hover:text-beige/50 ${
                      item.className || ""
                    }`}
                  >
                    <ContactPhone stroke="white" />
                  </div>
                ) : (
                  <NavLink
                    key={idx}
                    to={item.path}
                    target={item.target}
                    onClick={toggleMenu}
                    className={`drop-shadow-lg p-2 rounded transition-all duration-300 hover:text-beige/50 ${
                      item.className || ""
                    }`}
                  >
                    {item.title}
                  </NavLink>
                )
              )}
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className="drop-shadow-lg p-2 rounded transition-all duration-300 hover:text-beige/50"
            >
              <div className="flex justify-center items-center space-x-2">
                <UserSvg />
                <span>Mon compte</span>
              </div>
            </NavLink>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 z-30"></div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
