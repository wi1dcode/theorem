import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Widget } from "@typeform/embed-react"
import { sendResponses } from "../api/pro"
import { Helmet } from "react-helmet"

function CandidatePro() {
  const navigate = useNavigate()

  const handleSubmit = async (formId, responseId) => {
    try {
      const { value: passValues } = await Swal.fire({
        title: "Créer votre mot de passe",
        html: `
        <div class="mb-2">
        <input type="password" id="password" class="swal2-input rounded-lg w-[70%]" placeholder="Entrez votre mot de passe">
        <input type="password" id="confirmPassword" class="swal2-input rounded-lg w-[70%]" placeholder="Confirmez votre mot de passe">
        </div>
        <button type="button" id="togglePasswordBtn" class="text-sm opacity-50">Afficher mot de passe</button>
        `,
        focusConfirm: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        confirmButtonColor: "#C8B790",
        iconColor: "#C8B790",
        didRender: () => {
          document
            .getElementById("togglePasswordBtn")
            .addEventListener("click", () => {
              const passwordInput = document.getElementById("password")
              const confirmPasswordInput =
                document.getElementById("confirmPassword")
              const isPassword = passwordInput.type === "password"
              passwordInput.type = isPassword ? "text" : "password"
              confirmPasswordInput.type = isPassword ? "text" : "password"
            })
        },
        preConfirm: () => {
          const password = Swal.getPopup().querySelector("#password").value
          const confirmPassword =
            Swal.getPopup().querySelector("#confirmPassword").value
          if (!password || !confirmPassword) {
            Swal.showValidationMessage("Les deux champs sont requis")
          } else if (password !== confirmPassword) {
            Swal.showValidationMessage("Les mots de passe ne correspondent pas")
          } else if (password.length < 5 || password.length > 16) {
            Swal.showValidationMessage(
              "La longueur du mot de passe doit être comprise entre 5 et 16 caractères"
            )
          }
          return { password, confirmPassword }
        },
        showCancelButton: false,
        confirmButtonText: "Créer mon compte",
        cancelButtonText: "Annuler",
      })

      if (passValues) {
        const { password, confirmPassword } = passValues

        if (password === confirmPassword) {
          const formData = { formId, responseId, password }
          const response = await sendResponses(formData)

          if (response.status !== 400) {
            await Swal.fire(
              "Merci",
              "Formulaire soumis avec succès ! Vous pouvez maintenant vous se connecter à votre compte",
              "success"
            ).then(() => {
              navigate("/login")
            })
          } else {
            await Swal.fire(
              "Merci!",
              "Formulaire soumis avec succès ! Vous pouvez maintenant vous se connecter à votre compte",
              "warning"
            ).then(() => {
              navigate("/login")
            })
          }
        }
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="bg-black">
      <Helmet>
        <title>Pro | Theorem Services</title>
        <meta name="description" content="Partenariat avec Theorem Services" />
      </Helmet>
      <Widget
        id="CoZbpVAY"
        style={{ fontSize: 20, height: "100vh" }}
        className="my-class bg-[#262626]"
        onSubmit={({ formId, responseId }) => handleSubmit(formId, responseId)}
      />
    </div>
  )
}

export default CandidatePro
