import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { activate } from "../api/session"
import Loading from "../components/Loading"

function Activation() {
  const { link } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    activateAccount()
  }, [link])

  const activateAccount = async () => {
    try {
      const response = await activate(link)
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Compte activé",
          text: "Votre compte a été activé avec succès. Vous pouvez maintenant vous connecter.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login")
          }
        })
      } else {
        throw new Error("Activation failed")
      }
    } catch (error) {
      let errorMessage =
        "Nous n'avons pas pu activer votre compte. Veuillez réessayer ou contacter le support."
      if (error.response && error.response.status === 404) {
        errorMessage = error.response.data.message
      }
      Swal.fire({
        icon: "error",
        title: "Erreur d’activation",
        text: errorMessage,
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/")
        }
      })
    }
  }

  return <Loading />
}

export default Activation
