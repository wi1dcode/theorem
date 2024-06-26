import React, { useState, useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Modal from "react-modal"
import AOS from "aos"
import "aos/dist/aos.css"

const GalleryData = require("../services/gallery.json")

Modal.setAppElement("#root") // Set your app root element for accessibility

function Gallery() {
  const { pathname } = useLocation()
  const params = useParams()
  const { id } = params
  const galleryItem = GalleryData.find((item) => item.id === parseInt(id))
  const similarWorks = GalleryData.filter(
    (item) =>
      galleryItem.suggestion.includes(item.id) && item.id !== galleryItem.id
  )

  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    window.scrollTo(0, 0)
  }, [pathname])

  const openModal = (index) => {
    setActiveIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItem.images.length)
  }

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryItem.images.length) % galleryItem.images.length
    )
  }

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
                diligence.
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
          <div className="relative flex w-[40%] max-md:w-[90%] h-[50vh] overflow-hidden">
            <img
              src={galleryItem.images[activeIndex]}
              alt={`${galleryItem.title} ${activeIndex + 1}`}
              className="object-cover min-w-[800px] h-full cursor-pointer rounded-l-3xl rounded-br-3xl transition-opacity duration-500 ease-in-out"
              style={{ opacity: 1 }}
              onClick={() => openModal(activeIndex)}
              key={activeIndex} // Key to force re-render on change
            />
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-2xl"
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-2xl"
            >
              &#10095;
            </button>
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
                  <div className="relative w-64 h-48 overflow-hidden rounded-xl shadow">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                </Link>
                <h3 className="text-xl roboto-medium mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* Fullscreen Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="fixed mt-10 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button
          onClick={closeModal}
          className="absolute top-8 right-5 text-white text-5xl z-50"
        >
          &times;
        </button>
        <div className="w-full h-full flex justify-center items-center relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-3xl"
          >
            &#10094;
          </button>
          <img
            src={galleryItem.images[activeIndex]}
            alt={`${galleryItem.title} ${activeIndex + 1}`}
            className="object-cover w-auto h-auto max-h-full max-w-full"
          />
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-3xl"
          >
            &#10095;
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Gallery
