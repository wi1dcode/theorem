import React, { useEffect, useState } from "react"
import { SectionsContainer, Section, ScrollToTopOnMount } from "react-fullpage"
import Questions from "./Questions"
import Swal from "sweetalert2"

const data = [
  {
    title: "Information",
    id: "info_firstname",
    link: "firstname",
    i: 0.5,
    type: "info",
    content: "my text",
  },
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
    link: "info_lastname",
    i: 2,
    type: "text",
  },
  {
    title: "Information",
    id: "info_lastname",
    link: "choice",
    i: 2.5,
    type: "info",
    content: "my text",
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
