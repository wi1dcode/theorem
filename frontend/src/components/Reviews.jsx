import LQuoteSvg from "../images/svg/LQuoteSvg"
import RQuoteSvg from "../images/svg/RQuoteSvg"
import FiveStarsSvg from "../images/svg/FiveStarsSvg"

export default function Reviews() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Lucie P.",
      title: "Paris, France",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Xavier R.",
      title: "Paris, France",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ]

  return (
    <section className="relative py-12">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-xl sm:text-center md:mx-auto">
          <LQuoteSvg className="absolute -bottom-4 left-4 w-6 h-6" />
          <h3 className="text-gray-800 text-3xl max-md:text-xl max-md:text-center roboto-bold sm:text-4xl avenir relative z-10">
            Ils nous ont fait confiance
          </h3>
          <RQuoteSvg className="absolute -top-4 right-4 w-6 h-6" />
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-2 mt-12">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <FiveStarsSvg className="w-24 h-6 mb-4" />
              <blockquote className="text-gray-800 text-lg font-semibold py-1 mb-6">
                {item.quote}
              </blockquote>
              <div className="flex items-center gap-x-4">
                <img
                  src={item.avatar}
                  alt="user_avatar"
                  className="w-16 h-16 rounded-full border-2 border-marron"
                />
                <div className="text-left">
                  <span className="block text-gray-800 font-semibold">
                    {item.name}
                  </span>
                  <span className="block text-marron text-sm mt-0.5">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
