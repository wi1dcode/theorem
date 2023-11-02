import React, { useEffect } from "react"
import NavBar from "../components/NavBar"

import AOS from "aos"
import "aos/dist/aos.css"
import { Link, useLocation } from "react-router-dom"

const gallery = require("../services/gallery.json")

function Realisations() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    AOS.init()
  }, [pathname])
  return (
    <section>
      <NavBar />
      <div className="mb-16">
        <h2 className="text-center text-4xl avenir mt-6 mb-4">
          Nos réalisations
        </h2>
        <div
          className="flex flex-wrap justify-center items-center gap-5 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {gallery.map((item, index) => {
            return (
              <Link
                to={`/realisations/${item.id}`}
                key={item.id}
                className="w-[30%] max-md:w-[80%] overflow-hidden shadow-lg rounded-xl transition duration-300 transform hover:scale-105"
              >
                <div>
                  <img
                    className="w-full h-[250px] object-cover"
                    src={item.img}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="px-6 pb-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Realisations
