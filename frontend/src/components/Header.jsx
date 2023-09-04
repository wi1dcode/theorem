import React from "react"

function Header() {
  return (
    <header className="figure2 bg-sable w-full h-[250px] p-7 flex flex-col gap-y-4">
      <article className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Theorem Service</h1>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          dolorum?
        </p>
      </article>
      <article>
        <button className="bg-blanc rounded-lg p-2 px-4">Button</button>
      </article>
    </header>
  )
}

export default Header
