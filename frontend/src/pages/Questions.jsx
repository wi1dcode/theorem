import React, { useState, useEffect } from "react"
import Swal from "sweetalert2"

import FileUpload from "../components/FileUpload"
import ArrowUp from "../images/svg/ArrowUp"
import ArrowDown from "../images/svg/ArrowDown"
import HomeSvg from "../images/svg/HomeSvg"

export default function Questions({
  data,
  item,
  index,
  isSubmit,
  inputDataHandler,
  submitBtnHandler,
}) {
  const savedData = JSON.parse(localStorage.getItem("estimation")) || {}
  const [value, setValue] = useState(savedData[item.id] || "")
  const [uploadedFiles, setUploadedFiles] = useState(savedData.files || [])

  // useEffect(() => {
  //   const element = document.getElementById(index.toString())
  //   if (element) {
  //     element.focus()
  //   }

  //   inputDataHandler(item.id, value, uploadedFiles)
  //   console.log("updated")
  //   // eslint-disable-next-line
  // }, [index, uploadedFiles])

  const editItem = async (fieldId) => {
    const selectedItem = data.find((item) => item.id === fieldId)

    if (!selectedItem) {
      console.error("Item not found")
      return
    }

    let options = {
      title: `Edit ${fieldId}`,
      showCancelButton: true,
      confirmButtonText: "Save",
    }

    if (selectedItem.type === "text") {
      options = {
        ...options,
        input: "text",
        inputValue: savedData[fieldId] || "",
      }
    } else if (selectedItem.type === "button") {
      options = {
        ...options,
        input: "select",
        inputOptions: selectedItem.options.reduce((acc, option) => {
          acc[option] = option
          return acc
        }, {}),
        inputValue: savedData[fieldId] || "",
      }
    } else {
      console.log("else")
      return
    }

    await Swal.fire(options).then(async (result) => {
      if (result.isConfirmed) {
        const newValue = result.value
        await inputDataHandler(fieldId, newValue)
        setValue(newValue)
        const updatedItem = { ...savedData, [fieldId]: newValue }
        localStorage.setItem("estimation", JSON.stringify(updatedItem))
      }
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      clickHandler(item.link, item.i)
    }
  }

  const clickHandler = (link, i) => {
    if (item.type === "info") {
      window.location.href = `#${link}`
    } else {
      window.location.href = `#${link}`
      setTimeout(() => {
        document.getElementById(i.toString()).focus()
      }, 1100)
    }
  }

  const handleFileUpload = (files) => {
    setUploadedFiles(files)
  }

  const handleChange = async (newValue) => {
    await inputDataHandler(item.id, newValue)
    setValue(newValue)
    const updatedItem = { ...savedData, [item.id]: newValue }
    localStorage.setItem("estimation", JSON.stringify(updatedItem))
  }

  return (
    <div className="avenir flex flex-col items-center justify-center h-[80vh] overflow-hidden relative">
      <span className="absolute top-0 left-12 bg-white/40 py-3 px-7 rounded-full text-6xl font-semibold opacity-50 text-[#b1985d] backdrop-blur-md">
        {index + 1}
      </span>
      <span className="flex text-white absolute top-0 right-5 cursor-pointer">
        <span
          className="bg-[#9b895f] rounded-l-md border-r p-1"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </span>
        <span className="bg-[#9b895f] p-1">
          <ArrowDown />
        </span>
        <span
          className="bg-[#9b895f] rounded-r-md border-l p-1"
          onClick={() => (window.location.href = "/")}
        >
          <HomeSvg />
        </span>
      </span>
      <div>
        <h2>
          <span className="text-4xl mb-10 block font-semibold">
            {item.title}
          </span>
        </h2>
      </div>

      {item.type === "text" && (
        <input
          placeholder="Type your answer here..."
          name={item.id}
          id={index}
          className="p-3 rounded-full outline-none px-4 w-1/4 text-center"
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={handleKeyPress}
          value={value}
        />
      )}
      {item.type === "button" && (
        <div className="flex flex-wrap w-1/2 items-center justify-center gap-2 space-x-4">
          {item.options.map((option, i) => (
            <button
              key={i}
              id={index}
              className={`rounded-full outline-none py-4 px-10 bg-white border-2 border-[#9b895f] active:bg-green-400 ${
                value === option ? "border-green-500" : ""
              }`}
              onClick={() => {
                handleChange(option).then(() => {
                  clickHandler(item.link, item.i)
                })
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {item.type === "file" && (
        <FileUpload
          id={index}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={handleFileUpload}
        />
      )}

      {item.type === "info" && (
        <div className="flex flex-col w-1/3 gap-y-2">
          <div
            id={index}
            className="bg-white h-[60vh] rounded-lg p-6 flex justify-center items-center flex-col"
            onClick={() => {
              handleChange().then(() => {
                clickHandler(item.link, item.i)
              })
            }}
          >
            {item.id === "info_firstname" && (
              <div className="flex flex-col justify-center items-center gap-y-4 avenir">
                <h2 className="text-4xl font-semibold">👋 Bonjour</h2>
                <p className="text-2xl text-center">
                  nos services éligible uniquement
                  <br /> dans les codes postales suivantes:
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                  <li className="bg-gray-200 py-1 px-2 rounded-full">95219</li>
                </ul>
                <p className="text-1xl text-gray-500 text-center">
                  si vous etes éligible veuillez cliquez «Commencer»
                </p>
              </div>
            )}
            {item.id === "info_lastname" && (
              <p className="text-3xl avenir font-semibold">Choice</p>
            )}
            {item.id === "confirmation" && (
              <div className="text-3xl avenirtext-center">
                <p className="mb-2 font-semibold text-center">Check info:</p>
                <div>
                  <div className="flex gap-x-3">
                    <p>Type: {savedData?.type}</p>
                    <button
                      onClick={() => editItem("firstname")}
                      className="bg-marron rounded-lg px-2 text-white text-lg font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="flex gap-x-3">
                    <p>Search: {savedData?.search}</p>
                    <button
                      onClick={() => editItem("lastname")}
                      className="bg-marron rounded-lg px-2 text-white text-lg font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="flex gap-x-3">
                    <p>Sizes: {savedData?.sizes}</p>
                    <button
                      onClick={() => editItem("choice")}
                      className="bg-marron rounded-lg px-2 text-white text-lg font-semibold"
                    >
                      Edit
                    </button>
                  </div>
                  <p>Files uploaded: {savedData?.files?.length}</p>
                </div>
              </div>
            )}
          </div>
          {isSubmit ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={submitBtnHandler}
            >
              Valider
            </button>
          ) : (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => clickHandler(item.link, item.i)}
            >
              Commencer
            </button>
          )}
        </div>
      )}
      <br />
      {!isSubmit && item.type !== "button" && item.type !== "info" && (
        <div>
          <button
            id="enter-btn"
            onClick={() => clickHandler(item.link, item.i)}
            className="relative mr-3 inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              OK
            </span>
            <span className="relative invisible">OK</span>
          </button>
        </div>
      )}
    </div>
  )
}
