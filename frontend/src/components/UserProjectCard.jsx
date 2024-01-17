import React from "react"
import { Link } from "react-router-dom"

export default function UserProjectCard({
  id,
  renovation,
  tel,
  email,
  date,
  status,
  surface,
  budget,
  adresse,
}) {
  return (
    <section>
      <Link
        to={`./${id}`}
        className="w-96 mb-2 bg-marron/30 text-stone-200 flex flex-col rounded-xl transition duration-300 transform hover:scale-105 cursor-pointer"
      >
        <div className="p-2">
          <h2 className="font-medium text-center border-b border-anthracite/50 pb-2">
            {renovation}
          </h2>
          <p className="mt-2 text-xs text-center font-normal opacity-75">
            Tel: {tel} <br />
            Author: {email}
            <br />
            Date: {date} <br />
            Status: {status}
            <br />
            Surface: {surface}
            <br />
            Budget: {budget}
            <br />
            Adresse: {adresse}
            <br />
          </p>
        </div>
      </Link>
    </section>
  )
}
