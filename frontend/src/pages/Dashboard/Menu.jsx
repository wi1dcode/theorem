import React from "react"
import { Widget } from "@typeform/embed-react"
import { Link } from "react-router-dom"

function Menu() {
  const handleSubmit = () => {}

  return (
    <section className="text-center">
      <div className="text-3xl font-bold mt-12">• Dashboard •</div>
      <p className="mt-12 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque
        dolorem beatae incidunt iste quidem officiis itaque aspernatur
        doloremque atque quis nesciunt magni aut corporis suscipit quod
        adipisci, dolorum perferendis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eveniet eaque dolorem beatae incidunt iste quidem
        officiis itaque aspernatur doloremque atque quis nesciunt magni aut
        corporis suscipit quod adipisci, dolorum perferendis. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Eveniet eaque dolorem beatae
        incidunt iste quidem officiis itaque aspernatur doloremque atque quis
        nesciunt magni aut corporis suscipit quod
      </p>
      <Link to="./new-project">
        <button className="p-2 bg-green-500 rounded-lg mt-12 text-white font-semibold">
          Créer un nouveau projet
        </button>
      </Link>
    </section>
  )
}

export default Menu
