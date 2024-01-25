import React, { useContext } from "react"
import { Link, useNavigate, Routes, Route } from "react-router-dom"
import UserContext from "../services/userContext"
import logo from "../images/icons/logo_black.png"
import AdminMenu from "../components/AdminMenu"
import Menu from "./Admin/Menu"
import Users from "./Admin/Users"
import Projects from "./Admin/Projects"
import ProjectInfo from "./Admin/ProjectInfo"
import NewProject from "./Dashboard/NewProject"
import Logging from "./Admin/Logging"
import Settings from "./Dashboard/Settings"
import UserDetails from "./Admin/UserDetails"

function AdminDashboard() {
  const navigate = useNavigate()
  const { setConnected } = useContext(UserContext)

  const exit = async () => {
    try {
      localStorage.clear()
      setConnected(false)
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section>
      <section className="max-sm:items-center flex items-start max-sm:flex-col gap-x-6 avenir">
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gray-50 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <Link to="/">
            <img className="mx-auto w-auto" src={logo} alt="" />
          </Link>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <AdminMenu />
            <div className="mt-6">
              <div className="flex items-center justify-between mt-6">
                <Link
                  to="/"
                  onClick={exit}
                  className="text-gray-500 transition-colors duration-200 flex items-center gap-x-2 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Déconnexion
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-xl w-full h-[95vh] overflow-auto mt-6 flex justify-center mr-6 p-6 bg-gray-50 avenir">
          <Routes>
            <Route index element={<Menu />} />
            <Route path="new-project" element={<NewProject />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:username" element={<UserDetails />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectInfo />} />
            <Route path="logs" element={<Logging />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </section>
    </section>
  )
}

export default AdminDashboard
