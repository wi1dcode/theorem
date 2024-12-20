import React from "react"

export default function Tabs({ currentStatus, onStatusChange }) {
  const tabTitles = [
    "PENDING",
    "ANALYSE",
    "APPROVED",
    "REFUSED",
    "PROGRESS",
    "PAYMENT",
    "FINISH",
  ]
  const tabTexts = [
    "En attente",
    "En étude",
    "Accepté",
    "Rejeté",
    "En cours",
    "En attente de paiement",
    "Terminé",
  ]

  return (
    <>
      <div className="sm:hidden w-full">
        <label htmlFor="tabs" className="sr-only">
          Selectionner projet
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-vert_principal block w-full p-2.5"
          value={currentStatus}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          {tabTitles.map((title, index) => (
            <option key={title} value={title}>
              {tabTexts[index]}
            </option>
          ))}
        </select>
      </div>
      <ul className="hidden text-sm font-semibold text-center text-gray-500 shadow sm:flex w-full h-full">
        {tabTitles.map((title, index) => (
          <li key={title} className="w-full h-full">
            <button
              type="button"
              onClick={() => onStatusChange(title)}
              className={`inline-block w-full h-full p-2 py-4 ${
                currentStatus === title
                  ? "text-gray-900 bg-gray-200"
                  : "bg-white hover:text-gray-700 hover:bg-gray-50"
              } ${
                index === tabTitles.length - 1 ? "" : "border-r border-gray-300"
              }`}
            >
              {tabTexts[index]}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
