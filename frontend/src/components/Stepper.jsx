import React from "react"
import WorkSvg from "../images/svg/WorkSvg"
import CheckSvg from "../images/svg/CheckSvg"
import AnalyseSvg from "../images/svg/AnalyseSvg"
import SmileSvg from "../images/svg/SmileSvg"

function Stepper({ status }) {
  const steps = [
    {
      label: "Analyse",
      isCompleted: status !== "PENDING",
      icon: <AnalyseSvg />,
    },
    {
      label: "Accepté",
      isCompleted: ["APPROVED", "PROGRESS", "FINISH"].includes(status),
      icon: <CheckSvg />,
    },
    {
      label: "En cours",
      isCompleted: ["PROGRESS", "FINISH"].includes(status),
      icon: <WorkSvg />,
    },
    { label: "Terminé", isCompleted: status === "FINISH", icon: <SmileSvg /> },
  ]

  const getStepClass = (isCompleted) => {
    return isCompleted ? "text-green-500" : "text-gray-500"
  }

  return (
    <div className="mx-4 p-4">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center ${getStepClass(
                step.isCompleted
              )} relative`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                  step.isCompleted ? "border-green-500" : "border-gray-300"
                } flex items-center justify-center`}
              >
                {step.icon}
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase">
                {step.label}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                  step.isCompleted ? "border-green-500" : "border-gray-300"
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Stepper
