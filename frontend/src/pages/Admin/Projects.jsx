import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { getProjectsByStatus } from "../../api/client"
import { format } from "date-fns"
import Pending from "../../components/Pending"

function Projects() {
  const { token } = useContext(UserContext)
  const [projects, setProjects] = useState(null)
  const [currentStatus, setCurrentStatus] = useState("PENDING")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredProjects = await getProjectsByStatus(currentStatus)
        setProjects(filteredProjects)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [token, currentStatus])

  const handleFilterByStatus = async (status) => {
    try {
      setCurrentStatus(status)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-x-4 mb-4">
        <button
          className="bg-yellow-400 p-2 rounded-lg"
          onClick={() => handleFilterByStatus("PENDING")}
        >
          En attente
        </button>
        <button
          className="bg-green-400 p-2 rounded-lg"
          onClick={() => handleFilterByStatus("APPROVED")}
        >
          Approuvé
        </button>
        <button
          className="bg-red-400 p-2 rounded-lg"
          onClick={() => handleFilterByStatus("REFUSED")}
        >
          Rejeté
        </button>

        <button
          className="bg-blue-400 p-2 rounded-lg"
          onClick={() => handleFilterByStatus("PROGRESS")}
        >
          En cours
        </button>
      </div>
      <div className="flex gap-5">
        {projects?.length ? (
          projects.map((project) => (
            <Pending
              key={project._id}
              id={project._id}
              email={project.email || "none"}
              tel={project.tel}
              renovation={project.renovation}
              status={project.status}
              date={format(new Date(project.createdAt), "dd/MM/yyyy")}
            />
          ))
        ) : (
          <p className="mx-auto">Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  )
}

export default Projects
