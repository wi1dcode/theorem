import React, { useContext } from "react"
import UserContext from "../../services/userContext"
function Menu() {
  const { user } = useContext(UserContext)

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-12">Bonjour, {user?.name}</div>
      <p className="mt-12 mx-auto">
        Peut-être qu'il y aura des statistiques ou d'autres éléments ici plus
        tard
      </p>
    </section>
  )
}

export default Menu
