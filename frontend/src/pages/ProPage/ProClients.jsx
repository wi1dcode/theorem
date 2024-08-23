import React, { useEffect, useState } from "react"
import LinkArrow from "../../images/svg/LinkArrow"

const data = [
  {
    id: 1,
    name: "Groupama",
    image:
      "https://static.wixstatic.com/media/801f49_49edffe43ca0443d9061869cfaa8819e~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Groupama-logo-réduit.jpg",
  },
  {
    id: 2,
    name: "Total Energies",
    image:
      "https://static.wixstatic.com/media/801f49_5a832f8417c64815b0622593b692ef38~mv2.png/v1/fill/w_231,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logos-fournisseur-total-energies.png",
  },
  {
    id: 3,
    name: "Basic Fit",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Basic-Fit_logo.png",
  },
  {
    id: 4,
    name: "Eiffage Construction",
    image:
      "https://next-bim.com/wp-content/uploads/2022/07/Sans_titre__40_-removebg-preview-2.png",
  },
  {
    id: 5,
    name: "Agema",
    image: "https://www.agema.fr/wp-content/uploads/2022/10/Construction.png",
  },
  {
    id: 6,
    name: "Dassault Systèmes",
    image:
      "https://download.logo.wine/logo/Dassault_Systèmes/Dassault_Systèmes-Logo.wine.png",
  },
  {
    id: 7,
    name: "Auchan",
    image:
      "https://upload.wikimedia.org/wikipedia/fr/archive/9/90/20120504132214%21Logo_Auchan_%281983-2015%29.svg",
  },
  {
    id: 8,
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1024px-Paris_Saint-Germain_Logo.svg.png",
  },
  {
    id: 9,
    name: "Carita Paris",
    image: "https://yf.agency/wp-content/uploads/2017/09/CaritaThumb.png",
  },
  {
    id: 10,
    name: "Bouygues Construction",
    image:
      "https://entreprises-biodiversite.fr/wp-content/uploads/2019/10/Logo-Bouygues-Construction.jpg",
  },
  {
    id: 11,
    name: "Vinci Facilities",
    image:
      "https://getlogo.net/wp-content/uploads/2020/07/vinci-facilities-logo-vector.png",
  },
  {
    id: 12,
    name: "Pivot Panda",
    image:
      "https://www.recycle-avenir.com/Files/Image/references/logo_pivot_panda.png",
  },
  {
    id: 13,
    name: "Groupe Balas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij2ft5kFKNw02XWyrId7AdYCwayNZrf4_uA&s",
  },
  {
    id: 14,
    name: "Département Hauts-de-Seine",
    image:
      "https://static.wixstatic.com/media/801f49_f514148cf5344362b7b87a34bc9a8659~mv2.png/v1/fill/w_154,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20110808225115!Logo_92_Hauts-de-Seine_2011.png",
  },
  {
    id: 15,
    name: "Athem",
    image:
      "https://static.wixstatic.com/media/801f49_6832570d43524d9f8663e65f1ff51138~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Athem-Logo-RVB_01.jpg",
  },
  {
    id: 16,
    name: "Advenis",
    image:
      "https://static.wixstatic.com/media/801f49_a882d6a3798d460dbda8c3ff6eab31ea~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Advenis.jpg",
  },
  {
    id: 17,
    name: "Covivio",
    image:
      "https://static.wixstatic.com/media/801f49_7323dc1d46db4012ae64e201b7cd324b~mv2.webp",
  },
]

function ProClients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [clientsPerPage, setClientsPerPage] = useState(6)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setClientsPerPage(4)
      } else {
        setClientsPerPage(6)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(data.length / clientsPerPage)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    )
  }

  const currentClients = data.slice(
    currentIndex * clientsPerPage,
    currentIndex * clientsPerPage + clientsPerPage
  )

  return (
    <div className="pb-24">
      <h2 className="soleil-book text-4xl text-center mt-8 max-md:p-2">
        Ils nous font confiance
      </h2>
      <div className="flex justify-center items-center mt-10">
        <button onClick={handlePrev} className="text-gray-500 p-2 mr-4">
          <LinkArrow className="h-[50px] w-[50px]" right fill="gray" />
        </button>
        <div className="w-[80%] flex items-center justify-center flex-wrap md:gap-4">
          {currentClients.map((client) => (
            <div
              key={client.id}
              className="flex items-center md:border-2 max-md:border p-3 w-[30%] max-md:w-1/2 h-[150px]"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="text-gray-500 p-2 ml-4">
          <LinkArrow
            className="h-[50px] w-[50px]"
            style={{ transform: "rotate(180deg)" }}
            fill="gray"
          />
        </button>
      </div>
    </div>
  )
}

export default ProClients
