import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
    name: "Athem",
    image:
      "https://static.wixstatic.com/media/801f49_6832570d43524d9f8663e65f1ff51138~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Athem-Logo-RVB_01.jpg",
  },
  {
    id: 15,
    name: "Advenis",
    image:
      "https://static.wixstatic.com/media/801f49_a882d6a3798d460dbda8c3ff6eab31ea~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Advenis.jpg",
  },
  {
    id: 16,
    name: "Covivio",
    image:
      "https://static.wixstatic.com/media/801f49_7323dc1d46db4012ae64e201b7cd324b~mv2.webp",
  },
]

function ProClients() {
  return (
    <div className="pb-24">
      <h2 className="soleil-book text-4xl text-center mt-8 max-md:p-2">
        Ils nous font confiance
      </h2>
      <div className="flex justify-center items-center mt-10 w-full">
        <div className="w-full max-w-screen-lg">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper swiper-custom-padding"
          >
            {data.map(
              (_, i) =>
                i % 6 === 0 && (
                  <SwiperSlide key={i}>
                    <div className="p-14">
                      <div className="grid grid-cols-3 gap-6">
                        {data.slice(i, i + 3).map((client) => (
                          <div
                            key={client.id}
                            className="flex items-center justify-center border-2 p-3 h-[150px] max-w-full"
                          >
                            <img
                              src={client.image}
                              alt={client.name}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-6 mt-4">
                        {data.slice(i + 3, i + 6).map((client) => (
                          <div
                            key={client.id}
                            className="flex items-center justify-center border-2 p-3 h-[150px] max-w-full"
                          >
                            <img
                              src={client.image}
                              alt={client.name}
                              className="object-contain max-w-full max-h-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProClients
