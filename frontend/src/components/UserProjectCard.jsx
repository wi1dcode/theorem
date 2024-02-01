import React from "react"
import { Link } from "react-router-dom"
import LocationSvg from "../images/svg/LocationSvg"
import EuroSvg from "../images/svg/EuroSvg"
import ProductsSvg from "../images/svg/ProductsSvg"
import CalendarSvg from "../images/svg/CalendarSvg"
import ProjectUserSvg from "../images/svg/ProjectUserSvg"

function MiniCard({
  title,
  text,
  icon,
  iconContainerClassName = "",
  hasBottomBorder,
}) {
  return (
    <div
      className={`flex ${
        hasBottomBorder ? "pb-3 border-b border-gray-300" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <div className="text-left ml-2.5">
        <p className="text-xs text-gray-600">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default function UserProjectCard({
  id,
  name,
  renovation,
  date,
  budget,
  adresse,
  search,
  when,
}) {
  return (
    <section>
      <Link
        to={`./projects/${id}`}
        className="w-96 mt-4 mb-2 bg-gray-200 text-stone-200 flex flex-col rounded-xl transition duration-300 transform hover:scale-105 cursor-pointer"
      >
        <div className="p-2">
          <div className="flex flex-col gap-2">
            <MiniCard
              title="Nom"
              text={name}
              icon={<ProjectUserSvg />}
              hasBottomBorder
            />
            <MiniCard
              title="Adresse"
              text={adresse}
              icon={<LocationSvg />}
              hasBottomBorder
            />
            <MiniCard
              title="But de recherche"
              text={search}
              icon={<ProductsSvg />}
              hasBottomBorder
            />
            <MiniCard
              title="Budget"
              text={`${budget}`}
              icon={<EuroSvg />}
              hasBottomBorder
            />
            <MiniCard
              title="Date de demande / début du chantier"
              text={`${date} - ${when}`}
              icon={<CalendarSvg />}
            />
          </div>
        </div>
        <div className="bg-gray-300 rounded-b-lg py-2 font-semibold">
          {renovation}
        </div>
      </Link>
    </section>
  )
}
