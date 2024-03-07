import React, { useContext } from "react"
import UserContext from "../../services/userContext"

function Menu() {
  const { user } = useContext(UserContext)

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-2">
        Bonjour, {user?.profile?.firstname}
      </div>
      <div className="mt-6 text-xl w-[70%] mx-auto">
        {user?.isActivated ? (
          <span className="text-green-500">Votre profil est activé !</span>
        ) : (
          <span className="text-red-500 font-semibold">
            Veuillez activer votre profil en utilisant le lien que nous vous
            avons envoyé par e-mail pour débloquer plus de fonctionnalités.
          </span>
        )}
      </div>
      <p className="mt-6 w-[70%] mx-auto">
        Vous êtes un utilisateur professionnel !
      </p>
    </section>
  )
}

export default Menu
