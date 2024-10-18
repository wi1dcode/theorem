import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../../api/projects";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDeleteConfirmation = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          handleDelete(id);
          Swal.fire("Supprimé!", "Votre projet a été supprimé.", "success");
        } catch (error) {
          console.error("Error deleting project", error);
        }
      }
    });
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
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {projects.map((project) => (
          <div key={project._id} className="border p-2 rounded-xl">
            <div
              key={project._id}
              className="cursor-pointer max-md:w-[350px] w-[350px] h-[300px] max-lg:w-[500px] overflow-hidden rounded-xl"
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                src={`${window.location.origin}/api${project.img}`}
                alt={project.title}
              />
            </div>
            <div className="my-2">
              <h3 className="text-xl soleil-book border-b pb-1">
                {project.title}
              </h3>
            </div>

            <div className="flex justify-center gap-x-4 mt-2">
              <button
                className="bg-red-500 rounded-lg px-4 py-2 text-white"
                onClick={() => handleDeleteConfirmation(project._id)}
              >
                Supprimer
              </button>
              <button
                className="bg-blue-500 rounded-lg px-4 py-2 text-white"
                onClick={() => navigate(`./edit/${project._id}`)}
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
