import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Footer from "./components/Footer"

import Home from "./pages/Home"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
