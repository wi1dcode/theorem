import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

function Pro() {
  return (
    <>
      <Helmet>
        <title>Espace Professionnel | Theorem Concept</title>
        <meta
          name="description"
          content="Bienvenue dans l'Espace Professionnel de Theorem Concept. Découvrez comment nos compétences et notre expertise peuvent contribuer au succès de vos projets professionnels."
        />
      </Helmet>
      <div className="bg-gray-50 z-50 w-full sticky top-0">
        <NavBar />
      </div>
      <div className="soleil">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Pro;
