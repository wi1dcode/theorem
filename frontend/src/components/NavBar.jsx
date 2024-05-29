import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import UserSvg from "../images/svg/UserSvg"
import MenuCloseSvg from "../images/svg/MenuCloseSvg"
import TheoremIcon from "../images/svg/TheoremIcon"
import MenuSvg from "../images/svg/MenuSvg"
import LinkArrow from "../images/svg/LinkArrow"
import AOS from "aos"
import "aos/dist/aos.css"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { title: "Réalisations", path: "/realisations" },
    { title: "Expertises", path: "/expertises" },
    { title: "En savoir plus", path: "#", isDropdown: true },
    {
      title: "Estimation gratuite",
      path: "/estimation",
      className: "bg-beige/40",
    },
    { title: "Contacts", path: "/", isContact: true },
    { title: "Clients PRO", path: "/pro", target: "_blank" },
  ]

  const dropdownNavs = [
    { title: "Que sommes nous", path: "/about" },
    { title: "Partenariat", path: "/partenariat" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleScroll = () => {
    if (window.scrollY > 50) setScrolled(true)
    else setScrolled(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    AOS.init()
    return () => {
      document.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const scrollToContact = () => {
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById("contact")
      const yOffset = -230
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
      setIsOpen(false)
    }, 100)
  }

  return (
    <nav
      className={`w-full roboto z-50 top-0 transition-all duration-300 ${
        pathname === "/"
          ? `fixed ${scrolled ? "bg-marron" : "bg-marron/30"}`
          : "sticky bg-marron"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-screen-xl max-lg:text-sm">
        <div className="hidden md:flex space-x-6">
          {navigation.slice(0, 2).map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              target={item.target}
              className="text-white hover:bg-beige/40 p-2 rounded transition-all duration-300"
            >
              {item.title}
            </NavLink>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white hover:bg-beige/40 p-2 rounded transition-all duration-300"
            >
              En savoir plus
              <LinkArrow
                className="ml-2"
                fill="white"
                up={dropdownOpen}
                down={!dropdownOpen}
              />
            </button>
            {dropdownOpen && (
              <div
                className="fixed top-[60px] left-0 shadow w-full h-[60px] bg-marron z-50 flex items-start justify-start transition-all duration-300"
                data-aos="flip-up"
              >
                <div className="text-center text-white flex justify-between p-2 gap-4">
                  {dropdownNavs.map((dropdownItem, idx) => (
                    <NavLink
                      key={idx}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-xl transition-all duration-300 hover:bg-beige/50 rounded-md"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {dropdownItem.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex">
          <TheoremIcon />
        </Link>

        <div className="hidden md:flex space-x-6">
          {navigation.slice(3).map((item, idx) =>
            item.isContact ? (
              <button
                key={idx}
                onClick={scrollToContact}
                className={`text-white hover:bg-beige/40 p-2 rounded transition-all duration-300 ${
                  item.className || ""
                }`}
              >
                {item.title}
              </button>
            ) : (
              <NavLink
                key={idx}
                to={item.path}
                target={item.target}
                className={`text-white hover:bg-beige/40 p-2 rounded transition-all duration-300 ${
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
          <div className="absolute top-0 left-0 right-0 p-2 px-4 bg-marron z-50 flex items-center justify-between transition-all duration-300">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex">
              <TheoremIcon />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded focus:outline-none transition-transform duration-300"
            >
              <MenuCloseSvg />
            </button>
          </div>
          <div className="absolute top-16 left-0 right-0 z-40 flex flex-col items-center justify-center space-y-4 text-center text-white roboto-bold text-2xl p-2 rounded mt-10">
            {dropdownNavs.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                onClick={toggleMenu}
                className="drop-shadow-lg p-2 rounded transition-all duration-300 hover:text-beige/50"
              >
                {item.title}
              </NavLink>
            ))}
            {navigation
              .filter((item) => !item.isDropdown)
              .map((item, idx) =>
                item.isContact ? (
                  <button
                    key={idx}
                    onClick={scrollToContact}
                    className={`drop-shadow-lg p-2 rounded transition-all duration-300 hover:text-beige/50 ${
                      item.className || ""
                    }`}
                  >
                    {item.title}
                  </button>
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
