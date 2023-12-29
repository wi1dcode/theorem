import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserContext from "../../services/userContext"
import {
  getProject,
  updateProjectStatus,
} from "../../api/client"

function ProjectInfo() {
  const { id } = useParams()
  const { connected } = useContext(UserContext)
  const [projectData, setProjectData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async (id) => {
      try {
        const data = await getProject(id)
        setProjectData(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchProject(id)
  }, [id, connected])

  const handleFormStatus = async (status) => {
    try {
      await updateProjectStatus(id, status)
      const updatedData = await getProject(id)
      setProjectData(updatedData)
    } catch (error) {
      console.error("Error updating project status:", error)
    }
  }

  return (
    <div>
      <h2 className="text-center mb-2 ">Project info:</h2>

      {loading ? (
        <p>Loading...</p>
      ) : projectData ? (
        <div className="text-center">
          <p>{projectData.renovation}</p>
          <p>id: {projectData._id}</p>
          <p>type: {projectData.type}</p>
          <p>email: {projectData.email}</p>
          <p>stutus: {projectData.status}</p>
          <div className="flex items-center justify-center gap-x-4">
            <button
              className="bg-green-400 p-2 rounded-lg"
              onClick={() => handleFormStatus("APPROVED")}
            >
              Accepter
            </button>
            <button
              className="bg-red-400 p-2 rounded-lg"
              onClick={() => handleFormStatus("REFUSED")}
            >
              Refuser
            </button>
            <button
              className="bg-yellow-400 p-2 rounded-lg"
              onClick={() => handleFormStatus("PENDING")}
            >
              En attente d'acceptation
            </button>
            <button
              className="bg-blue-400 p-2 rounded-lg"
              onClick={() => handleFormStatus("PROGRESS")}
            >
              En cours
            </button>
          </div>
        </div>
      ) : (
        <p>No project with id: {id}</p>
      )}
    </div>
  )
}

export default ProjectInfo
