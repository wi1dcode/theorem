import Swal from "sweetalert2"
import { Widget } from "@typeform/embed-react"
import axios from "axios"

function EstimationEmbed() {
  const handleSubmit = async (event) => {
    try {
      const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          autocapitalize: "off",
          autocorrect: "off",
        },
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        inputValidator: (value) => {
          if (!value) {
            return "Password is required"
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
          // Успешно отправлено
          await Swal.fire("Success", "Form submitted successfully!", "success")
        } else {
          // Обработка ошибок при отправке
          await Swal.fire("Error", "Failed to submit form", "error")
        }
      }
    } catch (error) {
      // Обработка ошибок
      console.error("Error:", error)
    }
  }

  return (
    <div className=" ">
      <Widget
        id="gEqyK00T"
        style={{ fontSize: 20, height: "100vh" }}
        onReady={() => {
          console.log("Form ready")
        }}
        onSubmit={handleSubmit}
        className="my-class bg-[#262626]"
      />
    </div>
  )
}

export default EstimationEmbed
