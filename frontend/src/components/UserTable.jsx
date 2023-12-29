import React, { useContext } from "react"
import UserContext from "../services/userContext"

function UserTable({ name, city, email, tel, type, status, forms }) {
  const { connected } = useContext(UserContext)

  const checkStatus = (status) => {
    switch (status) {
      case "APPROVED":
        return (
          <span className="px-2 py-1 bg-green-300 text-green-600 rounded-full">
            Confirmé
          </span>
        )
      case "PENDING":
        return (
          <span className="px-2 py-1 bg-red-200 text-red-600 rounded-full">
            En attente
          </span>
        )

      default:
        return (
          <span className="px-2 py-1 bg-red-200 text-red-600 rounded-full">
            Error
          </span>
        )
    }
  }

  return (
    <>
      {connected && (
        <tr className="bg-nuage/50 border-b border-marron/30">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            {name}
          </th>
          <td className="px-6 py-4">{city}</td>
          <td className="px-6 py-4">{email}</td>
          <td className="px-6 py-4">{tel}</td>
          <td className="px-6 py-4">{type}</td>
          <td className="px-6 py-4">{checkStatus(status)}</td>
          <td className="px-6 py-4">{forms}</td>
          <td className="px-6 py-4">
            <p className="font-medium text-blue-500  hover:underline">
              Modifier
            </p>
          </td>
        </tr>
      )}
    </>
  )
}

export default UserTable
