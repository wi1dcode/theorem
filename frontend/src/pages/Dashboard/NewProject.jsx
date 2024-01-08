import Swal from "sweetalert2"
import { Widget } from "@typeform/embed-react"
import axios from "axios"
import { useState } from "react"

function NewProject() {
  const handleSubmit = async (event) => {
    try {
      const { formId, responseId } = event
      const formData = { formId, responseId }
      await axios.post("http://localhost:5000/send-responses", formData)
    } catch (error) {
      console.error(error)
    }
  }
  const handleFormReady = () => {}

  return (
    <section className="w-full">
      <Widget
        id="gEqyK00T"
        style={{ fontSize: 20, height: "90vh" }}
        //   onReady={handleFormReady}
        onSubmit={handleSubmit}
      />
    </section>
  )
}

export default NewProject
