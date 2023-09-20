import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { UserContextProvider } from "./services/userContext"

import "./fonts/Vogue.ttf"
import "./fonts/Avenir-Light.ttf"
import "./fonts/Avenir-Next-Condensed.ttf"
import "./fonts/Avenir-Next-Condensed-Light.ttf"
import "./fonts/Avenir-Next-Condensed-Bold.ttf"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContextProvider>
)

reportWebVitals()
