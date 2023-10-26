import { useContext } from "react"
import UserContext from "../services/userContext"

function Pending({ email, tel, renovation, date }) {
  const { connected, token } = useContext(UserContext)

  return (
    <section>
      {connected && token ? (
        <div className="w-96 mb-2 bg-marron/30 text-stone-200 flex flex-col rounded-xl">
          <div className="p-2">
            <h2 className="font-medium text-center">Author: {email}</h2>
            <p className="mt-2 text-xs text-center font-normal opacity-75">
              Tel: {tel} <br />
              renovation: {renovation} <br />
              {/* Date: {date} <br /> */}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Pending
