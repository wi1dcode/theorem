import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { getProjectsByStatus } from "../../api/client"
import { format } from "date-fns"
import Pending from "../../components/Pending"
import Tabs from "../../components/Tabs"

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
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center mb-4">
        <Tabs
          currentStatus={currentStatus}
          onStatusChange={handleFilterByStatus}
        />
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        {projects?.length ? (
          projects.map((project) => (
            <div className="flex gap-4 flex-wrap justify-center">
              <Pending
                key={project._id}
                link={`./${project._id}`}
                email={project.profile?.email || "none"}
                name={
                  `${project.profile?.firstname} ${project.profile?.lastname}` ||
                  "none"
                }
                tel={project.profile?.phone || "none"}
                renovation={project.renovation}
                budget={project.budget}
                adresse={project.adresse?.address || "none"}
                date={format(new Date(project.createdAt), "dd/MM/yyyy")}
                when={project.when}
              />
            </div>
          ))
        ) : (
          <p className="mx-auto">Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  )
}

export default Projects
