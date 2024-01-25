import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../services/userContext"
import UserProjectCard from "../../components/UserProjectCard"
import { format } from "date-fns"

function Menu() {
  const { user } = useContext(UserContext)

  // const getStatusText = (status) => {
  //   switch (status) {
  //     case "PENDING":
  //       return "en attente de vérification par l'administrateur"
  //     case "REFUSED":
  //       return "refusé, vous pouvez soumettre un nouveau projet"
  //     case "APPROVED":
  //       return "approuvé, attendez plus d'informations"
  //     case "PROGRESS":
  //       return "en cours"
  //     case "FINISH":
  //       return "terminé, félicitations et merci de nous avoir fait confiance"
  //     default:
  //       return "inconnue"
  //   }
  // }

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-2">Bonjour, {user?.name}</div>
      <p className="mt-12 w-[70%] mx-auto">
        Sélectionnez votre projet qui vous intéresse et cliquez dessus pour voir
        les informations plus détaillées et le gérer.
      </p>
      <div>
        <p className="font-semibold text-2xl mt-4">
          Vous avez {user?.forms?.length || 0} projet
        </p>
        {user?.forms?.length ? (
          user.forms.map((project) => (
            <div key={project._id} className="mb-4 flex flex-col items-center">
              {/* <p className="font-semibold my-2">
                Votre projet "{project.renovation}" est actuellement{" "}
                {getStatusText(project.status)}.
              </p> */}
              <p>Informations sur votre projet:</p>
              <UserProjectCard
                key={project._id}
                id={project._id}
                renovation={project.renovation}
                date={format(new Date(project.createdAt), "dd/MM/yyyy")}
                when={format(new Date(project.when), "dd/MM/yyyy")}
                products={project.products}
                status={project.status}
                surface={project.surface}
                budget={project.budget}
                adresse={project.adresse}
              />
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
