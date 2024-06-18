export default function LittleCard({
  title,
  description,
  image,
  index,
  scrollToContact,
}) {
  return (
    <div className="flex flex-col text-center overflow-hidden transition-shadow duration-200 bg-white group hover:shadow-xl">
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${
            index === 0 ? "rounded-tl-xl" : ""
          } ${index === 3 ? "rounded-tr-xl" : ""}`}
        />
      </div>
      <div className="p-5">
        <p className="mb-2 font-bold">{title}</p>
        <p className="text-sm leading-5 text-gray-900">{description}</p>
        {index === 3 && (
          <button
            className="mt-4 py-2 px-4 bg-marron text-white rounded hover:bg-marron/80 transition duration-300 active:bg-marron/90"
            onClick={scrollToContact}
          >
            Des questions ?
          </button>
        )}
      </div>
    </div>
  )
}
