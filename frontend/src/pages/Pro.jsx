import React from "react"
import NavBar from "../components/NavBar"

function Pro() {
  return (
    <section>
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
            <div className="flex flex-col justify-center items-center gap-y-2 cursor-pointer">
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

            <div className="flex flex-col justify-center items-center gap-y-2 cursor-pointer">
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

            <div className="flex flex-col justify-center items-center gap-y-2 cursor-pointer">
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
        <div className="mt-32 w-full flex flex-col gap-y-32">
          <div className="h-[90vh] bg-marron w-[60%] max-md:w-full rounded-r-full max-md:rounded-lg relative">
            <div className="bg-marron rounded-full p-10 max-md:p-6 flex items-center justify-center absolute max-md:top-[-55px] max-md:right-[150px] top-[300px] right-[-100px] inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
                className="w-[150px] max-md:w-[70px]"
              />
            </div>
            Entrepreneur
          </div>
          <div className="flex flex-end justify-end">
            <div className="h-[90vh]  bg-marron w-[60%] max-md:w-full max-md:rounded-lg rounded-l-full relative">
              <div className="bg-marron rounded-full p-10 max-md:p-6 flex items-center justify-center absolute max-md:top-[-55px] max-md:left-[150px] top-[300px] left-[-100px] inside-shadow z-10">
                <img
                  alt="entrepreneur du bâtiment"
                  src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
                  className="w-[150px] max-md:w-[70px]"
                />
              </div>
              Architecte
            </div>
          </div>
          <div className="h-[90vh] bg-marron w-[60%] max-md:w-full rounded-r-full max-md:rounded-lg relative">
            <div className="bg-marron rounded-full p-10 max-md:p-6 flex items-center justify-center absolute max-md:top-[-55px] max-md:right-[150px] top-[300px] right-[-100px] inside-shadow">
              <img
                alt="entrepreneur du bâtiment"
                src="https://www.datocms-assets.com/7890/1578643148-worker.svg"
                className="w-[150px] max-md:w-[70px]"
              />
            </div>
            Maitre Deuvre
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pro
