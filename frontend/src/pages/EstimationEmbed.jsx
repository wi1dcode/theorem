import { Widget } from "@typeform/embed-react"

function EstimationEmbed() {
  const handleSubmit = (event) => {
    const { formId, responseId } = event
    console.log("Form submitted with Form ID:", formId)
    console.log("Response ID:", responseId)
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
