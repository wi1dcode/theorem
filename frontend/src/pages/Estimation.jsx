import React, { useState } from "react"
import { SectionsContainer, Section, ScrollToTopOnMount } from "react-fullpage"
import Questions from "./Questions"
import Swal from "sweetalert2"

const data = [
  {
    title: "Nom?",
    id: "firstname",
    link: "lastname",
    i: 1,
    type: "text",
  },
  {
    title: "Prenom?",
    id: "lastname",
    link: "choice",
    i: 2,
    type: "text",
  },
  {
    title: "Choisissez l'un des trois",
    id: "choice",
    link: "files",
    i: 3,
    type: "button",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    title: "Envoyer les fichiers?",
    id: "files",
    link: "",
    i: 4,
    type: "file",
  },
]

// const infoBlocks = [
//   {
//     id: "info_first",
//     content: "text 1",
//   },
//   {
//     id: "info_second",
//     content: "text 2",
//   },
// ]

const anchorFunc = (anchor_data) => {
  return anchor_data.map((item) => item.id)
}

function Estimation() {
  const [obj, setObj] = useState({})

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

  const inputDataHandler = (name, value, files) => {
    setObj((prevState) => {
      return {
        ...prevState,
        [name]: value,
        files: files,
      }
    })
  }

  const submitBtnHandler = () => {
    Swal.fire({
      title: "Good job!",
      html: `
        <div>
          <p>firstname: ${obj.firstname}</p>
          <p>lastname: ${obj.lastname}</p>
          <p>Choice: ${obj.choice}</p>
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
