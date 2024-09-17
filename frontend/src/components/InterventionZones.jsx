import React from "react"
import ContactPhone from "../images/svg/ContactPhone"
import NavigateSvg from "../images/svg/NavigateSvg"
import ReactGA from "react-ga4"

const interventionZones = [
  {
    name: "Paris (75)",
    svg: NavigateSvg,
  },
  {
    name: "Les Yvelines (78)",
    svg: NavigateSvg,
  },
  { name: "Hauts-de-Seine (92)", svg: NavigateSvg, hashtag: "#ladefense" },
  {
    name: "Seine-Saint-Denis (93)",
    svg: NavigateSvg,
  },
  { name: "Val-de-Marne (94)", svg: NavigateSvg, hashtag: "#pont" },
  { name: "Val-d'Oise (95)", svg: NavigateSvg, hashtag: "#lys" },
]

export default function InterventionZones() {
  const handleCallClick = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clic sur le lien 'Appeler'",
      label: "Zone d'intervention",
      value: 1,
    })
  }
  return (
    <section className="py-12 bg-vert_light text-white soleil">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Nos principales zones d’interventions
          </h2>
          <h3 className="text-md md:w-1/2 text-center mx-auto courier-prime-regular">
            Vous ne trouvez pas votre département ? Pas de panique ! <br />
            Appelez-nous pour en discuter :
            <a
              className="courier-prime-regular inline-block pl-2"
              href="tel:+33695753702"
              onClick={handleCallClick}
            >
              <span className="flex justify-center pt-2">
                <ContactPhone className="w-6 h-6" stroke="white" v2 />
              </span>
            </a>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {interventionZones.map((zone, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center"
            >
              <zone.svg PathStroke="white" />
              <h3 className="mt-4 text-xl font-semibold">{zone.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
