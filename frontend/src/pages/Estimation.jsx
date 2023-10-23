import React, { useEffect, useState } from "react"
import { SectionsContainer, Section, ScrollToTopOnMount } from "react-fullpage"
import Questions from "./Questions"
import Swal from "sweetalert2"

const data = [
  {
    title: "Information",
    id: "info_firstname",
    link: "type",
    i: 0.5,
    type: "info",
    content: "my text",
  },
  {
    title: "Votre type de rénovation?",
    id: "type",
    link: "search",
    i: 1,
    type: "button",
    options: [
      "Appartement ",
      "Maison",
      "Commerce / Restaurant",
      "Bureaux",
      "Rénovation énergétique",
      "Extension",
      "Surélévation",
    ],
  },
  {
    title: "Quel est le but de votre recherche?",
    id: "search",
    link: "sizes",
    i: 2,
    type: "button",
    options: [
      "électricité",
      "isolation",
      "menuiseries intérieures",
      "toiture / charpente / combles",
      "sols / murs / plafonds",
      "cuisine",
      "fenêtres",
      "plomberie",
      "aménagement / agencement",
    ],
  },
  {
    title: "Connaissez-vous les dimensions de la pièce ?",
    id: "sizes",
    link: "info_lastname",
    i: 3,
    type: "button",
    options: ["Oui", "Non"],
  },
  {
    title: "Information",
    id: "info_lastname",
    link: "files",
    i: 3.5,
    type: "info",
    content: "my text",
  },
  {
    title: "Envoyer les fichiers?",
    id: "files",
    link: "confirmation",
    i: 4,
    type: "file",
  },
  {
    title: "Confirmation",
    id: "confirmation",
    link: "",
    i: 5,
    type: "info",
    content: "confirmation",
  },
]

const anchorFunc = (anchor_data) => {
  return anchor_data.map((item) => item.id)
}

function Estimation() {
  const [obj, setObj] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("estimation")) || {}
    return savedData
  })

  useEffect(() => {
    localStorage.setItem("estimation", JSON.stringify(obj))
  }, [obj])

  const inputDataHandler = (name, value, files) => {
    const isInfoType = data.find(
      (item) => item.id === name && item.type === "info"
    )
    if (!isInfoType) {
      setObj((prevState) => ({
        ...prevState,
        [name]: value,
        files: files,
      }))
    }
  }

  let options = {
    sectionClassName: "section",
    anchors: anchorFunc(data),
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: false,
  }

  const submitBtnHandler = () => {
    Swal.fire({
      title: "Good job!",
      html: `
        <div>
          <p>${obj.type}</p>
          <p>${obj.search}</p>
          <p>${obj.sizes}</p>
        </div>
      `,
      icon: "success",
    })

    console.log(obj)
  }

  return (
    <div className="bg-marron">
      <ScrollToTopOnMount />
      <SectionsContainer {...options}>
        {data.map((item, i) => {
          return (
            <Section key={i}>
              <div>
                <header>
                  <Questions
                    item={item}
                    index={i}
                    isSubmit={i === data.length - 1 ? true : false}
                    inputDataHandler={inputDataHandler}
                    submitBtnHandler={submitBtnHandler}
                    data={data}
                  />
                </header>
              </div>
            </Section>
          )
        })}
      </SectionsContainer>
    </div>
  )
}

export default Estimation
