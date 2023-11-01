import React from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

const GalleryData = require("../services/gallery.json")

function Gallery() {
  const params = useParams()
  const { id } = params
  const galleryItem = GalleryData.find((item) => item.id === parseInt(id))

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
      </div>
    </div>
  )
}

export default Gallery
