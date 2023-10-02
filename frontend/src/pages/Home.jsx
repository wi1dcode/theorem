import React from "react"
import Header from "../components/Header"
import Work from "../components/Work"
import Services from "../components/Services"
import { Step } from "../components/Step"
import Faq from "../components/FAQ"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import Macbook from "../images/mac.png"

function Home() {
  return (
    <main className="w-full">
      <NavBar />
      <Header />
      <div id="work" className="w-full mt-2 px-2">
        <Work />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Services />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Step />
      </div>
      <div className="w-full mt-24 px-2 mb-2">
        <Reviews />
      </div>
      <div className="w-full mt-8 px-2 mb-2 flex items-center justify-center">
        <img src={Macbook} alt="Mac" />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Faq />
      </div>
      <div id="contact" className="w-full mt-2 px-2 mb-2">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Home
