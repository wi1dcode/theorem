export default function LittleCard({ children, title, description }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
      <div className="p-5">
        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-marron">
          {children}
        </div>
        <p className="mb-2 font-bold">{title}</p>
        <p className="text-sm leading-5 text-gray-900">{description}</p>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-white group-hover:scale-x-100" />
    </div>
  )
}
