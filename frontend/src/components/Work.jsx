import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";
import { getProjects } from "../api/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import Loading from "./Loading";

function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="pb-10 shadow-md overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="pb-4">
          <h2 className="text-center max-md:text-2xl text-4xl pt-4 soleil z-10">
            Nos projets
          </h2>
          <p className="mt-2 courier-prime-regular text-xl">
            Découvrez nos réalisations
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-x-20 max-md:flex-col-reverse max-md:gap-y-6">
        <div className="w-full md:ml-2 max-md:w-[80%]">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              250: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Link to={`/realisations/${project.slug}`}>
                  <img
                    src={`${window.location.origin}/api${project.img}`}
                    alt={`project-${project.title}`}
                    className="object-cover w-full h-[300px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
