import { useContext, useEffect, useState } from "react"
import UserContext from "../../services/userContext"
import { getProjects } from "../../api/client"
import { format } from "date-fns"
import Pending from "../../components/Pending"

function Projects() {
  const { token } = useContext(UserContext)
  const [projects, setProjects] = useState(null)
  // const [formValue, setFormValue] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getProjects(token)
        setProjects(projects)
      } catch (error) {}
    }
    fetchData()
  }, [token])

  return (
    <div>
      {projects?.length &&
        projects.map((project) => (
          <Pending
            key={project._id}
            email={project.email || "none"}
            tel={project.tel}
            renovation={project.renovation}
            date={format(new Date(project.createdAt), "dd/MM/yyyy")}
          />
        ))}
    </div>
  )
}

export default Projects
