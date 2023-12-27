import { Link } from "react-router-dom"
import FacebookSvg from "../images/svg/FacebookSvg"
import PinterestSvg from "../images/svg/PinterestSvg"
import InstagramSvg from "../images/svg/InstagramSvg"
import LinkedIn from "../images/svg/LinkedIn"

function Social() {
  return (
    <div className="flex gap-x-3">
      <Link to="/">
        <FacebookSvg />
      </Link>
      <Link to="/">
        <PinterestSvg />
      </Link>
      <Link to="/" className="flex">
        <InstagramSvg />
      </Link>
      <Link to="/">
        <LinkedIn />
      </Link>
    </div>
  )
}

export default Social
