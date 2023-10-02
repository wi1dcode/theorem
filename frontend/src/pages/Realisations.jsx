import React from "react"
import NavBar from "../components/NavBar"

const gallery = [
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    tags: ["50000€ TTC", "60m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    tags: ["60000€ TTC", "80m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    tags: ["70000€ TTC", "90m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    tags: ["80000€ TTC", "100m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    tags: ["90000€ TTC", "120m²", "Paris"],
  },
  {
    title: "Titre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quaerat!",
    img: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    tags: ["100000€ TTC", "130m²", "Paris"],
  },
]

function Realisations() {
  return (
    <section>
      <NavBar />
      <div>
        <h2 className="text-center text-4xl avenir mt-6 mb-4">
          Nos réalisations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
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

export default Realisations
