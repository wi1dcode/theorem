import React, { useContext } from "react"
import UserContext from "../services/userContext"
import EyeSvg from "../images/svg/EyeSvg"
import EditSvg from "../images/svg/EditSvg"
import DeleteSvg from "../images/svg/DeleteSvg"
import { Link } from "react-router-dom"

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
  username,
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
              <Link
                to={`./${username}`}
                onClick={null}
                className="text-green-500 font-semibold hover:underline"
              >
                <EyeSvg />
              </Link>
              <button
                type="button"
                onClick={modifyButton}
                className="text-green-500 font-semibold hover:underline"
              >
                <EditSvg />
              </button>
              <button
                type="button"
                onClick={deleteButton}
                className="text-red-500 font-semibold hover:underline"
              >
                <DeleteSvg />
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default UserTable
