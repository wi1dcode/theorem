import React, { useEffect, useState } from "react"
import { SectionsContainer, Section, ScrollToTopOnMount } from "react-fullpage"
import Questions from "./Questions"
import Swal from "sweetalert2"

const data = [
  {
    title: "Information",
    id: "start",
    link: "renovation",
    i: 0.5,
    type: "info",
    content: "my text",
  },
  {
    title: "Votre type de rénovation?",
    id: "renovation",
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
      "Je recherche un artisan",
      "Je recherche de l'inspiration et veux des conseils",
      "Je veux une estimation pré-achat immobilier",
      "J'ai déjà des devis et je veux comparer",
      "Autre",
    ],
  },
  {
    title: "Connaissez-vous les dimensions de la pièce ?",
    id: "sizes",
    link: "type",
    i: 3,
    type: "text",
  },
  {
    title: "Quels types de travaux voulez-vous effectuer ?",
    id: "type",
    link: "havePhoto",
    i: 4,
    type: "button",
    options: [
      "Démolition / création de cloisons",
      "Modification de structure",
      "Sols",
      "Murs",
      "Plafonds",
      "Fenêtres",
      "Plafonds",
      "Menuiserie",
      "Plomberie",
      "Electricité",
      "Chaudière",
      "Autre",
    ],
  },
  {
    title: "Avez-vous des plans d’architecte ?",
    id: "havePhoto",
    link: "help",
    i: 5,
    type: "button",
    options: ["Oui", "Non"],
  },
  {
    title:
      "Souhaitez vous l’aide d’un architecte ou d’un décorateur d’intérieur ?",
    id: "help",
    link: "surface",
    i: 6,
    type: "button",
    options: ["Oui", "Non"],
  },
  {
    title: "Précisez la surface totale du logement",
    id: "surface",
    link: "products",
    i: 7,
    type: "text",
  },
  {
    title:
      "Quel niveau de gamme souhaitez-vous pour tous les matériaux fournis ?",
    id: "products",
    link: "budget",
    i: 8,
    type: "button",
    options: ["Entrée de gamme", "Milieu de gamme", "Haut de gamme"],
  },
  {
    title: "Quel est votre budget pour l'ensemble des travaux ?",
    id: "budget",
    link: "information",
    i: 9,
    type: "button",
    options: [
      "Moins de 5 k€",
      "Entre 5 k€ et 20 k€",
      "Entre 20 k€ et 50 k€",
      "Entre 50 k€ et 100 k€ ",
      "Entre 100 k€ et 200 k€ ",
      "Plus de 200 k€",
    ],
  },
  {
    title: "information complémentaire",
    id: "information",
    link: "documents",
    i: 10,
    type: "text",
  },
  {
    title: " Avez-vous des documents / photo à nous transmettre ? ",
    id: "documents",
    link: "client",
    i: 11,
    type: "file",
  },
  {
    title: "Information",
    id: "client",
    link: "adresse",
    i: 11.5,
    type: "info",
    content: "Votre bien et vous",
  },
  {
    title: "Quelle est l'adresse du chantier ?",
    id: "adresse",
    link: "status",
    i: 12,
    type: "text",
  },
  {
    title: "Quel est le statut de propriété du bien ?",
    id: "status",
    link: "when",
    i: 13,
    type: "button",
    options: [
      "Je suis propriétaire",
      "Je suis en train de faire une offre",
      "Je suis locataire",
      "Autre",
    ],
  },
  {
    title: "Quand souhaitez-vous réaliser vos travaux ?",
    id: "when",
    link: "identite",
    i: 14,
    type: "button",
    options: ["Dès que possible", "Dans les 3 mois", "Dans l'année"],
  },
  {
    title: "Et pour finir... comment nous avez-vous connu ?",
    id: "identite",
    link: "name",
    i: 15,
    type: "button",
    options: [
      "Moteur du recherche",
      "Facebook",
      "Instagram",
      "TikTok",
      "Bouche à oreille",
      "Déjà client",
      "Autre",
    ],
  },
  {
    title: "Votre nom comlet",
    id: "name",
    link: "email",
    i: 16,
    type: "text",
  },
  {
    title: "Votre email",
    id: "email",
    link: "password",
    i: 17,
    type: "text",
  },
  {
    title: "Mot de passe",
    id: "password",
    link: "confirmation",
    i: 18,
    type: "text",
  },
  {
    title: "Confirmation",
    id: "confirmation",
    link: "",
    i: 19,
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
    <div className="bg-vert_principal">
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
