import React, { useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

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
      <div className="flex flex-col items-center avenir">
        <h2 className="text-4xl font-semibold mt-14">{galleryItem.title}</h2>
        <div className="flex items-center gap-x-20 justify-center mt-16">
          <div className="flex w-[40%]">
            <img
              src={galleryItem.img}
              alt={galleryItem.title}
              className="rounded-xl "
            />
          </div>
          <div className="flex flex-col items-center text-3xl w-[40%] text-center">
            <p className="mb-6 font-semibold">{galleryItem.description}</p>
            <div className="flex ">
              {galleryItem.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-20 justify-center mt-16">
          <div className="flex flex-col items-center text-3xl w-[40%] text-center">
            <div className="flex px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
              {galleryItem.full_desc}
            </div>
          </div>
          <div className="flex w-[40%]">
            <img
              src={galleryItem.img}
              alt={galleryItem.title}
              className="rounded-xl "
            />
          </div>
        </div>
        <span className="inline-block h-1 w-1/2 rounded bg-marron mt-10"></span>

        <div className="mt-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold">Vous pourriez aussi aimer:</h2>
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
                <h3 className="text-xl mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
