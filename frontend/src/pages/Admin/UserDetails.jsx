import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserContext from "../../services/userContext"
import { getUserByUsername } from "../../api/users"
import Loading from "../../components/Loading"
import { format } from "date-fns"
import Pending from "../../components/Pending"

function UserDetails() {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const { connected } = useContext(UserContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async (username) => {
      try {
        const user = await getUserByUsername(username)
        setUser(user)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchUser(username)
  }, [username, connected])

  if (loading) return <Loading />

  const details = [
    {
      label: "Email address",
      value: (
        <>
          {user.email}
          <span
            className={`${
              user.isActivated ? "bg-green-300" : "bg-red-300"
            } text-white px-2 rounded-full text-sm ml-3`}
          >
            {user.isActivated ? "Confirmé" : "Non confirmé"}
          </span>
        </>
      ),
    },
    { label: "Ville", value: user.city },
    { label: "Numero de telephone", value: user.tel },
    { label: "Type", value: user.type.toLowerCase() },
    { label: "Projets", value: user.forms?.length },
    { label: "Username", value: user.username },
    {
      label: "Date de creation",
      value: format(new Date(user.createdAt), "dd/MM/yyyy"),
    },
  ]

  return (
    <div className="w-full max-md:flex-col flex md:justify-between gap-6">
      <dl className="max-w-md w-full text-gray-900 divide-y divide-gray-200">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 md:text-lg">{detail.label}</dt>
            <dd className="text-lg font-semibold">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex justify-center w-full gap-3 flex-wrap">
        {user.forms?.length ? (
          user.forms.map((project) => (
            <div className="flex gap-4 flex-wrap justify-center">
              <Pending
                key={project._id}
                link={`../projects/${project._id}`}
                email={project.email || "none"}
                tel={project.tel}
                renovation={project.renovation}
                budget={project.budget}
                adresse={project.adresse}
                date={format(new Date(project.createdAt), "dd/MM/yyyy")}
                when={format(new Date(project.when), "dd/MM/yyyy")}
              />
            </div>
          ))
        ) : (
          <p className="mx-auto text-xl font-semibold">Aucun projets trouvé</p>
        )}
      </div>
    </div>
  )
}

export default UserDetails
