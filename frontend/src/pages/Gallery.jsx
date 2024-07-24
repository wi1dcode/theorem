import React, { useState, useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Modal from "react-modal"
import AOS from "aos"
import "aos/dist/aos.css"

// Rapee
import RapeeMain from "../images/projects/rapee/main_rapee.jpg"
import RapeeCordiste from "../images/projects/rapee/rapee_cordiste.jpg"
import RapeeCordisteTwo from "../images/projects/rapee/rapee_cordiste_2.jpg"
import RapeeCordisteThree from "../images/projects/rapee/rapee_cordiste_3.jpg"
import RapeeVue from "../images/projects/rapee/rapee_vue.jpg"
import RapeeVueTwo from "../images/projects/rapee/rapee_vue_2.jpg"
import RapeeVueThree from "../images/projects/rapee/rapee_vue_3.jpg"
// Fabourg
import FabourgOne from "../images/projects/fabourg/fabourg_one.jpg"
import FabourgTwo from "../images/projects/fabourg/fabourg_two.jpg"
import FabourgThree from "../images/projects/fabourg/fabourg_three.jpg"
import FabourgFour from "../images/projects/fabourg/fabourg_four.jpg"
// Jaures
import JauresMain from "../images/projects/jaures/jaures_main.jpg"
// Ophelie
import OphelieChambreTwo from "../images/projects/ophelie/ophelie_chambre_2.jpg"
import OphelieChambre from "../images/projects/ophelie/ophelie_chambre.jpg"
import OphelieCuisine from "../images/projects/ophelie/ophelie_cuisine.jpg"
import OphelieSalonTwo from "../images/projects/ophelie/ophelie_salon_2.jpg"
import OphelieSalonThree from "../images/projects/ophelie/ophelie_salon_3.jpg"
import OphelieSalon from "../images/projects/ophelie/ophelie_salon.jpg"
import OphelieSdbTwo from "../images/projects/ophelie/ophelie_sdb_2.jpg"
import OphelieSdb from "../images/projects/ophelie/ophelie_sdb.jpg"
import OphelieWc from "../images/projects/ophelie/ophelie_wc.jpg"
// Coming soon
import ComingSoon from "../images/projects/coming_soon.jpg"

const galleryData = require("../services/gallery.json")

const imageMap = {
  "main_rapee.jpg": RapeeMain,
  "rapee_cordiste.jpg": RapeeCordiste,
  "rapee_cordiste_2.jpg": RapeeCordisteTwo,
  "rapee_cordiste_3.jpg": RapeeCordisteThree,
  "rapee_vue.jpg": RapeeVue,
  "rapee_vue_2.jpg": RapeeVueTwo,
  "rapee_vue_3.jpg": RapeeVueThree,
  "fabourg_one.jpg": FabourgOne,
  "fabourg_two.jpg": FabourgTwo,
  "fabourg_three.jpg": FabourgThree,
  "fabourg_four.jpg": FabourgFour,
  "jaures_main.jpg": JauresMain,
  "ophelie_chambre_2.jpg": OphelieChambreTwo,
  "ophelie_chambre.jpg": OphelieChambre,
  "ophelie_cuisine.jpg": OphelieCuisine,
  "ophelie_salon_2.jpg": OphelieSalonTwo,
  "ophelie_salon_3.jpg": OphelieSalonThree,
  "ophelie_salon.jpg": OphelieSalon,
  "ophelie_sdb_2.jpg": OphelieSdbTwo,
  "ophelie_sdb.jpg": OphelieSdb,
  "ophelie_wc.jpg": OphelieWc,
  "coming_soon.jpg": ComingSoon,
}

Modal.setAppElement("#root")

function Gallery() {
  const { pathname } = useLocation()
  const params = useParams()
  const { id } = params
  const galleryItem = galleryData.find((item) => item.id === parseInt(id))
  const similarWorks = galleryData.filter(
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
      <div className="flex flex-col items-center soleil">
        <div className="flex items-center gap-x-20 justify-center md:mt-16 max-md:flex-col max-md:w-full py-6">
          <div className="flex flex-col items-center text-3xl w-[40%] max-md:w-full max-md:mt-4 text-center gap-y-6">
            <h2 className="text-4xl max-md:text-2xl soleil-bold">
              {galleryItem.title}
            </h2>

            <div className="flex flex-col items-center">
              <p className="mb-6 text-lg max-md:text-sm">
                {galleryItem.description}
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
              className="px-6 py-2 text-lg max-md:mb-4 soleil-medium bg-vert_principal text-white rounded hover:bg-vert_principal/80 transition duration-300"
            >
              Commencer mon projet
            </Link>
          </div>
          <div className="relative flex w-[40%] max-md:w-[90%] h-[50vh] overflow-hidden">
            <img
              src={imageMap[galleryItem.images[activeIndex].src]}
              alt={`${galleryItem.title} ${activeIndex + 1}`}
              className="object-cover md:min-w-[800px] min-w-full h-full cursor-pointer rounded-l-3xl rounded-br-3xl transition-opacity duration-500 ease-in-out"
              style={{ opacity: 1 }}
              onClick={() => openModal(activeIndex)}
              key={activeIndex}
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
            <h3 className="soleil-book mb-2 text-xl">
              Voici l'ensemble des travaux réalisés :
            </h3>
            <p className="w-[70%] max-md:w-[90%] text-lg">
              {galleryItem.full_desc}
            </p>

            {galleryItem.id === 8 && (
              <Link
                to="/about"
                className="inline-block mt-4 px-6 py-3 bg-vert_light text-white font-semibold rounded hover:bg-vert_principal/80 transition duration-300"
              >
                A propos
              </Link>
            )}
          </div>
          <div className="flex items-start gap-x-20 justify-center mt-10 max-md:flex-col pt-4 pb-8 shadow-lg rounded-lg max-md:px-6">
            <div className="flex flex-col w-[40%] max-md:w-full max-md:mb-4 h-[50vh]">
              <img
                src={imageMap[galleryItem.img_two]}
                alt={galleryItem.title}
                className="rounded-l-3xl rounded-br-3xl object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between items-start w-[40%] max-md:w-full max-md:mt-4">
              <img
                src={imageMap[galleryItem.img_three]}
                alt={galleryItem.title}
                className="rounded-r-3xl rounded-bl-3xl object-cover w-full h-[50vh] mb-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center items-center mb-8">
          <h2 className="text-3xl font-semibold">Nos autres projets :</h2>
          <div className="flex flex-wrap justify-center mt-4 text-center">
            {similarWorks.map((item) => (
              <div
                key={item.id}
                className="m-4 transition duration-300 transform hover:scale-105"
              >
                <Link to={`/realisations/${item.id}`}>
                  <div className="relative w-64 h-48 overflow-hidden rounded-xl shadow">
                    <img
                      src={imageMap[item.images[0].src]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                </Link>
                <h3 className="text-xl soleil-medium mt-2">{item.title}</h3>
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
            src={imageMap[galleryItem.images[activeIndex].src]}
            alt={`${galleryItem.title} ${activeIndex + 1}`}
            className="object-cover w-auto h-auto max-h-full max-w-full"
          />
          <p className="text-white absolute bottom-5">
            {galleryItem.images[activeIndex].credit}
          </p>
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
