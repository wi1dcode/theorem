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

  const projectInfo = [
    { label: "Projet", value: project.renovation },
    { label: "Surface", value: `${project.surface} m²` },
    { label: "Budget", value: `${project.budget} €` },
    {
      label: "Date de début",
      value: format(new Date(project.when), "dd/MM/yyyy"),
    },
    { label: "Type de travaux", value: project.type },
    { label: "Matériaux", value: project.products },
    { label: "Statut de propriété", value: project.residence },
    { label: "Besoin d'aide", value: project.help ? "Oui" : "Non" },
    { label: "Comment trouvé", value: project.about },
    { label: "Tel", value: project.tel },
    { label: "Email", value: project.email },
  ]

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
            {project.surface} m²
          </span>
          <span className="bg-gray-300 px-2 rounded-full avenir">
            {project.type}
          </span>
          <span className="bg-gray-300 px-2 rounded-full avenir">
            {project.products}
          </span>
        </div>
      </article>

      <section className="flex w-full items-center justify-between mt-10">
        <div className="h-[77vh] w-[300px] rounded-lg bg-gray-200 flex flex-col justify-between overflow-auto">
          <div>
            <div className="text-center py-2 rounded-t-lg text-xl font-semibold bg-gray-300">
              Documents
            </div>
            <div
              className="flex-grow overflow-auto"
              style={{ maxHeight: "calc(77vh - 100px)" }}
            >
              {project.documents.map((doc, index) => (
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

        <div className="w-[80%] flex flex-col gap-y-4">
          <div className="w-full mx-auto">
            <Stepper status={project.status} />
          </div>

          <div className="h-[65vh] bg-gray-200 rounded-lg mt-4 p-6 flex flex-col gap-y-2 overflow-auto divide-y divide-gray-300">
            {projectInfo.map((detail, index) => (
              <div key={index} className="flex gap-x-4 pt-2">
                <dt className="text-gray-500 md:text-lg">{detail.label}:</dt>
                <dd className="text-lg font-semibold">{detail.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default Project
