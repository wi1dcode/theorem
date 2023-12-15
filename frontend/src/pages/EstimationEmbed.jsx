import Swal from "sweetalert2"
import { Widget } from "@typeform/embed-react"
import axios from "axios"

function EstimationEmbed() {
  const handleSubmit = async (event) => {
    try {
      const { value: password } = await Swal.fire({
        title: "Entrez votre mot de passe",
        iconColor: "#C8B790",
        confirmButtonColor: "#C8B790",
        input: "password",
        inputLabel:
          "Attention, le mot de passe doit contenir entre 5 et 16 caractères.",
        inputPlaceholder: "Entrez votre mot de passe",
        inputAttributes: {
          maxlength: "16",
          autocapitalize: "off",
          autocorrect: "off",
          autocomplete: "off",
        },
        confirmButtonText: "Créer mon compte",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        inputValidator: (value) => {
          if (!value) {
            return "Le mot de passe est requis"
          } else if (value.length < 5 || value.length > 16) {
            return "La longueur du mot de passe doit être comprise entre 5 et 16 caractères."
          }
        },
      })

      if (password) {
        const { formId, responseId } = event
        const formData = { formId, responseId, password }

        const response = await axios.post(
          "http://localhost:5000/send-responses",
          formData
        )

        if (response.status === 200) {
          await Swal.fire("Success", "Form submitted successfully!", "success")
        } else {
          await Swal.fire("Error", "Failed to submit form", "error")
        }
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const checkZipCode = (zipCode) => {
    const supportedZipCodes = /^((95|92|94|78|93|60|75)\d{3})$/
    return supportedZipCodes.test(zipCode)
  }

  const askForZipCode = async () => {
    try {
      const { value: zipCode } = await Swal.fire({
        title: "Entrez votre code postal",
        text: "Veuillez entrer votre code postal pour vérifier notre disponibilité de service.",
        input: "text",
        inputLabel: "Ex. : 95123, 92456, 78123...",
        cancelButtonText: "Retour à l'accueil",
        showCancelButton: true,
        inputPlaceholder: "Entrez votre code postal",
        confirmButtonText: "Vérifier",
        confirmButtonColor: "#C8B790",
        cancelButtonColor: "#D76C66",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        inputValidator: (value) => {
          if (!value) {
            return "Le code postal est requis"
          } else if (!checkZipCode(value)) {
            return "Désolé, nous ne desservons pas cette zone. Veuillez nous contacter pour plus d'informations."
          }
        },
      })

      if (zipCode) {
        Swal.fire({
          title: "Parfait!",
          text: "Vous pouvez continuer à remplir le formulaire.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
      } else if (Swal.DismissReason.cancel === "cancel") {
        window.location.href = "/"
      } else {
        Swal.fire(
          Swal.fire(
            "Désolé!",
            "Nous ne desservons pas cette zone. Veuillez nous contacter.",
            "error"
          )
        )
      }
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  const handleFormReady = async () => {
    try {
      await askForZipCode()
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  return (
    <div>
      <Widget
        id="gEqyK00T"
        style={{ fontSize: 20, height: "100vh" }}
        onReady={handleFormReady}
        onSubmit={handleSubmit}
        className="my-class bg-[#262626]"
      />
    </div>
  )
}

export default EstimationEmbed
