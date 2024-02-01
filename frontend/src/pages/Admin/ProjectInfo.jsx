import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserContext from "../../services/userContext"
import { getProject, updateProjectStatus } from "../../api/client"
import { uploadDocument, downloadDocument } from "../../api/document"
import Loading from "../../components/Loading"
import Stepper from "../../components/Stepper"
import { format } from "date-fns"
import DocSvg from "../../images/svg/DocSvg"
import DownloadSvg from "../../images/svg/DownloadSvg"
import Swal from "sweetalert2"

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

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "Analyse"
      case "REFUSED":
        return "Refusé"
      case "APPROVED":
        return "Accepté"
      case "PROGRESS":
        return "En cours"
      case "FINISH":
        return "Terminé"
      default:
        return "inconnue"
    }
  }

  const handleDocumentUpload = async () => {
    try {
      const { value: file } = await Swal.fire({
        title: "Sélectionnez un document",
        input: "file",
        inputAttributes: {
          accept: ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx",
          "aria-label": "Téléchargez votre document ici",
        },
        showCancelButton: true,
        confirmButtonText: "Télécharger",
        cancelButtonText: "Annuler",
        confirmButtonColor: "#C8B790",
        cancelButtonColor: "#D76C66",
      })

      if (file) {
        const formData = new FormData()
        formData.append("document", file)

        await uploadDocument(projectData._id, formData)
        Swal.fire(
          "Téléchargé!",
          "Votre document a été téléchargé avec succès.",
          "success"
        )
        // need update project state ?
      }
    } catch (error) {
      Swal.fire(
        "Erreur!",
        "Une erreur s'est produite lors du téléchargement du document.",
        "error"
      )
    }
  }

  if (loading) return <Loading />

  if (!projectData) return <p>Projet non trouvé</p>

  const projectDetails = [
    { label: "Projet", value: projectData?.renovation || "none" },
    { label: "Budget", value: projectData?.budget || "none" },
    { label: "Date de début", value: projectData?.when || "none" },
    { label: "Tel", value: projectData?.profile?.phone || "none" },
    { label: "Email", value: projectData?.profile?.email || "none" },
  ]

  const additionalInfo = projectData.additionalInfo?.map((info, index) => {
    let answerText = info.answer

    if (typeof info.answer === "boolean") {
      answerText = info.answer ? "Oui" : "Non"
    }

    return (
      <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
        <dt className="text-gray-500 md:text-lg min-w-auto">
          {info.question}:
        </dt>
        <dd className="text-lg font-semibold whitespace-normal break-all">
          {answerText}
        </dd>
      </div>
    )
  })

  return (
    <div className="w-full">
      <section>
        <div className="flex flex-col items-center gap-y-3 max-md:mt-2">
          <h1 className="text-4xl font-semibold text-center">
            {projectData.renovation}
          </h1>
          <span className="bg-gray-300 px-2 rounded-full avenir text-center">
            Statut actuel: {getStatusText(projectData.status)}
          </span>
        </div>
        <Stepper status={projectData.status} />
      </section>

      <section className="flex w-full gap-x-4 items-center justify-between mt-8 max-md:flex-col">
        <div className="h-[70vh] max-md:h-auto max-md:w-full w-[330px] max-md:mb-4 rounded-lg bg-gray-200 flex flex-col justify-between">
          <div>
            <div className="text-center py-2 rounded-t-lg text-xl font-semibold bg-gray-300">
              Documents
            </div>
            <div
              className="flex-grow overflow-auto"
              style={{ maxHeight: "calc(70vh - 100px)" }}
            >
              {/* {projectData.documents?.map((doc, index) => (
                <div
                  key={index}
                  className="bg-gray-300 m-2 rounded-lg py-4 px-2 flex items-center justify-between"
                >
                  <span className="flex items-center gap-x-1 overflow-hidden">
                    <DocSvg />
                    <p>{doc.originalName}</p>
                  </span>
                  <button
                    className="cursor-pointer"
                    type="button"
                    onClick={() =>
                      downloadDocument(projectData._id, doc.originalName)
                    }
                  >
                    <DownloadSvg />
                  </button>
                </div>
              ))} */}
            </div>
          </div>
          <button
            type="button"
            onClick={handleDocumentUpload}
            className="w-full text-center py-2 rounded-b-lg text-xl font-semibold bg-green-300 cursor-pointer"
          >
            Ajouter
          </button>
        </div>

        <div className="w-full h-[70vh] flex flex-col justify-between overflow-auto bg-gray-200 rounded-lg max-md:w-full max-md:h-auto">
          <div className="flex flex-col items-center p-6">
            <p className="font-semibold text-lg opacity-50">
              Changer le statut:
            </p>
            <div className="flex gap-x-4 mt-4 max-md:flex-col max-md:gap-y-2">
              <button
                className="bg-yellow-400 p-2 rounded-lg px-3"
                onClick={() => handleFormStatus("PENDING")}
              >
                Analyse
              </button>
              <button
                className="bg-green-400 p-2 rounded-lg px-3"
                onClick={() => handleFormStatus("APPROVED")}
              >
                Accepter
              </button>
              <button
                className="bg-red-400 p-2 rounded-lg px-3"
                onClick={() => handleFormStatus("REFUSED")}
              >
                Refuser
              </button>
              <button
                className="bg-blue-400 p-2 rounded-lg px-3"
                onClick={() => handleFormStatus("PROGRESS")}
              >
                En cours
              </button>
              <button
                className="bg-marron p-2 rounded-lg px-3"
                onClick={() => handleFormStatus("FINISH")}
              >
                Terminer
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="font-semibold text-lg opacity-50">
                Projet créé:{" "}
                {format(new Date(projectData?.createdAt), "dd/MM/yyyy - HH:mm")}
              </p>
              <p className="font-semibold text-lg opacity-50">
                Derniere changement:{" "}
                {format(new Date(projectData?.updatedAt), "dd/MM/yyyy - HH:mm")}
              </p>
            </div>
          </div>
          <div className="h-[65vh] max-md:h-auto w-full rounded-lg p-6 flex flex-col gap-y-2 divide-y divide-gray-300">
            {projectDetails.map((detail, index) => (
              <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
                <dt className="text-gray-500 md:text-lg">
                  {detail?.label}:
                </dt>
                <dd className="text-lg font-semibold whitespace-normal break-all">
                  {detail?.value}
                </dd>
              </div>
            ))}
            {additionalInfo}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectInfo
