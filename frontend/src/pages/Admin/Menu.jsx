import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../services/userContext"
function Menu() {
  const { user } = useContext(UserContext)

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-12">Bonjour, {user?.name}</div>
      <p className="mt-12 w-[70%] mx-auto">Vous êtes administrateur</p>
      <div>
        <p className="font-semibold text-2xl mt-2">
          Vous avez {user?.forms?.length || 0} projet:
        </p>
      </div>
      <Link to="./new-project">
        <button className="p-2 bg-green-500 rounded-lg mt-12 text-white font-semibold">
          Créer un nouveau projet
        </button>
      </Link>
    </section>
  )
}

export default Menu
