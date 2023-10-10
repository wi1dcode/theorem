import React, { useState, useEffect } from "react"
import FileUpload from "../components/FileUpload"
import ArrowUp from "../images/svg/ArrowUp"
import ArrowDown from "../images/svg/ArrowDown"
import HomeSvg from "../images/svg/HomeSvg"

export default function Questions({
  item,
  index,
  isSubmit,
  inputDataHandler,
  submitBtnHandler,
}) {
  const [value, setValue] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState([])

  useEffect(() => {
    const element = document.getElementById(index.toString())
    if (element) {
      element.focus()
    }
    inputDataHandler(item.id, value, uploadedFiles)
  }, [index, uploadedFiles])

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      clickHandler(item.link, item.i)
    }
  }

  const clickHandler = (link, i) => {
    window.location.href = `#${link}`
    setTimeout(() => {
      document.getElementById(i.toString()).focus()
    }, 1100)
  }

  const handleFileUpload = (files) => {
    setUploadedFiles(files)
  }

  const handleChange = (value) => {
    return new Promise((resolve) => {
      inputDataHandler(item.id, value)
      resolve()
    })
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
        />
      )}
      {item.type === "button" && (
        <div className="flex space-x-4">
          {item.options.map((option, i) => (
            <button
              key={i}
              id={index}
              className="rounded-full outline-none py-4 px-10 bg-white border-2 border-[#9b895f] active:bg-green-400"
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
        // <input type="file" onChange={(e) => handleChange(e.target.files[0])} />
        <FileUpload
          id={index}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={handleFileUpload}
        />
      )}

      <br />
      {isSubmit && (
        <button
          id="submit-btn"
          onClick={submitBtnHandler}
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
            SUBMIT
          </span>
          <span className="relative invisible">SUBMIT</span>
        </button>
      )}
      {!isSubmit && item.type !== "button" && (
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
          <span className="opacity-50 text-green-700">
            press <span className="font-semibold">ENTER</span>
          </span>
        </div>
      )}
    </div>
  )
}
