import React, { useState, useEffect } from "react"

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag("js", new Date())
    gtag("config", "G-W1JCS32XBY")
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 md:right-0 p-4 z-50 w-1/4 max-md:w-full soleil">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="bg-white rounded-lg border-vert border p-6 mx-auto">
          <div className="w-16 mx-auto relative -mt-10 mb-3">
            <img
              className="-mt-1"
              src="https://www.svgrepo.com/show/30963/cookie.svg"
              alt="Cookie Icon SVG"
            />
          </div>
          <span className="block leading-normal text-gray-800 text-md mb-3 soleil">
            Ce site utilise des cookies pour vous garantir la meilleure
            expérience sur notre site web.
          </span>
          <div className="flex items-center justify-between">
            <button
              onClick={handleDecline}
              className="text-xs text-gray-400 hover:text-gray-800 mr-1"
            >
              Refuser
            </button>
            <div className="w-1/2">
              <button
                onClick={handleAccept}
                className="py-2 px-4 bg-vert hover:bg-vert/90 text-white w-full transition ease-in duration-200 text-center text-base font-book shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
