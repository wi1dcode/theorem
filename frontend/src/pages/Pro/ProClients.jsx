import React from "react"

const data = [
  {
    name: "client",
    image: "link",
  },
  {
    name: "client",
    image: "link",
  },
  {
    name: "client",
    image: "link",
  },
  {
    name: "client",
    image: "link",
  },
  {
    name: "client",
    image: "link",
  },
]

function ProClients() {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl">Ils nous font confience</h2>
      </div>
      <div>
        {data.map((clients) => {
          return <div>{clients.name}</div>
        })}
      </div>
    </div>
  )
}

export default ProClients
