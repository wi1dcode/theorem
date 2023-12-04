import React from "react"
import NavBar from "../components/NavBar"
import ProjectSvg from "../images/svg/ProjectSvg"
import MaconnerieSvg from "../images/svg/MaconnerieSvg"
import PeintureSvg from "../images/svg/PeintureSvg"
import PlomberieSvg from "../images/svg/PlomberieSvg"
import CouvertureSvg from "../images/svg/CouvertureSvg"

// import EtudesImage from "../images/etudes.jpg"
// import PilotageImage from "../images/pilotage.jpg"
// import ExecImage from "../images/exec.jpg"

import expertiseData from "../services/expertises.json"
import CircleSvg from "../images/svg/CircleSvg"
import LittleCard from "../components/LittleCard"
import TestSvg from "../images/svg/TestSvg"
// import expertiseInfo from "../services/expertisesInfo.json"

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
        return <TestSvg />

      default:
        return null
    }
  }

  // const getImg = (image) => {
  //   switch (image) {
  //     case "Etudes":
  //       return EtudesImage
  //     case "Pilotage":
  //       return PilotageImage
  //     case "Maintenance":
  //       return ExecImage
  //     default:
  //       return null
  //   }
  // }

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

        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0 h-[80vh]">
            <CircleSvg className="w-[50%]" />
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseData.map((card) => (
              <LittleCard
                key={card.id}
                title={card.title}
                description={card.description}
              >
                {getSvg(card.svg)}
              </LittleCard>
            ))}
          </div>
        </div>

        {/* <div className="w-full bg-marron py-4 avenir mb-20 flex max-md:flex-col justify-around items-center">
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
        </div> */}
      </section>
    </div>
  )
}

export default Expertises
