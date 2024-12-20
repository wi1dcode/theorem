import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../services/userContext";
import {
  getProject,
  updateProjectPriceTotal,
  updateProjectStatus,
} from "../../api/client";
import { uploadDocument, downloadDocument } from "../../api/document";
import Loading from "../../components/Loading";
import Stepper from "../../components/Stepper";
import { format } from "date-fns";
import DocSvg from "../../images/svg/DocSvg";
import DownloadSvg from "../../images/svg/DownloadSvg";
import Swal from "sweetalert2";
import { get } from "../../api/api";
import { uploadImage } from "../../api/image";

function ProjectInfo() {
  const { id } = useParams();
  const { connected } = useContext(UserContext);
  const [projectData, setProjectData] = useState();
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchProject = async (id) => {
      try {
        const data = await getProject(id);
        setProjectData(data);
        setLoading(false);

        const urls = await Promise.all(
          data.photos.map(async (doc) => {
            try {
              const response = await get(doc.path, { responseType: "blob" });
              return URL.createObjectURL(response.data);
            } catch (error) {
              console.error("Error fetching image", error);
              return null;
            }
          })
        );

        setImageUrls(urls.filter((url) => url !== null));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProject(id);
  }, [id, connected]);

  const handleImageClick = (url) => {
    Swal.fire({
      imageUrl: url,
      imageAlt: "Custom image",
      showConfirmButton: false,
      width: "50%",
      background: "transparent",
    });
  };

  const handleFormStatus = async (status) => {
    try {
      let comment = "";

      if (status === "FINISH" || status === "PAYMENT") {
        const { value: text, isConfirmed } = await Swal.fire({
          title: "Ajouter un commentaire",
          input: "textarea",
          inputPlaceholder: "Votre commentaire ici...",
          showCancelButton: true,
          confirmButtonColor: "#353D2B",
          cancelButtonColor: "#D76C66",
          confirmButtonText: "Envoyer",
          cancelButtonText: "Annuler",
        });

        if (isConfirmed && text) {
          comment = text;
          await updateProjectStatus(id, { status, comment });
          const updatedData = await getProject(id);
          setProjectData(updatedData);
        }
      } else {
        await updateProjectStatus(id, { status });
        const updatedData = await getProject(id);
        setProjectData(updatedData);
      }
    } catch (error) {
      console.error("Error updating project status:", error);
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "En attente";
      case "ANALYSE":
        return "En étude";
      case "REFUSED":
        return "Refusé";
      case "APPROVED":
        return "Accepté";
      case "PROGRESS":
        return "En cours";
      case "PAYMENT":
        return "En attente de paiement";
      case "FINISH":
        return "Terminé";
      default:
        return "inconnue";
    }
  };

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
        confirmButtonColor: "#353D2B",
        cancelButtonColor: "#D76C66",
      });

      if (file) {
        const formData = new FormData();
        formData.append("document", file);

        await uploadDocument(projectData._id, formData);
        Swal.fire(
          "Téléchargé!",
          "Votre document a été téléchargé avec succès.",
          "success"
        );
        window.location.reload();
      }
    } catch (error) {
      Swal.fire(
        "Erreur!",
        "Une erreur s'est produite lors du téléchargement du document.",
        "error"
      );
    }
  };

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
        confirmButtonColor: "#353D2B",
        cancelButtonColor: "#D76C66",
      });

      if (files) {
        const formData = new FormData();
        [...files].forEach((file) => {
          formData.append("images", file);
        });

        await uploadImage(projectData._id, formData);
        Swal.fire(
          "Ajoutées!",
          "Vos images ont été ajoutées avec succès.",
          "success"
        );
        window.location.reload();
      }
    } catch (error) {
      Swal.fire(
        "Erreur!",
        "Une erreur s'est produite lors du téléchargement des images.",
        "error"
      );
    }
  };

  function formatFileName(fileName) {
    const maxLength = 20;
    const extension = fileName.slice(
      ((fileName.lastIndexOf(".") - 1) >>> 0) + 2
    );
    if (fileName.length > maxLength) {
      return `${fileName.slice(0, maxLength - 3)}... .${extension}`;
    }
    return fileName;
  }

  if (loading) return <Loading />;

  if (!projectData) return <p>Projet non trouvé</p>;

  const projectDetails = [
    { label: "Projet", value: projectData?.renovation || "none" },
    {
      label: "Budget réel",
      value: `${projectData?.priceTotal} €` || "Pas calculé",
    },
    { label: "Budget estimé", value: projectData?.budget || "none" },
    { label: "Date de début", value: projectData?.when || "none" },
    { label: "Tel", value: projectData?.profile?.phone || "none" },
    { label: "Email", value: projectData?.profile?.email || "none" },
  ];

  const handlePriceUpdate = async () => {
    const { value: newPrice } = await Swal.fire({
      title: "Modifier le prix total",
      input: "number",
      inputValue: projectData?.priceTotal || "0",
      showCancelButton: true,
      confirmButtonText: "Enregistrer",
      cancelButtonText: "Annuler",
      confirmButtonColor: "#353D2B",
      cancelButtonColor: "#D76C66",
      inputValidator: (value) => {
        return isNaN(value) ? "Veuillez entrer un nombre valide" : null;
      },
    });

    if (newPrice) {
      try {
        await updateProjectPriceTotal(id, newPrice);
        const updatedData = await getProject(id);
        setProjectData(updatedData);
      } catch (error) {
        console.error("Erreur lors de la mise à jour du prix total:", error);
        Swal.fire("Erreur!", "Échec de la mise à jour du prix total.", "error");
      }
    }
  };

  const additionalInfo = projectData.additionalInfo?.map((info, index) => {
    let answerText = info.answer;

    if (typeof info.answer === "boolean") {
      answerText = info.answer ? "Oui" : "Non";
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
    );
  });

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
              {projectData.documents?.map((doc, index) => (
                <div
                  key={index}
                  className="bg-gray-300 m-2 rounded-lg py-4 px-2 flex items-center justify-between"
                >
                  <span className="flex items-center gap-x-1 overflow-hidden">
                    <DocSvg />
                    <p>{formatFileName(doc.originalName)}</p>
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
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleDocumentUpload}
            className="w-full opacity-50 hover:opacity-100 transition-opacity text-center py-2 rounded-b-lg text-xl font-semibold bg-green-300 cursor-pointer"
          >
            Ajouter document
          </button>
        </div>

        <div className="w-full h-[70vh] flex flex-col justify-between overflow-auto bg-gray-200 rounded-lg max-md:w-full max-md:h-auto">
          <div className="flex flex-col items-center p-6 pb-0">
            <p className="font-semibold text-lg opacity-50">
              Changer le statut:
            </p>
            <div className="flex gap-x-4 mt-4 max-md:flex-col max-md:gap-y-2">
              <button
                className="bg-gray-400 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("PENDING")}
              >
                En attente
              </button>
              <button
                className="bg-yellow-400 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("ANALYSE")}
              >
                En étude
              </button>
              <button
                className="bg-green-400 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("APPROVED")}
              >
                Accepter
              </button>
              <button
                className="bg-red-400 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("REFUSED")}
              >
                Refuser
              </button>
              <button
                className="bg-blue-400 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("PROGRESS")}
              >
                En cours
              </button>
              <button
                className="bg-yellow-300 p-2 rounded-lg px-3 font-semibold"
                onClick={() => handleFormStatus("PAYMENT")}
              >
                En attente de paiement
              </button>
              <button
                className="bg-vert_principal p-2 rounded-lg px-3 text-white font-semibold"
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
            <div className="flex gap-x-4">
              <button
                type="button"
                onClick={handleImageUpload}
                className="w-[250px] mt-2 opacity-50 hover:opacity-100 transition-opacity text-center py-2 rounded-lg text-xl font-semibold bg-green-300 cursor-pointer"
              >
                Ajouter les images
              </button>
              <button
                type="button"
                onClick={handlePriceUpdate}
                className="w-[250px] mt-2 opacity-50 hover:opacity-100 transition-opacity text-center py-2 rounded-lg text-xl font-semibold bg-blue-300 cursor-pointer"
              >
                Définir le prix
              </button>
            </div>
          </div>
          <div className="h-[65vh] max-md:h-auto w-full rounded-lg p-6 flex flex-col gap-y-2 divide-y divide-gray-300">
            {projectDetails.map((detail, index) => (
              <div key={index} className="flex gap-x-4 pt-2 max-md:flex-col">
                <dt className="text-gray-500 md:text-lg">{detail?.label}:</dt>
                <dd className="text-lg font-semibold whitespace-normal break-all">
                  {detail?.value}
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
      </section>
    </div>
  );
}

export default ProjectInfo;
