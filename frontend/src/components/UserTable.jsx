import React, { useContext } from "react"
import UserContext from "../services/userContext"

function UserTable({
  name,
  city,
  email,
  tel,
  type,
  status,
  forms,
  modifyButton,
  deleteButton,
}) {
  const { connected } = useContext(UserContext)

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
          <td className="px-6 py-4">
            {status ? (
              <span className="px-2 py-1 bg-green-300 text-green-600 rounded-full">
                Confirmé
              </span>
            ) : (
              <span className="px-2 py-1 bg-red-200 text-red-600 rounded-full">
                En attente
              </span>
            )}
          </td>
          <td className="px-6 py-4">{forms}</td>
          <td className="px-6 py-4">
            <div className="flex gap-x-3">
              <button
                type="button"
                onClick={modifyButton}
                className="font-medium text-green-500  hover:underline"
              >
                Modifier
              </button>
              <button
                type="button"
                onClick={deleteButton}
                className="font-medium text-red-500  hover:underline"
              >
                Supprimer
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default UserTable
