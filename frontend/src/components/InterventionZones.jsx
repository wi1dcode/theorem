import React from "react";
import AnalyseSvg from "../images/svg/AnalyseSvg";

const interventionZones = [
  {
    name: "Paris (75)",
    svg: AnalyseSvg,
    hashtag: "#croissant",
  },
  {
    name: "Les Yvelines (78)",
    svg: AnalyseSvg,
    hashtag: "#versailles",
  },
  { name: "Hauts-de-Seine (92)", svg: AnalyseSvg, hashtag: "#ladefense" },
  {
    name: "Seine-Saint-Denis (93)",
    svg: AnalyseSvg,
    hashtag: "#stadedefrance",
  },
  { name: "Val-de-Marne (94)", svg: AnalyseSvg, hashtag: "#pont" },
  { name: "Val-d'Oise (95)", svg: AnalyseSvg, hashtag: "#lys" },
];

export default function InterventionZones() {
  return (
    <section className="py-12 bg-marron/60 text-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            Le reconditionnement immobilier
          </h2>
          <h3 className="text-2xl font-semibold text-center">
            Nos zones d’interventions
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {interventionZones.map((zone, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex flex-col items-center"
            >
              <zone.svg className="mb-4" />
              <h3 className="mt-4 text-xl font-semibold">{zone.name}</h3>
              <p className="mt-2">{zone.hashtag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
