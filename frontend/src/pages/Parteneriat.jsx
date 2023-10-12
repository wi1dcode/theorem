import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

import AOS from "aos"
import "aos/dist/aos.css"

function Pro() {
  const tabItems = ["Tes Garanties", "Tes Missions"]
  const [selectedItem, setSelectedItem] = useState(0)

  const scrollToContact = (sectionId) => {
    setTimeout(() => {
      const contactSection = document.getElementById(sectionId)
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="mb-12">
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
          <article className="w-[330px] h-[500px] flex flex-col justify-evenly items-center text-center p-3 rounded-lg shadow-lg bg-white/50 backdrop-blur-2xl relative">
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-14 inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <h3 className="avenir font-semibold text-2xl">
                Entrepreneur(euse)
                <br /> du bâtiment
              </h3>
              <span className="w-[100px] mt-2 h-1 bg-marron block" />
            </div>
            <div>
              <p className="avenir">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus magni explicabo voluptatibus fuga corporis
                repudiandae animi nostrum, reprehenderit quis nesciunt.
              </p>
            </div>
            <div
              onClick={() => scrollToContact("entrepreneur")}
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
          <article className="w-[330px] h-[500px] flex flex-col justify-evenly items-center text-center p-3 rounded-lg shadow-lg bg-white/50 backdrop-blur-2xl relative">
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-14 inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <h3 className="avenir font-semibold text-2xl">
                Architecte
                <br /> Décorateur(ice)
              </h3>
              <span className="w-[100px] mt-2 h-1 bg-marron block" />
            </div>

            <div>
              <p className="avenir">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus magni explicabo voluptatibus fuga corporis
                repudiandae animi nostrum, reprehenderit quis nesciunt.
              </p>
            </div>

            <div
              onClick={() => scrollToContact("architecte")}
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
          <article className="w-[330px] h-[500px] flex flex-col justify-evenly items-center text-center p-3 rounded-lg shadow-lg bg-white/50 backdrop-blur-2xl relative">
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-14 inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="flex justify-center flex-col items-center">
              <h3 className="avenir font-semibold text-2xl">
                Maître(esse)
                <br /> d’Oeuvre
              </h3>
              <span className="w-[100px] mt-2 h-1 bg-marron block" />
            </div>

            <div>
              <p className="avenir">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus magni explicabo voluptatibus fuga corporis
                repudiandae animi nostrum, reprehenderit quis nesciunt.
              </p>
            </div>

            <div
              onClick={() => scrollToContact("maitredouevre")}
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
        </div>
        <div>
          <div
            className="w-1/2 h-[85vh] bg-marron rounded-3xl mx-auto mt-20 relative flex justify-between py-16 px-14"
            id="entrepreneur"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-12 left-[45%] inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="w-1/2 px-2 flex flex-col gap-y-6 avenir">
              <h2 className="text-2xl font-semibold pt-4 ">
                Entrepreneur(euse) du Bâtiment
                <span className="w-[100px] mt-4 h-[5px] bg-[#af9a6a] block" />
              </h2>
              <p className="mt-4 text-xl">
                Tu es entrepreneur(euse) du bâtiment ? Tu prends ton travail à
                coeur ? Tu es accro à la finition millimétrée ? Alors oui, tu as
                toute ta place chez Renovation Man. Rejoins nous dès maintenant.
                On t’attend !
              </p>
              <div>
                <p className="mb-4 text-2xl font-semibold">
                  Tes supers pouvoirs ?
                </p>
                <div className="flex flex-col gap-y-2">
                  <p className="text-xl">• Tu es passionné</p>
                  <p className="text-xl">
                    • Tu as au moins 3 ans d’expérience dans le monde du
                    bâtiment
                  </p>
                  <p className="text-xl">
                    • Tu as les assurances décennales pour tous les corps
                    d’états que tu exerces
                  </p>
                  <p className="text-xl">• Tu as soif de chantiers !</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-marron flex justify-center">
              <div className="flex flex-col items-center gap-y-10">
                <ul
                  role="tablist"
                  className="flex items-center gap-x-3 text-xl avenir overflow-x-auto"
                >
                  {tabItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`py-2 border-b-2 ${
                        selectedItem === idx
                          ? "border-green-600 text-green-600"
                          : "border-white text-white"
                      }`}
                    >
                      <button
                        role="tab"
                        aria-selected={selectedItem === idx ? true : false}
                        aria-controls={`tabpanel-${idx + 1}`}
                        className="py-2.5 font-semibold px-4 rounded-lg duration-150 hover:text-white hover:bg-green-500 active:bg-green-600"
                        onClick={() => setSelectedItem(idx)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>

                {selectedItem === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="w-1/2 h-[85vh] bg-marron rounded-3xl mx-auto mt-20 relative flex justify-between py-16 px-14"
            id="architecte"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-12 left-[45%] inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="w-1/2 px-2 flex flex-col gap-y-6 avenir">
              <h2 className="text-2xl font-semibold pt-4 ">
                Architecte Décorateur(ice)
                <span className="w-[100px] mt-4 h-[5px] bg-[#af9a6a] block" />
              </h2>
              <p className="mt-4 text-xl">
                Tu es architecte et/ou décorateur(ice) ? Tu façonnes les
                intérieurs plus vite que ton ombre ? Tu sais donner du sens et
                faire vivre un intérieur comme personne ? Au top ! Nous avons
                besoin de professionels de ton calibre !
              </p>
              <div>
                <p className="mb-4 text-2xl font-semibold">
                  Tes supers pouvoirs ?
                </p>
                <div className="flex flex-col gap-y-2">
                  <p className="text-xl">• Tu es passionné</p>
                  <p className="text-xl">
                    • Tu as au moins 3 ans d’expérience dans le monde du
                    bâtiment
                  </p>
                  <p className="text-xl">
                    • Tu as les assurances décennales pour tous les corps
                    d’états que tu exerces
                  </p>
                  <p className="text-xl">• Tu as soif de chantiers !</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-marron flex justify-center">
              <div className="flex flex-col items-center gap-y-10">
                <ul
                  role="tablist"
                  className="flex items-center gap-x-3 text-xl avenir overflow-x-auto"
                >
                  {tabItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`py-2 border-b-2 ${
                        selectedItem === idx
                          ? "border-green-600 text-green-600"
                          : "border-white text-white"
                      }`}
                    >
                      <button
                        role="tab"
                        aria-selected={selectedItem === idx ? true : false}
                        aria-controls={`tabpanel-${idx + 1}`}
                        className="py-2.5 font-semibold px-4 rounded-lg duration-150 hover:text-white hover:bg-green-500 active:bg-green-600"
                        onClick={() => setSelectedItem(idx)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>

                {selectedItem === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="w-1/2 h-[85vh] bg-marron rounded-3xl mx-auto mt-20 relative flex justify-between py-16 px-14"
            id="maitredouevre"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-marron rounded-full p-5 flex items-center justify-center absolute -top-12 left-[45%] inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
              />
            </div>
            <div className="w-1/2 px-2 flex flex-col gap-y-6 avenir">
              <h2 className="text-2xl font-semibold pt-4 ">
                Maître(sse) d’Oeuvre
                <span className="w-[100px] mt-4 h-[5px] bg-[#af9a6a] block" />
              </h2>
              <p className="mt-4 text-xl">
                Tu es maître(esse) d’oeuvre ? Diriger un chantier et le mener à
                son terme dans le respect des contraintes coût, qualité, délais
                c’est ton quotidien ? Tu as à coeur la satisfaction client ?
                Toque donc à notre porte !
              </p>
              <div>
                <p className="mb-4 text-2xl font-semibold">
                  Tes supers pouvoirs ?
                </p>
                <div className="flex flex-col gap-y-2">
                  <p className="text-xl">• Tu es passionné</p>
                  <p className="text-xl">
                    • Tu as au moins 3 ans d’expérience dans le monde du
                    bâtiment
                  </p>
                  <p className="text-xl">
                    • Tu as les assurances décennales pour tous les corps
                    d’états que tu exerces
                  </p>
                  <p className="text-xl">• Tu as soif de chantiers !</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-marron flex justify-center">
              <div className="flex flex-col items-center gap-y-10">
                <ul
                  role="tablist"
                  className="flex items-center gap-x-3 text-xl avenir overflow-x-auto"
                >
                  {tabItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`py-2 border-b-2 ${
                        selectedItem === idx
                          ? "border-green-600 text-green-600"
                          : "border-white text-white"
                      }`}
                    >
                      <button
                        role="tab"
                        aria-selected={selectedItem === idx ? true : false}
                        aria-controls={`tabpanel-${idx + 1}`}
                        className="py-2.5 font-semibold px-4 rounded-lg duration-150 hover:text-white hover:bg-green-500 active:bg-green-600"
                        onClick={() => setSelectedItem(idx)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>

                {selectedItem === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Des projets super qualifiés
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-4 py-2 gap-y-4 bg-[#af9a6a] rounded-2xl">
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article className="border-b-2 border-marron py-2">
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                    <article>
                      <h3 className="font-semibold text-2xl avenir">
                        Tu respectes notre code d’honneur
                      </h3>
                      <p className="avenir px-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Molestiae, earum?
                      </p>
                    </article>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pro
