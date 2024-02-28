import React from "react"
import WorkSvg from "../images/svg/WorkSvg"
import CheckSvg from "../images/svg/CheckSvg"
import AnalyseSvg from "../images/svg/AnalyseSvg"
import SmileSvg from "../images/svg/SmileSvg"
import ClockSvg from "../images/svg/ClockSvg"
import XSvg from "../images/svg/XSvg"
import BankCardSvg from "../images/svg/BankCardSvg"

function Stepper({ status }) {
  let steps = [
    {
      label: "En attente",
      isCompleted: true,
      icon: <ClockSvg />,
    },
    {
      label: "En étude",
      isCompleted: status !== "PENDING",
      icon: <AnalyseSvg />,
    },
    {
      label: status === "REFUSED" ? "Refusé" : "Accepté",
      isCompleted:
        ["APPROVED", "PROGRESS", "FINISH", "PAYMENT"].includes(status) ||
        status === "REFUSED",
      icon: status === "REFUSED" ? <XSvg /> : <CheckSvg />,
    },
    {
      label: status === "PAYMENT" ? "Paiement" : "En cours",
      isCompleted:
        ["PROGRESS", "FINISH"].includes(status) || status === "PAYMENT",
      icon: status === "PAYMENT" ? <BankCardSvg /> : <WorkSvg />,
    },
    {
      label: "Terminé",
      isCompleted: status === "FINISH",
      icon: <SmileSvg />,
    },
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
              className={`flex items-center ${getStepClass(step.isCompleted)} ${
                status === "REFUSED" && "border-red-500 text-red-500"
              } relative`}
            >
              <div
                className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                  step.isCompleted ? "border-green-500" : "border-gray-300"
                } flex items-center justify-center ${
                  status === "REFUSED" && "border-red-500"
                }`}
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
                } ${status === "REFUSED" && "border-red-500"}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Stepper
