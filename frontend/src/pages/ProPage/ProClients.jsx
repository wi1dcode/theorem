import React from "react"

const data = [
  {
    name: "client1",
    image:
      "https://static.wixstatic.com/media/801f49_49edffe43ca0443d9061869cfaa8819e~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Groupama-logo-réduit.jpg",
  },
  {
    name: "client2",
    image:
      "https://static.wixstatic.com/media/801f49_7323dc1d46db4012ae64e201b7cd324b~mv2.webp",
  },
  {
    name: "client3",
    image:
      "https://static.wixstatic.com/media/801f49_f514148cf5344362b7b87a34bc9a8659~mv2.png/v1/fill/w_154,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20110808225115!Logo_92_Hauts-de-Seine_2011.png",
  },
  {
    name: "client4",
    image:
      "https://static.wixstatic.com/media/801f49_6832570d43524d9f8663e65f1ff51138~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Athem-Logo-RVB_01.jpg",
  },
  {
    name: "client5",
    image:
      "https://static.wixstatic.com/media/801f49_a882d6a3798d460dbda8c3ff6eab31ea~mv2.jpg/v1/fill/w_170,h_170,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Advenis.jpg",
  },
  {
    name: "client6",
    image:
      "https://static.wixstatic.com/media/801f49_5a832f8417c64815b0622593b692ef38~mv2.png/v1/fill/w_231,h_201,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logos-fournisseur-total-energies.png",
  },
]

function ProClients() {
  return (
    <div className="shadow-lg pb-24">
      <h2 className="roboto-bold text-4xl text-center mt-8">
        Ils nous font confiance
      </h2>
      <div className="w-[80%] mx-auto flex items-center justify-center flex-wrap gap-4 mt-10">
        {data.map((clients) => {
          return (
            <div
              key={clients.name}
              className="flex items-center border shadow-md p-3"
            >
              <img
                src={clients.image}
                alt="client"
                className="w-[150px] h-[150px]"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProClients
