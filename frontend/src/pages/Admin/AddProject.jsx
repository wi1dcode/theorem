import React, { useState, useEffect } from "react";
import { addProject, uploadImage, getProjects } from "../../api/projects";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function AddProject() {
  const [project, setProject] = useState({
    title: "",
    under_title: "",
    description: "",
    full_desc: "",
    img: "",
    img_two: "",
    img_three: "",
    images: [],
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
    images: [],
  });
  const [preview, setPreview] = useState({
    img: null,
    img_two: null,
    img_three: null,
    images: [],
  });
  const [imageCredits, setImageCredits] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        const projectOptions = data.map((project) => ({
          value: project._id,
          label: project.title,
        }));
        setProjectsList(projectOptions);
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
    const file = files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview((prevPreview) => ({
        ...prevPreview,
        [name]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleMultipleImagesChange = (e) => {
    const fileArray = Array.from(e.target.files);
    setFiles((prevFiles) => ({
      ...prevFiles,
      images: [...prevFiles.images, ...fileArray],
    }));

    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview((prevPreview) => ({
          ...prevPreview,
          images: [...prevPreview.images, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageCreditChange = (index, value) => {
    const updatedCredits = [...imageCredits];
    updatedCredits[index] = value;
    setImageCredits(updatedCredits);
  };

  const handleTagsChange = (index, value) => {
    const updatedTags = [...project.tags];
    updatedTags[index] = value;
    setProject((prevProject) => ({
      ...prevProject,
      tags: updatedTags,
    }));
  };

  const handleSuggestionChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
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
        imgThreePath = "",
        imagesPaths = [];

      const generateSlug = (title) => {
        return title.toLowerCase().replace(/\s+/g, "_");
      };

      const slug = generateSlug(project.title);

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

      for (const [index, image] of files.images.entries()) {
        const formData = new FormData();
        formData.append("file", image);
        const response = await uploadImage(formData);
        imagesPaths.push({
          src: response.filePath,
          credit: imageCredits[index] || "",
        });
      }

      const projectData = {
        ...project,
        slug,
        img: imgPath,
        img_two: imgTwoPath,
        img_three: imgThreePath,
        images: imagesPaths,
      };

      await addProject(projectData);
      navigate("/dashboard/realisations");
    } catch (error) {
      console.error(
        "Error adding project:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Handle category selection (single choice)
  const handleCategoryChange = (selectedOption) => {
    setProject((prevProject) => ({
      ...prevProject,
      category: selectedOption.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <h2 className="text-center text-3xl font-bold mb-8 text-vert_principal">
        Ajouter un Projet
      </h2>
      <div className="flex gap-x-4">
        {/* Title */}
        <div className="w-1/2">
          <label className="block text-lg font-semibold mb-2">Titre</label>
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
            placeholder="Entrez le titre du projet"
          />
        </div>

        {/* Subtitle */}
        <div className="w-1/2">
          <label className="block text-lg font-semibold mb-2">Sous-titre</label>
          <input
            type="text"
            name="under_title"
            value={project.under_title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
            placeholder="Entrez le sous-titre du projet"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-2">
        <label className="block text-lg font-semibold mb-2">Description</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
          placeholder="Entrez une brève description du projet"
        />
      </div>

      {/* Full Description */}
      <div>
        <label className="block text-lg font-semibold mb-2">
          Description complète
        </label>
        <textarea
          name="full_desc"
          value={project.full_desc}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
          placeholder="Entrez la description complète du projet"
        />
      </div>

      {/* Tags for Localisation and Superficie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Work */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Travail réalisé
          </label>
          <input
            type="text"
            name="work"
            value={project.work}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
            placeholder="Entrez les travaux réalisés"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">
            Localisation
          </label>
          <input
            type="text"
            value={project.tags[0]}
            onChange={(e) => handleTagsChange(0, e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
            placeholder="Entrez la localisation"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Superficie</label>
          <input
            type="text"
            value={project.tags[1]}
            onChange={(e) => handleTagsChange(1, e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-vert_principal focus:outline-none"
            placeholder="Entrez la superficie"
          />
        </div>
      </div>

      <div className="flex gap-x-4 items-center mt-2">
        {/* Category (Single Select) */}
        <div className="w-1/2">
          <label className="block text-lg font-semibold mb-2">Catégorie</label>
          <Select
            options={[
              { value: "Appartement/Maison", label: "Appartement/Maison" },
              { value: "Local commercial", label: "Local commercial" },
              { value: "Bureaux", label: "Bureaux" },
            ]}
            value={{ value: project.category, label: project.category }}
            onChange={handleCategoryChange}
            className="basic-single"
            classNamePrefix="select"
            placeholder="Sélectionner une catégorie"
          />
        </div>

        {/* Suggestions */}
        <div className="w-1/2">
          <label className="block text-lg font-semibold mb-2">
            Suggestions
          </label>
          <Select
            isMulti
            options={projectsList}
            value={projectsList.filter((option) =>
              project.suggestion.includes(option.value)
            )}
            onChange={handleSuggestionChange}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Sélectionner des projets"
          />
        </div>
      </div>

      <div className="flex gap-x-4 items-center mt-2">
        {/* File Inputs for main images */}
        <div className="w-[33%]">
          <label className="block text-lg font-semibold mb-2">
            Image principale
          </label>
          <input
            type="file"
            name="img"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg focus:border-vert_principal focus:outline-none"
          />
          {preview.img && (
            <img
              src={preview.img}
              alt="Preview"
              className="mt-4 rounded-lg shadow-md w-[200px] object-cover"
              style={{ maxHeight: "150px" }}
            />
          )}
        </div>

        <div className="w-[33%]">
          <label className="block text-lg font-semibold mb-2">
            Image secondaire
          </label>
          <input
            type="file"
            name="img_two"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg focus:border-vert_principal focus:outline-none"
          />
          {preview.img_two && (
            <img
              src={preview.img_two}
              alt="Preview"
              className="mt-4 rounded-lg shadow-md w-[200px] object-cover"
              style={{ maxHeight: "150px" }}
            />
          )}
        </div>

        <div className="w-[33%]">
          <label className="block text-lg font-semibold mb-2">
            Troisième image
          </label>
          <input
            type="file"
            name="img_three"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg focus:border-vert_principal focus:outline-none"
          />
          {preview.img_three && (
            <img
              src={preview.img_three}
              alt="Preview"
              className="mt-4 rounded-lg shadow-md w-[200px] object-cover"
              style={{ maxHeight: "150px" }}
            />
          )}
        </div>
      </div>

      {/* Multiple Images */}
      <div className="mb-4 mt-2">
        <label className="block text-lg font-semibold mb-2">
          Images supplémentaires
        </label>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleMultipleImagesChange}
          className="w-full border border-gray-300 rounded-lg focus:border-vert_principal focus:outline-none"
        />
        <div className="flex gap-4 mt-4">
          {preview.images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Preview ${index}`}
                className="rounded-lg shadow-md mb-2 w-[200px] object-cover"
                style={{ maxHeight: "150px" }}
              />
              <input
                type="text"
                placeholder="Enter image credit"
                className="w-[200px] border border-gray-300 p-2 rounded-lg focus:border-vert_principal focus:outline-none"
                value={imageCredits[index] || ""}
                onChange={(e) => handleImageCreditChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-vert_principal text-white font-semibold py-3 px-6 rounded-lg hover:bg-vert_principal/80 transition duration-300"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default AddProject;
