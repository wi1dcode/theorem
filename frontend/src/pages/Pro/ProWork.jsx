import React, { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

const gallery = [
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_904ef6943d914be396463a502919a1ae~mv2.jpg",
    tags: ["50000€ TTC", "60m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg",
    tags: ["60000€ TTC", "80m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_bf40f8e2e25a4ab6b21219995105f8af~mv2.jpg",
    tags: ["70000€ TTC", "90m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_c46542d7fb9f4b7ebbfbae8a66ae1897~mv2.jpg",
    tags: ["80000€ TTC", "100m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_59236db8a9e54647ac0f42c26efdb7b6~mv2.jpg",
    tags: ["90000€ TTC", "120m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://static.wixstatic.com/media/801f49_904ef6943d914be396463a502919a1ae~mv2.jpg",
    tags: ["100000€ TTC", "130m²", "Paris"],
  },
]

function ProWork() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section>
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
              <div
                className="w-[30%] max-md:w-[80%] overflow-hidden shadow-lg rounded-xl"
                key={index}
              >
                <img
                  className="w-full"
                  src={item.img}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProWork
