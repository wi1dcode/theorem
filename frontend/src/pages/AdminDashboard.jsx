import React, { useContext, useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import UserContext from "../services/userContext";
import logo from "../images/icons/theorem-logo-vert.png";
import AdminMenu from "../components/AdminMenu";
import Menu from "./Admin/Menu";
import Users from "./Admin/Users";
import Projects from "./Admin/Projects";
import ProjectInfo from "./Admin/ProjectInfo";
import NewProject from "./Dashboard/NewProject";
import Logging from "./Admin/Logging";
import Settings from "./Dashboard/Settings";
import UserDetails from "./Admin/UserDetails";
import MenuSvg from "../images/svg/MenuSvg";
import Information from "./Dashboard/Information";
import Realisation from "./Admin/Realisations";
import AddProject from "./Admin/AddProject";
import EditProject from "./Admin/EditProject";

function AdminDashboard() {
  const navigate = useNavigate();
  const { setConnected } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const exit = async () => {
    try {
      localStorage.clear();
      setConnected(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="relative max-md:bg-gray-50 h-screen">
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className="fixed z-30 top-3 left-5 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuSvg className="text-black"/>
        </button>
      </div>

      <section className="max-sm:items-center max-md:pt-5 flex items-start max-sm:flex-col gap-x-6">
        <aside
          className={`flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-gray-50 border-r rtl:border-r-0 rtl:border-l
          md:transform-none md:translate-x-0 ${
            isOpen ? "transform translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-30 md:relative md:z-auto`}
        >
          <Link to="/">
            <img className="mx-auto w-1/2" src={logo} alt="" />
          </Link>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <AdminMenu onClick={() => setIsOpen(!isOpen)} />
            <div className="mt-6">
              <div className="flex items-center justify-between mt-6">
                <Link
                  to="/"
                  onClick={exit}
                  className="text-gray-500 transition-colors duration-200 flex items-center gap-x-2 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
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
                  <span className="text-sm font-medium text-gray-700">
                    Déconnexion
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-xl w-full h-[95vh] max-md:overflow-hidden overflow-auto mt-6 flex justify-center md:mr-6 md:p-6 bg-gray-50 avenir max-md:h-full">
          <Routes>
            <Route index element={<Menu />} />
            <Route path="new-project" element={<NewProject />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:username" element={<UserDetails />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectInfo />} />
            <Route path="logs" element={<Logging />} />
            <Route path="settings" element={<Settings />} />
            <Route path="information" element={<Information />} />
            <Route path="realisations" element={<Realisation />} />
            <Route path="realisations/add" element={<AddProject />} />
            <Route path="realisations/edit/:id" element={<EditProject />} />
          </Routes>
        </div>
      </section>
    </section>
  );
}

export default AdminDashboard;
