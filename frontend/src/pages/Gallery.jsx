import React, { useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const GalleryData = require("../services/gallery.json")

function Gallery() {
  const { pathname } = useLocation()
  const params = useParams()
  const { id } = params
  const galleryItem = GalleryData.find((item) => item.id === parseInt(id))
  const similarWorks = GalleryData.filter(
    (item) =>
      galleryItem.suggestion.includes(item.id) && item.id !== galleryItem.id
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center roboto">
        <div className="flex items-center gap-x-20 justify-center mt-16 max-md:flex-col max-md:w-full py-6">
          <div className="flex flex-col items-center text-3xl w-[40%] max-md:w-full max-md:mt-4 text-center gap-y-6">
            <h2 className="text-4xl max-md:text-2xl roboto-bold">
              {galleryItem.title}
            </h2>

            <div className="flex flex-col items-center md:mt-10">
              <p className="mb-6 text-lg max-md:text-sm">
                <span className="roboto-medium block pb-2">
                  De la conception à la réalisation : notre expertise à votre
                  service
                </span>
                Nous vous accompagnons tout au long de votre projet, de la
                conception à la réalisation sur le chantier, avec expertise et
                diligence. Nous vous accompagnons tout au long de votre projet,
                de la conception.
              </p>

              <div className="flex">
                {galleryItem.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex shadow-[inset_0_4px_10.5px_rgba(0,0,0,0.14)] rounded-md px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/estimation"
              className="px-6 py-2 text-lg max-md:mb-4 roboto-medium bg-marron text-white rounded hover:bg-marron/80 transition duration-300"
            >
              Commencer mon projet
            </Link>
          </div>

          <div className="flex w-[40%] max-md:w-[90%] h-[50vh]">
            <img
              src={galleryItem.img}
              alt={galleryItem.title}
              className="rounded-l-3xl rounded-br-3xl object-cover w-full"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center text-center justify-center mt-10 px-1 flex-col py-4">
            <h3 className="roboto-medium mb-2 text-xl">
              De la conception à la réalisation : notre expertise à votre
              service
            </h3>
            <p className="w-[70%] max-md:w-[90%] text-lg">
              {galleryItem.full_desc}
            </p>
          </div>
          <div className="flex items-start gap-x-20 justify-center mt-10 max-md:flex-col pt-4 pb-8 shadow-lg rounded-lg max-md:px-6">
            <div className="flex flex-col w-[40%] max-md:w-full max-md:mb-4 h-[50vh]">
              <img
                src={galleryItem.img_two}
                alt={galleryItem.title}
                className="rounded-l-3xl rounded-br-3xl object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between items-start w-[40%] max-md:w-full max-md:mt-4">
              <img
                src={galleryItem.img_three}
                alt={galleryItem.title}
                className="rounded-r-3xl rounded-bl-3xl object-cover w-full h-[200px] mb-4"
              />
              <div className="flex flex-col justify-between h-[48%]">
                <h3 className="text-2xl font-bold mb-4">
                  De la conception à la réalisation : notre expertise à votre
                  service
                </h3>
                <p className="text-lg mb-6">{galleryItem.description}</p>
                <div>
                  <Link
                    to="/estimation"
                    className="px-6 py-2 text-lg roboto-medium bg-marron text-white rounded hover:bg-marron/80 transition duration-300"
                  >
                    Commencer mon projet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center mb-8">
          <h2 className="text-3xl font-semibold">Nos autres projets:</h2>
          <div className="flex flex-wrap justify-center mt-4 text-center">
            {similarWorks.map((item) => (
              <div
                key={item.id}
                className="m-4 transition duration-300 transform hover:scale-105"
              >
                <Link to={`/realisations/${item.id}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-xl w-64 h-48 object-cover cursor-pointer shadow "
                  />
                </Link>
                <h3 className="text-xl roboto-medium mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
