import React, { useState, useEffect } from "react";
import { addProject, uploadImage, getProjects } from "../../api/projects";
import { useNavigate, useParams } from "react-router-dom";

function AddProject() {
  const [project, setProject] = useState({
    title: "",
    under_title: "",
    description: "",
    full_desc: "",
    img: "",
    img_two: "",
    img_three: "",
    category: "",
    work: "",
    tags: ["", ""],
    suggestion: [],
  });

  const [projectsList, setProjectsList] = useState([]);
  const [files, setFiles] = useState({
    img: null,
    img_two: null,
    img_three: null,
  });
  const [suggestions, setSuggestions] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjectsList(data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const handleTagsChange = (index, value) => {
    const updatedTags = [...project.tags];
    updatedTags[index] = value;
    setProject((prevProject) => ({
      ...prevProject,
      tags: updatedTags,
    }));
  };

  const handleSuggestionChange = (selectedIds) => {
    setProject((prevProject) => ({
      ...prevProject,
      suggestion: selectedIds,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imgPath = "",
        imgTwoPath = "",
        imgThreePath = "";

      // Upload images if provided
      if (files.img) {
        const formData = new FormData();
        formData.append("file", files.img);
        const response = await uploadImage(formData);
        imgPath = response.filePath;
      }
      if (files.img_two) {
        const formData = new FormData();
        formData.append("file", files.img_two);
        const response = await uploadImage(formData);
        imgTwoPath = response.filePath;
      }
      if (files.img_three) {
        const formData = new FormData();
        formData.append("file", files.img_three);
        const response = await uploadImage(formData);
        imgThreePath = response.filePath;
      }

      await addProject({
        ...project,
        img: imgPath,
        img_two: imgTwoPath,
        img_three: imgThreePath,
      });

      navigate("/admin/projects"); // Navigate back to the project list
    } catch (error) {
      console.error("Error adding project", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-3xl mx-auto p-8"
    >
      <h2 className="text-center text-2xl font-bold mb-8">
        {id ? "Modifier le Projet" : "Ajouter un Projet"}
      </h2>

      <label>Titre</label>
      <input
        type="text"
        name="title"
        value={project.title}
        onChange={handleChange}
        className="border p-2 mb-4"
      />

      <label>Sous-titre</label>
      <input
        type="text"
        name="under_title"
        value={project.under_title}
        onChange={handleChange}
        className="border p-2 mb-4"
      />

      <label>Description</label>
      <textarea
        name="description"
        value={project.description}
        onChange={handleChange}
        className="border p-2 mb-4"
      />

      <label>Description complète</label>
      <textarea
        name="full_desc"
        value={project.full_desc}
        onChange={handleChange}
        className="border p-2 mb-4"
      />

      <label>Catégorie</label>
      <select
        name="category"
        value={project.category}
        onChange={handleChange}
        className="border p-2 mb-4"
      >
        <option value="">Sélectionner la catégorie</option>
        <option value="Appartement/Maison">Appartement/Maison</option>
        <option value="Local commercial">Local commercial</option>
        <option value="Bureaux">Bureaux</option>
      </select>

      <label>Travail</label>
      <input
        type="text"
        name="work"
        value={project.work}
        onChange={handleChange}
        className="border p-2 mb-4"
      />

      {/* Tags for Localisation and Superficie */}
      <div className="flex gap-4 mb-4">
        <div>
          <label>Localisation</label>
          <input
            type="text"
            value={project.tags[0]}
            onChange={(e) => handleTagsChange(0, e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label>Superficie</label>
          <input
            type="text"
            value={project.tags[1]}
            onChange={(e) => handleTagsChange(1, e.target.value)}
            className="border p-2"
          />
        </div>
      </div>

      <label>Suggestions</label>
      <select
        multiple
        value={project.suggestion}
        onChange={(e) =>
          handleSuggestionChange(
            [...e.target.selectedOptions].map((opt) => opt.value)
          )
        }
        className="border p-2 mb-4"
      >
        {projectsList.map((p) => (
          <option key={p._id} value={p._id}>
            {p.title}
          </option>
        ))}
      </select>

      {/* File inputs for images */}
      <label>Image principale</label>
      <input
        type="file"
        name="img"
        onChange={handleFileChange}
        className="mb-4"
      />

      <label>Image secondaire</label>
      <input
        type="file"
        name="img_two"
        onChange={handleFileChange}
        className="mb-4"
      />

      <label>Troisième image</label>
      <input
        type="file"
        name="img_three"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        type="submit"
        className="bg-vert_principal rounded-lg px-4 py-2 text-white"
      >
        {id ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}

export default AddProject;
