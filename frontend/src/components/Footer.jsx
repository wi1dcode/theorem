import React from "react"
import Logo from "../images/icons/logo_black.png"
import Social from "./Social"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="relative mt-2 bg-marron">
      <svg
        className="absolute -top-5 max-md:top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-marron"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="my-2 pr-2 flex flex-col gap-y-3 items-center justify-center">
          <Link
            to="/"
            aria-label="Go home"
            className="inline-flex items-center"
          >
            <span className="pr-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              <img src={Logo} alt="theorem-logo" className="w-[150px]" />
            </span>
          </Link>

          <Link to="/" className="w-full text-center">
            Mentions légales
          </Link>
        </div>

        <div className="flex max-md:flex-col-reverse max-md:gap-y-1 items-center justify-between pt-3 pr-3 pb-4 border-t border-anthracite sm:flex-row">
          <p className="text-sm text-black">
            © Copyright 2023. All rights reserved.
          </p>
          <Social />
        </div>
      </div>
    </footer>
  )
}

export default Footer
