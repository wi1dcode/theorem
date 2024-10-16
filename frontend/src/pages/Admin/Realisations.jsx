import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../../api/projects";
import { Link, useNavigate } from "react-router-dom";

function Realisations() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectList = await getProjects();
        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project", error);
    }
  };

  return (
    <section className="text-center">
      <div className="text-3xl font-bold">Realisations:</div>
      <button
        className="bg-vert_principal rounded-lg px-4 py-2 text-white font-semibold max-md:mt-4 mt-4"
        onClick={() => navigate("./add")}
      >
        Ajouter
      </button>
      <div className="mt-12 mx-auto">
        {projects.map((project) => (
          <div key={project._id} className="mt-6">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex justify-center gap-x-4 mt-4">
              <button
                className="bg-red-500 rounded-lg px-4 py-2 text-white"
                onClick={() => handleDelete(project._id)}
              >
                Supprimer
              </button>
              <button
                className="bg-blue-500 rounded-lg px-4 py-2 text-white"
                onClick={() => navigate(`/admin/edit-project/${project._id}`)}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisations;
