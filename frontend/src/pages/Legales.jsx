import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

function Legales() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
      <Helmet>
        <title>Mentions légales | Theorem Concept</title>
        <meta
          name="description"
          content="Mentions légales de Theorem Concept"
        />
      </Helmet>
      <NavBar />
      <section className="container mx-auto px-4 py-8 soleil">
        <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>
        <h2 className="text-2xl soleil-book mb-4">
          Éditeur et hébergeur du site
        </h2>
        <p className="soleil-light">
          Le site theorem-concept.fr est édité par Theorem, domiciliée à
          27 rue stalingrad, 95120, Ermont.
          <br />
          Email : contact@theorem-concept.fr
          <br />
          Téléphone : 09 82 24 07 35
          <br />
          Le directeur de la publication du site web "theorem-concept.fr" est
          Mohamed Hamdoune.
          <br />
          Le site theorem-concept.fr est hébergé par IONOS, dont le siège social
          est situé au 7 place de la Gare - 57200 Sarreguemines - France
        </p>
        <h2 className="text-2xl soleil-book mt-8 mb-4">Informations légales</h2>
        <p className="soleil-light">
          Theorem est une SAS, immatriculée au Registre du Commerce et
          des Sociétés de Paris sous le numéro 913627048
          <br />
          Numéro de TVA intracommunautaire : FR74913627048
        </p>
        <h2 className="text-2xl soleil-book mt-8 mb-4">
          Propriété intellectuelle
        </h2>
        <p className="soleil-light">
          Tous les contenus présents sur le site theorem-concept.fr sont
          couverts par le droit d'auteur. Toute reprise est dès lors
          conditionnée à l'accord de l'auteur en vertu de l'article L.122-4 du
          Code de la Propriété Intellectuelle.
        </p>
        <h2 className="text-2xl soleil-book mt-8 mb-4">
          Données personnelles et cookies
        </h2>
        <p className="soleil-light">
          Ce site collecte des informations sur les pages visitées par les
          utilisateurs via Google Analytics pour des statistiques de visite.
          <br />
          Les internautes de ce site sont informés que, lors de l'accès à ce
          site, des informations peuvent être temporairement conservées en
          mémoire ou sur leur disque dur afin de faciliter la navigation sur le
          site. Les internautes du site reconnaissent avoir été informés de
          cette pratique et autorisent Theorem à l'employer. Ils peuvent
          par ailleurs s'opposer à l'enregistrement de cookies en employant pour
          cela les fonctionnalités correspondantes sur leur navigateur.
        </p>
        <h2 className="text-2xl soleil-book mt-8 mb-4">
          Limitation de responsabilité
        </h2>
        <p className="soleil-light">
          Theorem ne saurait être tenu pour responsable des erreurs
          rencontrées sur le site, problèmes techniques, interprétation des
          informations publiées et conséquences de leur utilisation. Par
          conséquent, l'utilisateur reconnaît utiliser ces informations sous sa
          responsabilité exclusive.
        </p>
      </section>
      <Footer />
    </div>
  )
}

export default Legales
