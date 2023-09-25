import { Link, NavLink } from "react-router-dom"
import LogoBlack from "../images/icons/logo_black.png"
import { useState } from "react"
import UserSvg from "../images/svg/UserSvg"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="border-gray-200 bg-gray-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center">
          <img src={LogoBlack} className="h-14 mr-3" alt="Theorem Logo" />
        </Link>
        <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <div className="relative">
            <button
              onClick={toggleMenu}
              type="button"
              className="w-5 h-5 flex items-center justify-center transition-transform transform hover:scale-110"
            >
              <svg
                className={`text-black transition-transform ${
                  isOpen ? "rotate-95 scale-135" : "rotate-0 scale-100"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 17"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M1 1l15 15M16 1L1 16" : "M1 1h15M1 7h15M1 13h15"}
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`w-full md:block md:w-auto transition-all ${
            isOpen ? "max-h-96" : "max-md:max-h-0 max-md:overflow-hidden"
          }`}
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 hover:shadow md:border-0 md:hover:text-anthracite md:p-2 md:rounded-lg md:duration-150 md:ease-in-out"
              >
                Nos réalisations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/estimation"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded bg-yellow-300 md:border-0 md:hover:shadow-lg md:p-2 md:rounded-lg md:duration-150 md:ease-in-out"
              >
                Estimation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 hover:shadow md:border-0 md:hover:text-anthracite md:p-2 md:rounded-lg md:duration-150 md:ease-in-out"
              >
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 hover:shadow md:border-0 md:hover:text-anthracite md:p-2 md:rounded-lg md:duration-150 md:ease-in-out"
              >
                Contacter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:hover:text-yellow-400 shadow-md md:p-2 md:rounded-lg md:duration-150 md:ease-in-out max-md:text-yellow-400"
              >
                <div className="flex gap-x-2">
                  <UserSvg className="border-l border-red-100" />
                  <p className="md:hidden">Mon compte </p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
