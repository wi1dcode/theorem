import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";
import { getProjectBySlug, getProjectsByIds } from "../api/projects"; // Add API call to fetch projects by IDs
import Loading from "../components/Loading";

Modal.setAppElement("#root");

function Gallery() {
  const { pathname } = useLocation();
  const { slug } = useParams();
  const [galleryItem, setGalleryItem] = useState(null);
  const [similarWorks, setSimilarWorks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);

    const fetchProject = async () => {
      try {
        const project = await getProjectBySlug(slug);
        setGalleryItem(project);

        // Fetch suggestions based on the project.suggestion array
        if (project.suggestion && project.suggestion.length > 0) {
          const suggestions = await getProjectsByIds(project.suggestion);
          setSimilarWorks(suggestions);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProject();
  }, [slug, pathname]);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galleryItem.images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryItem.images.length) % galleryItem.images.length
    );
  };

  const trackProjectClick = (projectTitle) => {
    ReactGA.event({
      category: "Projects",
      action: `Opened Project: ${projectTitle}`,
      label: projectTitle,
    });
  };

  if (!galleryItem) {
    return <Loading />;
  }

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center soleil max-md:p-2">
        {/* First Block  */}
        <div className="flex items-center gap-x-20 justify-center md:mt-8 max-md:flex-col max-md:w-full md:py-6">
          <div className="flex flex-col items-center text-3xl w-[40%] max-md:w-full max-md:mt-4 text-center gap-y-6">
            <h2 className="text-4xl max-md:text-2xl soleil-bold">
              {galleryItem.title}
            </h2>
            <p
              className="mb-6 text-xl max-md:text-sm"
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.6",
              }}
              dangerouslySetInnerHTML={{
                __html: galleryItem.description,
              }}
            />
          </div>
          <div className="w-[40%] max-md:w-full">
            <img
              src={`http://localhost:5000${galleryItem.img_two}`}
              alt={galleryItem.title}
              className="rounded-xl object-cover w-full h-[50vh]"
            />
          </div>
        </div>

        {/* Second Block */}
        <div className="flex items-center justify-center md:mt-10 gap-x-20 max-md:gap-y-6 py-4 max-md:flex-col-reverse">
          <div className="relative flex w-[40%] max-md:w-full h-[50vh] overflow-hidden rounded-xl">
            {galleryItem.images && galleryItem.images[activeIndex] ? (
              <img
                src={`http://localhost:5000${galleryItem.images[activeIndex].src}`}
                alt={`${galleryItem.title} ${activeIndex + 1}`}
                className="object-cover md:min-w-[800px] min-w-full h-full cursor-pointer rounded-xl transition-opacity duration-500 ease-in-out"
                onClick={() => openModal(activeIndex)}
                key={activeIndex}
              />
            ) : (
              <div className="text-center">No images available</div>
            )}

            {galleryItem.images && galleryItem.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-2xl"
                >
                  &#10094;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-2xl"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col items-start w-[40%] max-md:w-full max-md:mt-4">
            <h3 className="soleil-bold text-center pb-4 mx-auto text-2xl">
              Coup d'œil sur le projet
            </h3>
            <p
              className="text-xl max-md:text-sm"
              style={{
                whiteSpace: "pre-line",
                lineHeight: "1.6",
              }}
              dangerouslySetInnerHTML={{
                __html: galleryItem.full_desc,
              }}
            />
          </div>
        </div>

        {/* Third Block */}
        <div className="flex items-center justify-center md:mt-10 gap-x-20 max-md:gap-y-2 max-md:flex-col py-4 w-full max-md:border-b-2 max-md:pb-10">
          <div className="flex flex-row items-start w-[45%] max-md:w-full max-md:mt-4 text-lg">
            <div className="w-1/2 shadow p-4 rounded-lg mx-auto h-[45vh] max-md:w-full flex flex-col items-center justify-around">
              <div className="mb-2 w-full border-b">
                <p className="font-bold">Catégorie</p>
                <p>{galleryItem.category || "-"}</p>
              </div>
              <div className="mb-2 w-full border-b">
                <p className="font-bold">Localisation</p>
                <p>{galleryItem.tags[0] || "-"}</p>
              </div>
              <div className="mb-2 w-full border-b">
                <p className="font-bold">Superficie</p>
                <p>{galleryItem.tags[1] || "-"}</p>
              </div>
              <div className="mb-2 w-full border-b">
                <p className="font-bold">Travaux réalisés</p>
                <p>{galleryItem.work || "-"}</p>
              </div>
              <div className="flex items-center justify-center w-full">
                <Link
                  to="/estimation"
                  className="px-6 py-2 pt-3 mt-6 max-md:mb-4 soleil-medium bg-vert_light text-white rounded-lg hover:bg-vert_principal transition duration-300"
                >
                  Démarrer votre projet
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[45%] max-md:w-full">
            <img
              src={`http://localhost:5000${galleryItem.img_three}`}
              alt={galleryItem.title}
              className="rounded-xl object-cover w-full h-[45vh]"
            />
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="mt-10 flex flex-col justify-center items-center mb-8">
          <h2 className="text-3xl font-semibold">Nos autres projets :</h2>
          <div className="flex flex-wrap justify-center mt-4 text-center">
            {similarWorks.length > 0 ? (
              similarWorks.map((item) => (
                <div
                  key={item._id}
                  className="m-4 transition duration-300 transform hover:scale-105"
                >
                  <Link
                    to={`/realisations/${item.slug}`}
                    onClick={() => trackProjectClick(item.title)}
                  >
                    <div className="relative w-64 h-48 overflow-hidden rounded-xl shadow">
                      {item.images && item.images[0] ? (
                        <img
                          src={`http://localhost:5000${item.images[0].src}`}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                        />
                      ) : (
                        <div className="text-center">No images</div>
                      )}
                    </div>
                  </Link>
                  <h3 className="text-xl soleil-medium mt-2">{item.title}</h3>
                </div>
              ))
            ) : (
              <p>-</p>
            )}
          </div>
        </div>
      </div>
      <Footer />

      {/* Fullscreen Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="fixed mt-10 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button
          onClick={closeModal}
          className="absolute top-8 right-5 text-white text-5xl z-50"
        >
          &times;
        </button>
        <div className="w-full h-full flex justify-center items-center relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-3xl"
          >
            &#10094;
          </button>
          {galleryItem.images && galleryItem.images[activeIndex] && (
            <>
              <img
                src={`http://localhost:5000${galleryItem.images[activeIndex]?.src}`}
                alt={`${galleryItem.title} ${activeIndex + 1}`}
                className="object-cover w-auto h-auto max-h-full max-w-full"
              />
              <p className="text-white absolute bottom-5">
                {galleryItem.images[activeIndex]?.credit}
              </p>
            </>
          )}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded text-3xl"
          >
            &#10095;
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Gallery;
