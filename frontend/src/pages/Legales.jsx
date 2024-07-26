import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Legales() {
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
      <section className="h-[66.2vh]">Coming soon...</section>
      <Footer />
    </div>
  )
}

export default Legales
