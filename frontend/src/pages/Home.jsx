import React from "react"
import Header from "../components/Header"
import Work from "../components/Work"
import Services from "../components/Services"

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
    </main>
  )
}

export default Home
