import React, { useState } from "react";
import FiveStarsSvg from "../images/svg/FiveStarsSvg";
import ReviewsBgImage from "../images/nos_clients_parlent_de_nous_1.jpg";
// import ReviewsBgImageTwo from "../images/nos_clients_parlent_de_nous_2.jpg"
import LinkArrow from "../images/svg/LinkArrow.jsx";

export default function Reviews() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      project: "Projet Jules César",
      name: "Amel",
      title: "Paris, France",
      quote:
        "Une équipe très professionnelle et à l’écoute, qui a parfaitement su répondre à mes attentes. Les échanges avec Théorèm ont été réguliers et agréables, rendant le suivi du projet fluide et sans stress. Le résultat est soigné, conforme à mes souhaits. Je recommande très vivement !",
      stars: 5,
      backgroundImage: ReviewsBgImage,
    },
    // {
    //   avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    //   project: "Projet 2",
    //   name: "Xavier R.",
    //   title: "Paris, France",
    //   quote:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    //   stars: 4,
    //   backgroundImage: ReviewsBgImageTwo,
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h3 className="text-center max-md:text-2xl text-4xl pb-6 pt-4 soleil z-10">
        Nos clients parlent de nous
      </h3>
      <section
        className="relative py-12 bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${testimonials[currentIndex].backgroundImage})`,
          height: "600px",
        }}
      >
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 flex justify-end w-full soleil">
          <div className="mt-14 flex justify-end items-center">
            <div className="max-w-lg bg-white p-8 shadow-lg mx-4 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  {currentIndex + 1}/{testimonials.length}
                </span>
                <FiveStarsSvg
                  className="w-32 h-6"
                  stars={testimonials[currentIndex].stars}
                />
              </div>
              <h3 className="text-xl font-bold pb-2 mb-4 text-center border-b text-vert_principal">
                {testimonials[currentIndex].project}
              </h3>
              <h3 className="text-xl font-bold mb-2 ">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-800 courier-prime-regular mb-4">
                {testimonials[currentIndex].quote}
              </p>

              <div className="mt-6 flex justify-end items-end gap-x-4">
                <button
                  onClick={handlePrev}
                  className="text-gray-500 border p-2"
                >
                  <LinkArrow className="h-[25px] w-[25px]" right fill="gray" />
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-500 border p-2"
                >
                  <LinkArrow
                    className="h-[25px] w-[25px]"
                    style={{ transform: "rotate(180deg)" }}
                    fill="gray"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
