import { useContext } from "react"
import { useParams } from "react-router-dom"
import UserContext from "../../services/userContext"
import DocSvg from "../../images/svg/DocSvg"
import DownloadSvg from "../../images/svg/DownloadSvg"
import Stepper from "../../components/Stepper"
import { format } from "date-fns"
import { uploadDocument, downloadDocument } from "../../api/document"
import Swal from "sweetalert2"

function Project() {
  const { id } = useParams()
  const { user } = useContext(UserContext)

  const project = user.forms?.find((project) => project._id === id)

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

        await uploadDocument(project._id, formData)
        Swal.fire(
          "Téléchargé!",
          "Votre document a été téléchargé avec succès.",
          "success"
        )
        window.location.reload()
      }
    } catch (error) {
      Swal.fire(
        "Erreur!",
        "Une erreur s'est produite lors du téléchargement du document.",
        "error"
      )
    }
  }

  function formatFileName(fileName) {
    const maxLength = 16
    const extension = fileName.slice(
      ((fileName.lastIndexOf(".") - 1) >>> 0) + 2
    )
    if (fileName.length > maxLength) {
      return `${fileName.slice(0, maxLength - 3)}... .${extension}`
    }
    return fileName
  }

  const projectInfo = [
    { label: "Projet", value: project.renovation },
    { label: "Budget", value: project.budget },
    { label: "Date de début", value: project.when },
    { label: "Tel", value: project.profile?.phone },
    { label: "Email", value: project.profile?.email },
  ]

  const additionalInfo = project.additionalInfo?.map((info, index) => {
    let answerText = info.answer

    if (typeof info.answer === "boolean") {
      answerText = info.answer ? "Oui" : "Non"
    }

    return (
      <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
        <dt className="text-gray-500 md:text-lg min-w-[20%]">
          {info.question}:
        </dt>
        <dd className="text-lg font-semibold whitespace-normal break-all">
          {answerText}
        </dd>
      </div>
    )
  })

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <section className="w-full">
      <article>
        <h1 className="text-4xl font-semibold text-center avenir">
          {project.renovation}
        </h1>
        <div className="flex gap-x-4 items-center justify-center mt-2">
          <span className="bg-gray-300 px-2 rounded-full avenir">
            {project.search}
          </span>
          <span className="bg-gray-300 px-2 rounded-full avenir">
            {project.when}
          </span>
        </div>
      </article>

      <section className="flex flex-col w-full gap-x-4 items-center justify-between mt-2 max-md:flex-col">
        <div className="w-full mx-auto">
          <Stepper status={project.status} />
        </div>
        <div className="w-full flex gap-x-4 mt-8 max-md:flex-col">
          <div className="h-[70vh] w-[330px] rounded-lg bg-gray-200 flex flex-col justify-between overflow-auto max-md:h-auto max-md:w-full">
            <div>
              <div className="text-center py-2 rounded-t-lg text-xl font-semibold bg-gray-300">
                Documents
              </div>
              <div
                className="flex-grow overflow-auto"
                style={{ maxHeight: "calc(70vh - 100px)" }}
              >
                {project.documents?.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-gray-300 m-2 rounded-lg py-4 px-2 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-1 overflow-hidden">
                      <DocSvg />
                      <p title={doc.originalName}>
                        {formatFileName(doc.originalName)}
                      </p>
                    </div>
                    <button
                      className="cursor-pointer"
                      type="button"
                      onClick={() =>
                        downloadDocument(project._id, doc.originalName)
                      }
                    >
                      <DownloadSvg />
                    </button>
                  </div>
                ))}
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

          <div className="w-full flex flex-col gap-y-4 max-md:w-full">
            <div className="h-[70vh] bg-gray-200 rounded-lg p-6 flex flex-col gap-y-2 overflow-auto divide-y divide-gray-300 max-md:h-auto">
              {projectInfo.map((detail, index) => (
                <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
                  <dt className="text-gray-500 md:text-lg">{detail.label}:</dt>
                  <dd className="text-lg font-semibold whitespace-normal break-all">
                    {detail.value}
                  </dd>
                </div>
              ))}
              {additionalInfo}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Project
