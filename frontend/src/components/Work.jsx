import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules"
// import { EffectCoverflow, Pagination } from "swiper/modules"
// import { EffectCards } from "swiper/modules"
// import Iphones from "../images/iphones.png"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cards"
import "swiper/css/effect-coverflow"
import { Link } from "react-router-dom"

import RapeeMain from "../images/projects/rapee/main_rapee.jpg"
import FabourgOne from "../images/projects/fabourg/fabourg_one.jpg"
import JauresMain from "../images/projects/jaures/jaures_main.jpg"
import OphelieChambreTwo from "../images/projects/ophelie/ophelie_chambre_2.jpg"
import JuppiterProjet from "../images/projects/juppiter/projet-juppiter.jpg"

function Work() {
  const slides = [
    {
      id: 4,
      src: JuppiterProjet,
    },
    {
      id: 3,
      src: FabourgOne,
    },
    {
      id: 2,
      src: JauresMain,
    },
    {
      id: 5,
      src: OphelieChambreTwo,
    },
    {
      id: 1,
      src: RapeeMain,
    },
  ]

  return (
    <section className="pb-10 shadow-md overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="pb-4">
          <h2 className="text-center max-md:text-2xl text-4xl pt-4 soleil z-10">
            Nos projets
          </h2>
          <p className="mt-2 courier-prime-regular text-xl">
            Découvrir nos réalisations
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-x-20 max-md:flex-col-reverse max-md:gap-y-6">
        <div className="w-full md:ml-2 max-md:w-[80%]">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              250: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {/* <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"2"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          > */}
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Link to={`/realisations/${slide.id}`}>
                  <img
                    src={slide.src}
                    alt={`work-${slide.id}`}
                    className="object-cover w-full h-[300px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
