import { useState } from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../images/icons/logo2.png";

function NavBarPro() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      title: "L'entreprise",
      path: "/pro",
      onClick: () => scrollToSection("main"),
    },
    {
      title: "Savoir-faire",
      path: "/pro",
      onClick: () => scrollToSection("savoir"),
    },
    {
      title: "Réalisations",
      path: "/pro/realisations",
    },
    {
      title: "Clients",
      path: "/pro",
      onClick: () => scrollToSection("clients"),
    },
    {
      title: "Contact",
      path: "/pro",
      onClick: () => scrollToSection("contact"),
    },
  ];

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const contactSection = document.getElementById(sectionId);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 shadow bg-gray-50 z-50 w-full sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center">
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
                toggleMenu();
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
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center max-md:items-start">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="max-md:w-full">
                  <Link
                    onClick={item.onClick}
                    to={item.path}
                    className="block avenir md:text-xl py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-marron md:border-0 md:hover:shadow-lg md:p-2 md:rounded-lg md:duration-150 md:ease-in-out"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPro;
