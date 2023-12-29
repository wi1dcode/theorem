import { useContext } from "react"
import UserContext from "../services/userContext"
import { Link } from "react-router-dom"

function Pending({ id, email, tel, renovation, date, status }) {
  const { connected, token } = useContext(UserContext)

  return (
    <section>
      {connected && token ? (
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
            </p>
          </div>
        </Link>
      ) : null}
    </section>
  )
}

export default Pending
