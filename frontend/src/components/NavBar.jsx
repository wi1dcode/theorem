import LogoBlack from "../images/icons/logo_black.png"

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-2 w-full bg-blanc">
      <article>
        <img src={LogoBlack} alt="logo_black" className="w-[100px]" />
      </article>
      <article className="mr-2">| | |</article>
    </nav>
  )
}

export default NavBar
