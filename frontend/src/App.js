import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react"
import UserContext from "./services/userContext"
import jwtdecode from "jwt-decode"

import Footer from "./components/Footer"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Estimation from "./pages/Estimation"

import Dashboard from "./pages/Dashboard"
import Menu from "./pages/Dashboard/Menu"
import Login from "./components/Login"

function App() {
  const { token } = useContext(UserContext)

  useEffect(() => {
    if (token) {
      const now = new Date().getTime()
      const expToken = jwtdecode(token).exp * 1000
      if (now > expToken) {
        localStorage.removeItem("token")
      }
    }
  }, [token])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/estimation" element={<Estimation />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route index element={<Menu />} />
          {/* <Route path="info" element={<Infos />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
