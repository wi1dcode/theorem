import React, { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../services/userContext"
import { Outlet } from "react-router-dom"

import ExitSvg from "../images/svg/ExitSvg"
import BellSvg from "../images/svg/BellSvg"

function Dashboard() {
  const navigate = useNavigate()
  const { connected, token, role } = useContext(UserContext)

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [token, navigate])

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <section>
      {connected && (
        <section className="max-sm:items-center flex items-start max-sm:flex-col gap-x-6 mt-4">
          <div className="max-sm:flex-row bg-nuage rounded-full py-6 max-sm:flex-wrap max-sm:w-[70%] w-[7%] gap-y-4 flex flex-col items-center justify-center sm:ml-6">
            <Link to="/dashboard">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="articles">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="messages">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="news">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="info">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="banlist">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <Link to="team">
              <button
                type="button"
                className="bg-sable p-2 rounded-full shadow"
              >
                <BellSvg />
              </button>
            </Link>
            <div>
              <button
                type="button"
                onClick={logOut}
                className="bg-red-400 p-2 rounded-full shadow"
              >
                <ExitSvg />
              </button>
            </div>
          </div>

          <div className="bg-nuage rounded-xl w-full h-[78vh] flex justify-center mr-6 p-6">
            <Outlet />
          </div>
        </section>
      )}
    </section>
  )
}

export default Dashboard
