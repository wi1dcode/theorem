import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Work() {
  return (
    <section>
      <h2 className="text-center text-2xl pb-3 pt-2 avenir">Nos réalisations</h2>
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
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_904ef6943d914be396463a502919a1ae~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_bf40f8e2e25a4ab6b21219995105f8af~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_c46542d7fb9f4b7ebbfbae8a66ae1897~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_c46542d7fb9f4b7ebbfbae8a66ae1897~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_c46542d7fb9f4b7ebbfbae8a66ae1897~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg"
            alt="123"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Work
