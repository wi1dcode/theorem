import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "./services/userContext"

import Home from "./pages/Home"
// import Estimation from "./pages/Estimation"
import Login from "./pages/Login"
import About from "./pages/About"
import Realisations from "./pages/Realisations"
import Parteneriat from "./pages/Parteneriat"

import Pro from "./pages/Pro"
import ProSavoir from "./pages/Pro/ProSavoir"
import ProClients from "./pages/Pro/ProClients"
import ProWork from "./pages/Pro/ProWork"
import ProContact from "./pages/Pro/ProContact"
import ProMain from "./pages/Pro/ProMain"
import Gallery from "./pages/Gallery"
import EstimationEmbed from "./pages/EstimationEmbed"
import Expertises from "./pages/Expertises"
import Eco from "./pages/Eco"
import Energetique from "./pages/Energetique"
import History from "./pages/History"
import Loading from "./components/Loading"
import UserDashboard from "./pages/UserDashboard"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  const { connected, isAdmin, isLoading } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertises" element={<Expertises />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/:id" element={<Gallery />} />
        <Route path="/partenariat" element={<Parteneriat />} />
        <Route path="/eco" element={<Eco />} />
        <Route path="/histoire" element={<History />} />
        <Route path="/energetique" element={<Energetique />} />
        <Route path="/estimation" element={<EstimationEmbed />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            isLoading ? (
              <Loading />
            ) : connected && isAdmin ? (
              <AdminDashboard />
            ) : (
              <Navigate to={connected ? "/account" : "/login"} />
            )
          }
        />
        <Route
          path="/account/*"
          element={
            isLoading ? (
              <Loading />
            ) : connected && !isAdmin ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="pro/*" element={<Pro />}>
          <Route index element={<ProMain />} />
          <Route path="savoir-faire" element={<ProSavoir />} />
          <Route path="clients" element={<ProClients />} />
          <Route path="realisations" element={<ProWork />} />
          <Route path="contact" element={<ProContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
