import { InlineWidget } from "react-calendly"

function Calendly() {
  const pageSettings = {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055",
  }

  return (
    <div className="w-full">
      <InlineWidget
        url="https://calendly.com/unknownmagomed/30min"
        pageSettings={pageSettings}
        styles={{ height: "100%" }}
      />
    </div>
  )
}

export default Calendly
