import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import ReactGA from "react-ga4";
import UserContext from "./services/userContext";
import CookieConsent from "./components/CookieConsent";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Realisations from "./pages/Realisations";
import Parteneriat from "./pages/Parteneriat";
import Pro from "./pages/Pro";
import ProSavoir from "./pages/ProPage/ProSavoir";
import ProClients from "./pages/ProPage/ProClients";
import ProWork from "./pages/ProPage/ProWork";
import ProContact from "./pages/ProPage/ProContact";
import ProMain from "./pages/ProPage/ProMain";
import Gallery from "./pages/Gallery";
import EstimationEmbed from "./pages/EstimationEmbed";
import Expertises from "./pages/Expertises";
import Energetique from "./pages/Energetique";
import Loading from "./components/Loading";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Activation from "./pages/Activation";
import CandidatePro from "./pages/CandidatePro";
import ProDashboard from "./pages/ProDashboard";
import About from "./pages/About";
import Legales from "./pages/Legales";
import Politique from "./pages/Politique";

function App() {
  const { connected, isAdmin, isPro, isLoading } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      ReactGA.initialize("G-W1JCS32XBY", { debug: true });
    }
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mentions-legales" element={<Legales />} />
        <Route path="politique" element={<Politique />} />
        <Route path="/services" element={<Home />} />
        <Route path="/expertises" element={<Expertises />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/realisations/:slug" element={<Gallery />} />
        <Route path="/partenariat" element={<Parteneriat />} />
        <Route path="/about" element={<About />} />
        <Route path="/energetique" element={<Energetique />} />
        <Route path="/estimation" element={<EstimationEmbed />} />
        <Route path="/candidate" element={<CandidatePro />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/activate/:link" element={<Activation />} />
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
          path="/pro-account/*"
          element={
            isLoading ? (
              <Loading />
            ) : connected && isPro ? (
              <ProDashboard />
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
            ) : connected && !isAdmin && !isPro ? (
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
      <CookieConsent />
    </>
  );
}

export default App;
