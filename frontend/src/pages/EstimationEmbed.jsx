import React from "react"
import { Widget } from "@typeform/embed-react"

function EstimationEmbed() {
  const handleSubmit = (event) => {
    const { formId, responseId } = event
    console.log("Form submitted with Form ID:", formId)
    console.log("Response ID:", responseId)
  }

  return (
    <div className="bg-red-200">
      <Widget
        id="gEqyK00T"
        fullScreen
        style={{ fontSize: 20 }}
        onReady={() => {
          console.log("Form ready")
        }}
        onSubmit={handleSubmit}
        className="my-button"
      >
        click to open form in popup
      </Widget>
    </div>
  )
}

export default EstimationEmbed
