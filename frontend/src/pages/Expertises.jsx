import React from "react"
import NavBar from "../components/NavBar"
import ProjectSvg from "../images/svg/ProjectSvg"
import ElectroSvg from "../images/svg/ElectroSvg"
import MaconnerieSvg from "../images/svg/MaconnerieSvg"
import PeintureSvg from "../images/svg/PeintureSvg"
import PlomberieSvg from "../images/svg/PlomberieSvg"
import CouvertureSvg from "../images/svg/CouvertureSvg"

import EtudesImage from "../images/etudes.jpg"
import PilotageImage from "../images/pilotage.jpg"
import ExecImage from "../images/exec.jpg"

import expertiseData from "../services/expertises.json"
import expertiseInfo from "../services/expertisesInfo.json"

function Expertises() {
  const getSvg = (icon) => {
    switch (icon) {
      case "ProjectSvg":
        return <ProjectSvg />
      case "PlomberieSvg":
        return <PlomberieSvg />
      case "MaconnerieSvg":
        return <MaconnerieSvg />
      case "PeintureSvg":
        return <PeintureSvg />
      case "CouvertureSvg":
        return <CouvertureSvg />
      case "ElectroSvg":
        return <ElectroSvg />

      default:
        return null
    }
  }

  const getImg = (image) => {
    switch (image) {
      case "Etudes":
        return EtudesImage
      case "Pilotage":
        return PilotageImage
      case "Maintenance":
        return ExecImage
      default:
        return null
    }
  }

  return (
    <div>
      <NavBar />
      <section>
        <article className="w-1/2 avenir mx-auto text-center">
          <h2 className="text-center text-4xl mt-6 mb-4">Nos expertises</h2>
          <span className="inline-block h-1 w-20 rounded bg-marron mb-6"></span>
          <div className="text-xl">
            <p className="mb-5">
              Afin de répondre à vos besoins, les équipes de Theorem Services se
              tiennent à vos côtés pour définir, piloter, exécuter et faire la
              maintenance de votre projet. Nos compétences techniques ainsi que
              nos expériences nous ont permis de faire une sélection de nos
              intervenants et de choisir les plus qualifiés.
            </p>
            <p>
              La qualité de nos ouvrages est et restera la priorité sur chacun
              de nos chantiers. Nous optimisons et contrôlons les ouvrages
              réalisés ; nous sommes donc présents physiquement sur tous nos
              chantiers et veillons à la sécurité de chacun des intervenants.
            </p>
          </div>
        </article>
        <div className="px-10 mt-8 w-[70%] max-md:w-full mx-auto grid gap-3 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {expertiseData.map((expert) => (
            <article
              className="duration-300 transform bg-white border-l-4 border-marron hover:-translate-y-2"
              key={expert.id}
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  <span className="absolute top-12 right-3">
                    {getSvg(expert.icon)}
                  </span>
                  <p>{expert.description}</p>
                </h6>
                <p className="text-sm w-1/2 max-md:w-[75%] text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="w-full bg-marron py-4 avenir mb-20 flex max-md:flex-col justify-around items-center">
          {expertiseInfo.map((info) => (
            <article className="mt-2 text-center" key={info.id}>
              <img
                src={getImg(info.image)}
                alt={info.title}
                className="rounded-lg w-[350px] h-[200px] mx-auto mb-2 object-cover"
              />
              <h2 className="font-semibold  text-2xl mb-2">{info.title}</h2>
              <ul className="text-center flex flex-col gap-y-2">
                {info.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Expertises
