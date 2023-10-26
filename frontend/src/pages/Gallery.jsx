import React from "react"
import { useParams } from "react-router-dom"

const GalleryData = require("../services/gallery.json")

function Gallery() {
  const params = useParams()
  const { id } = params
  const galleryItem = GalleryData.find((item) => item.id === parseInt(id))

  return (
    <div className="flex flex-col justify-center items-center avenir">
      <div className="w-full">
        <img src={galleryItem.img} alt={galleryItem.title} className="w-1/3" />
      </div>
      <h2 className="text-4xl font-semibold">{galleryItem.title}</h2>
      <p>{galleryItem.description}</p>
      <div>
        {galleryItem.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Gallery
