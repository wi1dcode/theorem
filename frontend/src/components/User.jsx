import { useContext } from "react"
import UserContext from "../services/userContext"

export default function User({ name, date }) {
  const { connected, token } = useContext(UserContext)

  return (
    <section>
      {connected && token ? (
        <div className="w-96 bg-neutral-800 text-stone-200 flex flex-col rounded-xl">
          <div className="pb-0 pt-3">
            <h2 className="font-medium text-center">{name}</h2>
            <p className="mt-2 text-xs text-center font-normal opacity-75">
              {date}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
