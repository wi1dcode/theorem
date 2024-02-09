import { Widget } from "@typeform/embed-react"
import { sendResponses } from "../../api/client"

function NewProject() {
  const handleSubmit = async (event) => {
    try {
      const { formId, responseId } = event
      const formData = { formId, responseId }
      await sendResponses(formData)
    } catch (error) {
      console.error(error)
    }
  }

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
