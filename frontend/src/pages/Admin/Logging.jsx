import React, { useState, useEffect } from "react"
import { getLogs, downloadLogs } from "../../api/logs"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"

function Logging() {
  const [logs, setLogs] = useState([])
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetchLogs()
  }, [page, searchTerm])

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
    let buttons = []
    let startPage = Math.max(page - 2, 1)
    let endPage = Math.min(page + 2, totalPages)

    if (page > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setPage(page - 1)}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Prev
        </button>
      )
    }

    for (let i = startPage; i <= endPage; i++) {
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

    if (page < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => setPage(page + 1)}
          className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
        >
          Next
        </button>
      )
    }

    return buttons
  }

  const handleDownloadLogs = async () => {
    const { value: period } = await Swal.fire({
      title: "Sélectionnez la période",
      confirmButtonColor: "#C8B790",
      cancelButtonColor: "#D76C66",
      input: "select",
      inputOptions: {
        "7d": "Les 7 derniers jours",
        "30d": "Les 30 derniers jours",
        all: "Tous les temps",
      },
      inputPlaceholder: "Choisissez la période",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve()
          } else {
            resolve("Vous devez choisir une période")
          }
        })
      },
    })

    if (period) {
      try {
        await downloadLogs(period)
        Swal.fire(
          "Téléchargé!",
          "Les logs ont été téléchargés avec succès.",
          "success"
        )
      } catch (error) {
        console.error("Erreur lors du téléchargement des logs:", error)
        Swal.fire(
          "Erreur!",
          "Une erreur s'est produite lors du téléchargement des logs.",
          "error"
        )
      }
    }
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

    return "Browser"
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
        <div className="flex items-center gap-2 max-md:justify-center max-md:mt-4">
          <input
            type="text"
            placeholder="Recherche..."
            className="rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-marron rounded-lg px-4 py-2 text-white font-semibold"
          >
            Chercher
          </button>
        </div>
        <div>
          <button
            onClick={handleDownloadLogs}
            className="bg-marron rounded-lg px-4 py-2 text-white font-semibold max-md:mt-4"
          >
            Télécharger
          </button>
        </div>
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
