import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

import AOS from "aos"
import "aos/dist/aos.css"
import { useLocation } from "react-router-dom"

import parteneriatData from "../services/parteneriat.json"
import partCard from "../services/partCard.json"

function Pro() {
  const { pathname } = useLocation()
  const tabItems = ["Tes Garanties", "Tes Missions"]
  const [selectedItem, setSelectedItem] = useState("garanties")

  const scrollToContact = (sectionId) => {
    setTimeout(() => {
      const contactSection = document.getElementById(sectionId)
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }, 100)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
  }, [pathname])

  return (
    <section className="bg-marron/30 pb-10">
      <NavBar />
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="w-full absolute -z-10"
      >
        <rect x="0" y="0" fill="none"></rect>
        <path
          d="M0 311L18.8 300.7C37.7 290.3 75.3 269.7 112.8 262.8C150.3 256 187.7 263 225.2 258.5C262.7 254 300.3 238 337.8 245.7C375.3 253.3 412.7 284.7 450.2 296C487.7 307.3 525.3 298.7 562.8 284.7C600.3 270.7 637.7 251.3 675.2 250C712.7 248.7 750.3 265.3 787.8 273.5C825.3 281.7 862.7 281.3 881.3 281.2L900 281L900 0L881.3 0C862.7 0 825.3 0 787.8 0C750.3 0 712.7 0 675.2 0C637.7 0 600.3 0 562.8 0C525.3 0 487.7 0 450.2 0C412.7 0 375.3 0 337.8 0C300.3 0 262.7 0 225.2 0C187.7 0 150.3 0 112.8 0C75.3 0 37.7 0 18.8 0L0 0Z"
          fill="#C8B790"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
      <div>
        <div className="flex justify-center items-center flex-col mt-16">
          <h2 className="font-semibold text-4xl avenir">Pose ta candidature</h2>
          <p className="avenir text-xl mt-4 w-1/4 max-md:w-[80%] max-xl:w-1/3 text-center">
            Tu souhaites rejoindre le réseau Theorem Services pour des chantiers
            sérieux, chiffrés et ceci toute l’année ? Tu es au bon endroit !
          </p>
        </div>
        <div className="flex gap-x-6 justify-center items-center flex-wrap max-md:gap-y-4 mt-20">
          {partCard.map((card) => (
            <article
              key={card.id}
              className="w-[330px] h-[500px] flex flex-col justify-evenly items-center text-center p-3 rounded-lg shadow-lg bg-white/50 backdrop-blur-2xl relative"
            >
              <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-14 inside-shadow">
                <img alt="entrepreneur du bâtiment" src={card.imageUrl} />
              </div>
              <div className="flex justify-center flex-col items-center">
                <h3 className="avenir font-semibold text-2xl">
                  {card.type}
                  <br /> {card.title}
                </h3>
                <span className="w-[100px] mt-2 h-1 bg-marron block" />
              </div>
              <div>
                <p className="avenir">{card.description}</p>
              </div>
              <div
                onClick={() => scrollToContact(card.id)}
                className="flex flex-col justify-center items-center gap-y-2 cursor-pointer"
              >
                <p className="text-marron font-semibold underline">
                  En savoir plus
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-marron"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
        <div>
          {parteneriatData.map((item) => (
            <div
              key={item.id}
              className="w-[65%] h-[85vh] bg-marron mx-auto mt-20 relative flex justify-between py-16 px-14 paper"
              id={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-12 left-[45%] inside-shadow">
                <img alt={item.title} src={item.imageUrl} />
              </div>
              <div className="w-1/2 px-2 flex flex-col gap-y-6 avenir">
                <h2 className="text-2xl font-semibold pt-4 ">
                  {item.title}
                  <span className="w-[100px] mt-4 h-[5px] bg-[#af9a6a] block" />
                </h2>
                <p className="mt-4 text-xl">{item.description}</p>
                <div>
                  <p className="mb-4 text-2xl font-semibold">
                    Tes supers pouvoirs ?
                  </p>
                  <div className="flex flex-col gap-y-2">
                    {item.mustHave.map((have) => (
                      <p key={have} className="text-xl">
                        {have}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start">
                  <button className="bg-marron px-10 font-semibold text-white py-2 rounded-lg">
                    Contacter nous pour candidater
                  </button>
                </div>
              </div>
              <div className="w-1/2 bg-marron/30 rounded-lg flex justify-center">
                <div className="flex flex-col items-center gap-y-10">
                  <ul
                    role="tablist"
                    className="flex items-center gap-x-3 text-xl avenir overflow-x-auto"
                  >
                    {tabItems.map((item, idx) => (
                      <li
                        key={idx}
                        className={`py-2 border-b-4 ${
                          selectedItem ===
                          (idx === 0 ? "garanties" : "missions")
                            ? "border-marron text-marron overflow-hidden"
                            : "border-white text-white"
                        }`}
                      >
                        <button
                          role="tab"
                          aria-selected={
                            selectedItem ===
                            (idx === 0 ? "garanties" : "missions")
                          }
                          aria-controls={`tabpanel-${idx + 1}`}
                          className="py-2.5 font-semibold px-4 rounded-lg duration-150 hover:text-white hover:bg-marron active:bg-marron"
                          onClick={() =>
                            setSelectedItem(
                              idx === 0 ? "garanties" : "missions"
                            )
                          }
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>

                  {item[selectedItem].map((selectedItemData) => (
                    <div className="flex flex-col items-center justify-center text-center px-4 gap-y-2 rounded-2xl">
                      <article
                        key={selectedItemData.title}
                        className="border-b-2 border-marron py-2"
                      >
                        <h3 className="font-semibold text-2xl avenir">
                          {selectedItemData.title}
                        </h3>
                        <p className="avenir px-4">
                          {selectedItemData.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pro
