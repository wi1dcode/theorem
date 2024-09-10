import React from "react";
import LittleCard from "../../components/LittleCard";
import savoirFaire from "../../services/savoirFaire.json";

import ConduitImage from "../../images/pro_conduit.jpg";
import BureauImage from "../../images/pro_bureau.jpg";
import ConseilsImage from "../../images/pro_conseils.jpg";
import AccompagnementImage from "../../images/pro_accompagnement.jpg";
import { useNavigate } from "react-router-dom";

const images = {
  ConduitImage,
  BureauImage,
  ConseilsImage,
  AccompagnementImage,
};

function ProSavoir() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact");
      const yOffset = -230;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="shadow-lg">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center gap-y-3 md:w-1/2 mx-auto py-6 text-center justify-center">
          <h2 className="soleil-book text-4xl">Notre savoir faire</h2>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {savoirFaire.map((card, index) => (
            <LittleCard
              key={card.id}
              title={card.title}
              description={card.description}
              image={images[card.image]}
              index={index}
              scrollToContact={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProSavoir;
