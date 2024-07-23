import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { Widget } from "@typeform/embed-react"
import { useEffect, useState } from "react"
import { sendResponses } from "../api/client"
import { Helmet } from "react-helmet"
import HeaderBg from "../images/bg-main.jpg"

function EstimationEmbed() {
  const navigate = useNavigate()
  const [city, setCity] = useState("")
  const [isFormReady, setIsFormReady] = useState(false)

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
          // const { formId, responseId } = event
          const formData = { formId, responseId, password, city }
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

  const checkZipCode = (zipCode) => {
    const supportedZipCodes = /^((95|92|94|78|93|60|75)\d{3})$/
    return supportedZipCodes.test(zipCode)
  }

  const fetchLocationData = async (zipCode) => {
    const countryCode = "fr"
    const url = `https://api.zippopotam.us/${countryCode}/${zipCode}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching location data:", error)
      return null
    }
  }

  const askForZipCode = async () => {
    try {
      if (!city) {
        const { value: zipCode } = await Swal.fire({
          title: "Entrez votre code postal",
          text: "Veuillez entrer votre code postal pour vérifier notre disponibilité de service.",
          input: "text",
          inputLabel: "Ex. : 95120, 92600, 78800...",
          cancelButtonText: "Retour",
          showCancelButton: true,
          inputPlaceholder: "Entrez votre code postal",
          confirmButtonText: "Vérifier",
          confirmButtonColor: "#C8B790",
          cancelButtonColor: "#D76C66",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: true,
          backdrop: `
          url(${HeaderBg}) no-repeat center center / cover
        `,
          inputValidator: async (value) => {
            if (!value) {
              return "Le code postal est requis"
            } else if (!checkZipCode(value)) {
              return "Désolé, nous ne desservons pas cette zone. Veuillez nous contacter pour plus d'informations."
            } else {
              const locationData = await fetchLocationData(value)
              if (!locationData || Object.keys(locationData).length === 0) {
                return "Erreur: aucune information disponible pour ce code postal. Veuillez vérifier et réessayer."
              }
            }
          },
        })

        if (zipCode) {
          const countryCode = "fr"
          const url = `https://api.zippopotam.us/${countryCode}/${zipCode}`

          const response = await fetch(url)
          const data = await response.json()

          if (data.places && data.places.length > 0) {
            const places = data.places

            if (places.length === 1) {
              setCity(places[0]["place name"])
              Swal.fire({
                title: "Parfait !",
                text: `Vous avez choisi ${places[0]["place name"]}.`,
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
              })
              setIsFormReady(true)
            } else if (places.length > 1) {
              const { value: selectedCity } = await Swal.fire({
                title: "Sélectionnez votre ville",
                input: "select",
                inputOptions: Object.fromEntries(
                  places.map((place, index) => [index, place["place name"]])
                ),
                showCancelButton: true,
                confirmButtonColor: "#C8B790",
                cancelButtonText: "Retour",
                cancelButtonColor: "#D76C66",
                confirmButtonText: "Sélectionner",
                allowOutsideClick: false,
                allowEscapeKey: false,
                backdrop: `
                url(${HeaderBg}) no-repeat center center / cover
              `,
                inputValidator: (value) => {
                  if (value === "") {
                    return "Veuillez sélectionner une ville"
                  }
                },
              })

              if (selectedCity !== undefined) {
                setCity(places[selectedCity]["place name"])
                Swal.fire({
                  title: "Parfait!",
                  text: `Vous avez choisi ${places[selectedCity]["place name"]}.`,
                  icon: "success",
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                })
                setIsFormReady(true)
              } else if (Swal.DismissReason.cancel === "cancel") {
                window.history.back()
              }
            }
          }
        } else if (Swal.DismissReason.cancel === "cancel") {
          window.history.back()
        }
      }
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  useEffect(() => {
    askForZipCode()
  }, [])

  return (
    <div
      className="bg-black bg-no-repeat w-full h-full bg-cover"
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <Helmet>
        <title>Estimation | Theorem Services</title>
        <meta
          name="description"
          content="Réalisez une estimation en ligne pour votre projet de rénovation avec Theorem Services. Rapide, facile et précise, notre outil d'estimation vous aide à planifier efficacement votre projet."
        />
      </Helmet>
      {isFormReady && (
        <Widget
          id="Sj5GsUhX"
          style={{ fontSize: 20, height: "100vh" }}
          className="my-class bg-[#262626]"
          onSubmit={({ formId, responseId }) =>
            handleSubmit(formId, responseId)
          }
        />
      )}
    </div>
  )
}

export default EstimationEmbed
