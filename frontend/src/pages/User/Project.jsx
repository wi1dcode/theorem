import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserContext from "../../services/userContext"
import DocSvg from "../../images/svg/DocSvg"
import DownloadSvg from "../../images/svg/DownloadSvg"
import Stepper from "../../components/Stepper"
import { uploadDocument, downloadDocument } from "../../api/document"
import { uploadImage } from "../../api/image"

import Swal from "sweetalert2"
import { get } from "../../api/api"

function Project() {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const [imageUrls, setImageUrls] = useState([])

  const project = user.forms?.find((project) => project._id === id)

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = project.photos?.map((photo) => photo.path) || []

      const urls = await Promise.all(
        imagePaths.map(async (path) => {
          try {
            const response = await get(path, { responseType: "blob" })
            return URL.createObjectURL(response.data)
          } catch (error) {
            console.error("Error fetching image", error)
            return null
          }
        })
      )

      setImageUrls(urls.filter((url) => url !== null))
    }

    if (project.photos && project.photos.length > 0) {
      fetchImages()
    }
  }, [project.photos])

  const handleImageClick = (url) => {
    Swal.fire({
      imageUrl: url,
      imageAlt: "Custom image",
      showConfirmButton: false,
      width: "50%",
      background: "transparent",
    })
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
        confirmButtonText: "Ajouter",
        cancelButtonText: "Annuler",
        confirmButtonColor: "#C8B790",
        cancelButtonColor: "#D76C66",
      })

      if (file) {
        const formData = new FormData()
        formData.append("document", file)

        await uploadDocument(project._id, formData)
        Swal.fire(
          "Ajoutées!",
          "Votre document a été ajoutées avec succès.",
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

  const handleImageUpload = async () => {
    try {
      const { value: files } = await Swal.fire({
        title: "Sélectionnez des images",
        input: "file",
        inputAttributes: {
          accept: "image/jpeg, image/png, image/jpg",
          "aria-label": "Téléchargez vos images ici",
          multiple: true,
        },
        showCancelButton: true,
        confirmButtonText: "Ajouter",
        cancelButtonText: "Annuler",
        confirmButtonColor: "#C8B790",
        cancelButtonColor: "#D76C66",
      })

      if (files) {
        const formData = new FormData()
        ;[...files].forEach((file) => {
          formData.append("images", file)
        })

        await uploadImage(project._id, formData)
        Swal.fire(
          "Ajoutées!",
          "Vos images ont été ajoutées avec succès.",
          "success"
        )
        window.location.reload()
      }
    } catch (error) {
      Swal.fire(
        "Erreur!",
        "Une erreur s'est produite lors du téléchargement des images.",
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

  function getStatusLabel(status) {
    switch (status) {
      case "PENDING":
        return { label: "En attente", color: "bg-yellow-500" }
      case "REFUSED":
        return { label: "Refusé", color: "bg-red-500" }
      case "APPROVED":
        return { label: "Approuvé", color: "bg-green-500" }
      case "PROGRESS":
        return { label: "En cours", color: "bg-blue-500" }
      case "FINISH":
        return { label: "Terminé", color: "bg-purple-500" }
      default:
        return { label: "Inconnu", color: "bg-gray-500" }
    }
  }

  const projectStatus = getStatusLabel(project.status)

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
          <span
            className={`${projectStatus.color} px-2 rounded-full text-white`}
          >
            {projectStatus.label}
          </span>
        </div>
      </article>

      <section className="flex flex-col w-full gap-x-4 items-center justify-between mt-2 max-md:flex-col max-md:overflow-hidden">
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
            <div className="w-full  opacity-50 hover:opacity-100 transition-opacity text-center py-2 rounded-b-lg text-xl font-semibold bg-green-300 cursor-pointer">
              <button type="button" onClick={handleDocumentUpload}>
                Ajouter document
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col gap-y-4 max-md:w-full">
            <div className="h-[70vh] bg-gray-200 rounded-lg p-6 flex flex-col gap-y-2 overflow-auto divide-y divide-gray-300 max-md:h-auto pt-4">
              <button
                type="button"
                onClick={handleImageUpload}
                className="w-full opacity-50 hover:opacity-100 transition-opacity text-center py-2 rounded-lg text-xl font-semibold bg-green-300 cursor-pointer"
              >
                Ajouter images
              </button>
              {projectInfo.map((detail, index) => (
                <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
                  <dt className="text-gray-500 md:text-lg">{detail.label}:</dt>
                  <dd className="text-lg font-semibold whitespace-normal break-all">
                    {detail.value}
                  </dd>
                </div>
              ))}
              {additionalInfo}
              <div className="mt-4">
                <dt className="text-gray-500 md:text-lg mt-2">Images:</dt>
                <div className="flex">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`uploaded ${index}`}
                      style={{
                        maxWidth: "200px",
                        maxHeight: "200px",
                        cursor: "pointer",
                        margin: "5px",
                      }}
                      onClick={() => handleImageClick(url)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Project
