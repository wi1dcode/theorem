import Swal from "sweetalert2"
import { Widget } from "@typeform/embed-react"
import axios from "axios"
import { useState } from "react"

function EstimationEmbed() {
  const [city, setCity] = useState("")

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
        confirmButtonText: "Suivant",
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
        const { value: confirmPassword } = await Swal.fire({
          title: "Confirmez votre mot de passe",
          iconColor: "#C8B790",
          confirmButtonColor: "#C8B790",
          input: "password",
          inputPlaceholder: "Confirmez votre mot de passe",
          confirmButtonText: "Créer mon compte",
          showLoaderOnConfirm: true,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: true,
          inputValidator: (value) => {
            if (value !== password) {
              return "Les mots de passe ne correspondent pas"
            }
          },
        })

        if (confirmPassword === password) {
          const { formId, responseId } = event
          const formData = { formId, responseId, password }

          const response = await axios.post(
            "http://localhost:5000/send-responses",
            formData
          )

          if (response.status === 200) {
            await Swal.fire(
              "Success",
              "Form submitted successfully!",
              "success"
            )
          } else {
            await Swal.fire("Error", "Failed to submit form", "error")
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
    const url = `http://api.zippopotam.us/${countryCode}/${zipCode}`

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
          const url = `http://api.zippopotam.us/${countryCode}/${zipCode}`

          const response = await fetch(url)
          const data = await response.json()

          if (data.places && data.places.length > 0) {
            const places = data.places

            if (places.length === 1) {
              setCity(places[0]["place name"])
              Swal.fire({
                title: "Parfait!",
                text: `Vous avez choisi ${places[0]["place name"]}.`,
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
              })
            } else if (places.length > 1) {
              const { value: selectedCity } = await Swal.fire({
                title: "Sélectionnez votre ville",
                input: "select",
                inputOptions: Object.fromEntries(
                  places.map((place, index) => [index, place["place name"]])
                ),
                showCancelButton: true,
                confirmButtonColor: "#C8B790",
                cancelButtonText: "Retour à l'accueil",
                cancelButtonColor: "#D76C66",
                confirmButtonText: "Sélectionner",
                allowOutsideClick: false,
                allowEscapeKey: false,
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
              } else if (Swal.DismissReason.cancel === "cancel") {
                window.location.href = "/"
              }
            }
          }
        } else if (Swal.DismissReason.cancel === "cancel") {
          window.location.href = "/"
        }
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
