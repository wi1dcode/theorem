import React from "react"
import Header from "../components/Header"
import Work from "../components/Work"
import Services from "../components/Services"
import { Step } from "../components/Step"
import Faq from "../components/FAQ"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"

function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="w-full mt-2 px-2">
        <Work />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Services />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Step />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Reviews />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Faq />
      </div>
      <div className="w-full mt-2 px-2 mb-2">
        <Contact />
      </div>
    </main>
  )
}

export default Home
