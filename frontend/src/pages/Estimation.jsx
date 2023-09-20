import React, { useState } from "react"

const questions = [
  {
    question: "question 1?",
    name: "question1",
    options: ["one", "two", "three", "four", "five"],
  },
  {
    question: "question 2?",
    name: "question2",
    options: ["one", "two", "three"],
  },
  {
    question: "question 3?",
    name: "question3",
    options: ["one", "two", "three"],
  },
  {
    question: "question 4?",
    name: "question4",
    options: ["one", "two", "three"],
  },
  {
    question: "question 5?",
    name: "question5",
    options: ["one", "two", "three"],
  },
  {
    question: "question 6?",
    name: "question6",
    options: ["one", "two", "three"],
  },
]

function Estimation() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showBackButton, setShowBackButton] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [editQuestionIndex, setEditQuestionIndex] = useState(-1)

  const handleAnswer = (answer, name) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: answer,
    }))

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowBackButton(true)
      setShowPreview(false)
      setEditQuestionIndex(-1)
    } else {
      setShowBackButton(false)
      setShowSubmitButton(true)
      setShowPreview(true)
      setEditQuestionIndex(-1)
    }
  }

  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowBackButton(currentQuestion - 1 > 0)
      setShowSubmitButton(false)
      setShowPreview(false)
      setEditQuestionIndex(-1)
    }
  }

  const handleSubmit = () => {
    console.log("DATA:", answers)
  }

  const handleModifierClick = (index) => {
    setEditQuestionIndex(index)
    setCurrentQuestion(index)
    setShowBackButton(true)
    setShowPreview(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex justify-center items-center bg-green-200 min-h-[93.2vh]">
      <div className="md:w-1/2 w-[80%]  mx-auto bg-green-100 text-center flex flex-col justify-center rounded-lg shadow-md p-8 relative">
        <button
          onClick={handleGoBack}
          className={`bg-green-200 text-white px-2 py-2 rounded-full absolute top-4 left-4 ${
            showBackButton ? "" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>
        {showPreview ? (
          <h1 className="text-2xl font-bold mb-10">Overview:</h1>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-10">
              {questions[currentQuestion].question}
            </h1>
            <div className="flex flex-col md:flex-wrap md:flex-row items-center gap-y-3 md:gap-x-6 justify-center">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(option, questions[currentQuestion].name)
                  }
                  className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 w-full md:w-[30%]"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
        {showPreview && (
          <div className="mt-4 text-left">
            <h2 className="text-lg font-semibold mb-2">Overview:</h2>
            <ul>
              {questions.map((q, index) => (
                <li key={index}>
                  <strong>{q.question}:</strong>{" "}
                  {index === editQuestionIndex ? (
                    <div>
                      <input
                        type="text"
                        value={answers[q.name] || ""}
                        onChange={(e) => {
                          const newAnswers = { ...answers }
                          newAnswers[q.name] = e.target.value
                          setAnswers(newAnswers)
                        }}
                      />
                      <button
                        onClick={() => setEditQuestionIndex(-1)}
                        className="text-blue-600 underline ml-2"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <span>
                      {answers[q.name]}
                      <button
                        onClick={() => handleModifierClick(index)}
                        className="text-blue-600 underline ml-2"
                      >
                        Modifier
                      </button>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {showSubmitButton && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 mt-4"
          >
            Envoyer
          </button>
        )}
        <div className="mt-8">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-teal-600">
                  {progress.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full">
              <div
                className="absolute top-0 h-2 rounded-full bg-teal-600"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimation
