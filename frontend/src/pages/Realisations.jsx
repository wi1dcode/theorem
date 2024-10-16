import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { getProjects } from "../api/projects";
import Footer from "../components/Footer";
import ReactGA from "react-ga4";

function Realisations() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
        setFilteredProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchData();
    AOS.init();
  }, []);

  const categories = [
    "Tous les projets",
    "Appartement/Maison",
    "Local commercial",
    "Bureaux",
  ];

  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "Tous les projets") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((item) => item.category === category)
      );
    }
  };

  const trackProjectClick = (projectTitle) => {
    ReactGA.event({
      category: "Projets",
      action: `Projet ouvert: ${projectTitle}`,
      label: projectTitle,
    });
  };

  return (
    <section>
      <NavBar />
      <div className="mb-16 soleil">
        <h2 className="text-center text-4xl soleil mt-6 mb-2">Nos Projets</h2>
        <div className="flex justify-center max-md:flex-col max-md:items-center max-md:gap-y-2 md:space-x-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 pb-1 rounded-full max-md:w-[80%] transition hover:bg-vert_principal hover:text-white border border-vert_principal duration-300 ${
                selectedCategory === category
                  ? "bg-vert_principal border-vert_principal text-white"
                  : "text-black"
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-center items-center gap-5 mx-auto max-w-xl lg:max-w-screen-xl md:px-24 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {filteredProjects.map((item) => (
            <div
              key={item._id}
              className="relative cursor-pointer w-[380px] h-[400px] max-md:w-[80%] max-lg:w-[500px] overflow-hidden shadow-lg rounded-xl transition duration-300 transform hover:scale-105"
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 hover:backdrop-blur-md transition duration-300 rounded-xl p-4">
                <h3 className="text-white text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-center mb-4">
                  {item.under_title}
                </p>
                <Link
                  to={`/realisations/${item._id}`}
                  className="py-2 px-4 bg-vert_principal text-white rounded-full hover:bg-vert_principal/80 transition duration-300"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Realisations;
