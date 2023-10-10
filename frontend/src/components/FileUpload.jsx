import React, { useState } from "react"
import DocSvg from "../images/svg/DocSvg"
import MinusSvg from "../images/svg/MinusSvg"

const FileUpload = ({ id, setUploadedFiles }) => {
  const [files, setFile] = useState([])
  const [message, setMessage] = useState()

  const handleFile = (e) => {
    setMessage("")
    let file = e.target.files

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i].type
      const validFileTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ]

      if (validFileTypes.includes(fileType)) {
        setFile([...files, file[i]])
        setUploadedFiles([...files, file[i]])
      } else {
        setMessage("Only images, PDF, DOCX, and Excel files are accepted")
      }
    }
  }

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i))
    setUploadedFiles(files.filter((file) => file.name !== i))
  }

  return (
    <div className="flex w-full justify-center items-center px-3" id={id}>
      <div className="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
        <div className="m-4">
          <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
            {message}
          </span>
          <div className="flex items-center justify-center w-full">
            <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select files
                </p>
              </div>
              <input
                type="file"
                onChange={handleFile}
                className="opacity-0"
                multiple="multiple"
                name="files[]"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {files.map((file, key) => {
              const isImage = file.type.startsWith("image/")
              return (
                <div
                  key={key}
                  className="overflow-hidden relative flex flex-col items-center"
                >
                  <i
                    onClick={() => {
                      removeImage(file.name)
                    }}
                    className={`absolute right-1 top-1 text-white rounded-full cursor-pointer bg-red-600 w-[18px] h-[18px] flex items-center justify-center`}
                  >
                    <MinusSvg />
                  </i>
                  {isImage ? (
                    <img
                      className="h-20 w-20 rounded-md"
                      src={URL.createObjectURL(file)}
                      alt="uploaded"
                    />
                  ) : (
                    <div className="h-20 w-20 flex items-center justify-center rounded-md bg-gray-200">
                      <DocSvg />
                    </div>
                  )}
                  {file.name.length > 7
                    ? `${file.name.slice(0, 7)}...`
                    : file.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
