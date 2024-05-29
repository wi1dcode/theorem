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

// RESPONSIVE

function Work() {
  return (
    <section className="pb-10 shadow-md overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div>
          <h2 className="text-center max-md:text-2xl text-4xl pb-2 pt-5 roboto-bold z-10">
            Réalisations
            {/* <span className="text-2xl ml-2"> 🎬</span> */}
          </h2>
          <p className="roboto-regular mb-6">
            Retrouvez nos différents projets
          </p>
        </div>
        {/* <span className="bg-sable max-md:w-[280px] w-[350px] h-[15px] block absolute top-9" /> */}
      </div>
      <div className="w-full flex justify-center items-center gap-x-20 max-md:flex-col-reverse max-md:gap-y-6">
        <div className="w-full md:ml-2 max-md:w-[80%]">
          <Swiper
            autoplay={{
              delay: 2000,
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
            {/* <Swiper
            effect={"cards"}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper max-md:w-[80%]"
          > */}
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_904ef6943d914be396463a502919a1ae~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_bf40f8e2e25a4ab6b21219995105f8af~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_c46542d7fb9f4b7ebbfbae8a66ae1897~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_904ef6943d914be396463a502919a1ae~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg"
                alt="work"
                className=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
