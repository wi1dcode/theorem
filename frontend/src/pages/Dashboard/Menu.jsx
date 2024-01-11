import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../services/userContext"

function Menu() {
  const { user } = useContext(UserContext)

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "en attente de vérification par l'administrateur"
      case "REFUSED":
        return "refusé, vous pouvez soumettre un nouveau projet"
      case "APPROVED":
        return "approuvé, attendez plus d'informations"
      case "PROGRESS":
        return "en cours, le travail avance"
      case "FINISH":
        return "terminé, félicitations et merci de nous avoir fait confiance"
      default:
        return "inconnue"
    }
  }

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-12">Bonjour, {user?.name}</div>
      <p className="mt-12 w-[70%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque
        dolorem.
      </p>
      <div>
        <p className="font-semibold text-2xl mt-2">
          Vous avez {user?.forms?.length || 0} projet:
        </p>
        {user?.forms?.length ? (
          user.forms.map((project) => (
            <div key={project._id} className="mb-4">
              <p className="font-semibold my-2">
                Votre projet "{project.renovation}" est actuellement{" "}
                {getStatusText(project.status)}.
              </p>
              <p>Informations sur votre projet:</p>
              <ul className="list-disc list-inside">
                <li>Type de rénovation: {project.renovation}</li>
                <li>Surface: {project.surface} m²</li>
                <li>Budget: {project.budget} €</li>
                <li>Adresse: {project.adresse}</li>
              </ul>
            </div>
          ))
        ) : (
          <p>Aucun projet</p>
        )}
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
