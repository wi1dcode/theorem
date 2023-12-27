import { Link, NavLink } from "react-router-dom"
import LogoBlack from "../images/icons/logo2.png"
import { useEffect, useState } from "react"
import UserSvg from "../images/svg/UserSvg"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [drapdown, setDrapdown] = useState({
    isActive: false,
    idx: null,
  })

  const dropdownNavs = [
    {
      label: "Rubriques:",
      navs: [
        {
          title: "Histoire",
          desc: "Naissance de Theorem",
          path: "/histoire",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          ),
        },
        {
          title: "Identité",
          desc: "A propos de nous",
          path: "/about",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      navs: [
        {
          title: "Expertises",
          desc: "Expertises",
          path: "/expertises",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              />
            </svg>
          ),
        },
        {
          title: "Demarches écologiques",
          desc: "Coming soon",
          path: "/eco",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
            </svg>
          ),
        },
      ],
    },
    {
      navs: [
        {
          title: "Partenariat",
          desc: "Devenir partenaire",
          path: "/partenariat",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
          ),
        },
        {
          title: "Contacter",
          desc: "Nous contacter",
          path: "/",
          onClick: () => scrollToContact("contact"),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          ),
        },
      ],
    },
  ]

  const navigation = [
    {
      title: "Réalisations",
      path: "/realisations",
      onClick: () => setIsOpen(false),
      isDrapdown: false,
    },

    {
      title: "🌿 Rénovation énergétique",
      path: "/energetique",
    },

    {
      title: "En savoir plus",
      path: "/",
      isDrapdown: true,
      navs: dropdownNavs,
    },
    {
      title: "Estimation gratuite",
      path: "/estimation",
      class: "bg-marron md:logo-pulse",
    },
    {
      title: "📞",
      path: "/",
      onClick: () => scrollToContact("contact"),
    },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToContact = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      const yOffset = -230
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
      setIsOpen(false)
    }, 100)
  }

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target
      if (!target.closest(".nav-menu"))
        setDrapdown({ isActive: false, idx: null })
    }
  }, [])

  return (
    <nav className="border-gray-200 bg-gray-50 z-50 w-full sticky top-0">
      <div className="flex flex-wrap items-center justify-around max-md:justify-between mx-auto p-2">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center"
        >
          <img
            src={LogoBlack}
            className="md:h-20 h-14 mr-3"
            alt="Theorem Logo"
          />
        </Link>
        <div className="inline-flex items-center w-10 h-10 justify-start text-sm rounded-lg md:hidden focus:outline-none">
          <div className="relative">
            <button
              onClick={() => {
                toggleMenu()
              }}
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
          className={`nav-menu w-full md:block md:w-auto transition-all ${
            isOpen ? "max-h-96" : "max-md:max-h-0 max-md:overflow-hidden"
          }`}
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 items-center max-md:items-start">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="max-md:w-full">
                  {item.isDrapdown ? (
                    <button
                      className={` w-full flex md:text-xl items-center justify-between gap-1 avenir py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-marron md:border-0 md:hover:shadow-lg md:p-2 md:rounded-lg md:duration-150 md:ease-in-out`}
                      onClick={() => {
                        setDrapdown({
                          idx,
                          isActive: !drapdown.isActive,
                        })
                      }}
                    >
                      {item.title}
                      {drapdown.idx === idx && drapdown.isActive ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      target={item.target}
                      onClick={item.onClick}
                      className={`block ${item.class} avenir md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-marron md:border-0 md:hover:shadow-lg md:p-2 md:rounded-lg md:duration-150 md:ease-in-out`}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.isDrapdown &&
                  drapdown.idx === idx &&
                  drapdown.isActive ? (
                    <div className="mt-4 bg-gray-50 max-md:bg-marron/50 rounded-lg px-4 py-4 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-[-10px]">
                      <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                        {item?.navs.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <p className="text-marron text-sm">
                              {dropdownItem.label}
                            </p>
                            <ul className="mt-5 space-y-6">
                              {dropdownItem.navs.map((navItem, idx) => (
                                <li key={idx} className="group">
                                  <Link
                                    to={navItem.path}
                                    onClick={() => {
                                      if (navItem.onClick) {
                                        navItem.onClick()
                                      }
                                    }}
                                    className="flex gap-3 items-center"
                                  >
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-marron flex items-center justify-center duration-150 group-hover:bg-marron group-hover:text-white md:w-14 md:h-14">
                                      {navItem.icon}
                                    </div>
                                    <div>
                                      <span className="text-gray-800 duration-200 group-hover:text-marron text-sm font-medium md:text-base">
                                        {navItem.title}
                                      </span>
                                      <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1">
                                        {navItem.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              )
            })}
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <li>
              <NavLink
                to="/pro"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="block avenir max-md:mb-1 md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:hover:shadow-lg md:p-2 md:rounded-lg md:duration-150 hover:bg-marron md:ease-in-out"
              >
                Clients PRO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block avenir py-2  pl-3 pr-4 text-gray-900 rounded md:border-0 md:hover:text-marron shadow md:p-2 md:rounded-lg md:duration-150 md:ease-in-out max-md:text-marron"
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
