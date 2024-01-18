import React, { useState, useEffect } from "react"
import { getLogs } from "../../api/logs"
import { Link } from "react-router-dom"

function Logging() {
  const [logs, setLogs] = useState([])
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchLogs()
  }, [page])

  const fetchLogs = async () => {
    try {
      const data = await getLogs(page, searchTerm)
      setLogs(data.logs)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  const handleSearch = () => {
    setPage(1)
    fetchLogs()
  }

  const getPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`bg-marron rounded-lg px-4 py-2 text-white font-semibold ${
            i === page ? "bg-marron/50" : ""
          }`}
        >
          {i}
        </button>
      )
    }
    return buttons
  }

  const parseBrowser = (userAgent) => {
    if (userAgent.includes("Brave")) {
      return "Brave"
    } else if (userAgent.includes("YaBrowser")) {
      return "Yandex Browser"
    } else if (userAgent.includes("OPR") && userAgent.includes("GX")) {
      return "Opera GX"
    } else if (userAgent.includes("OPR")) {
      return "Opera"
    } else if (userAgent.includes("Chrome")) {
      return "Chrome"
    } else if (userAgent.includes("Firefox")) {
      return "Firefox"
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      return "Safari"
    } else if (userAgent.includes("Edge")) {
      return "Edge"
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
      return "Internet Explorer"
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
      return "Opera"
    } else if (userAgent.includes("CriOS")) {
      return "Chrome for iOS"
    } else if (userAgent.includes("FxiOS")) {
      return "Firefox for iOS"
    }

    return "Unknown Browser"
  }

  const processDescription = (description) => {
    const idRegex = /ID:([0-9a-fA-F]{24})/
    const match = description.match(idRegex)
    if (match) {
      const projectId = match[1]
      return (
        <Link to={`/dashboard/projects/${projectId}`} className="text-blue-700">
          {description}
        </Link>
      )
    }
    return description
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Find
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-marron/30">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              IP
            </th>
            <th scope="col" className="px-6 py-3">
              Browser
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log._id} className="bg-nuage/50 border-b border-marron/30">
              <td className="px-6 py-4">
                {new Date(log.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4">{log.author}</td>
              <td className="px-6 py-4">
                {processDescription(log.description)}
              </td>
              <td className="px-6 py-4">{log.ip}</td>
              <td className="px-6 py-4">{parseBrowser(log.browser)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4 flex gap-x-2 justify-end">{getPageButtons()}</div>
    </div>
  )
}

export default Logging
