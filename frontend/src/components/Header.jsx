import React from "react";
import TheoremLogo from "../images/svg/TheoremLogo";
import HeaderBg from "../images/bg-main.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className={`bg-cover pt-10 bg-no-repeat w-full h-[80vh] flex flex-col gap-y-4 justify-center items-center`}
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      <article className="flex w-full h-full flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-y-8 w-[50%] max-lg:w-[70%]">
          <div className="flex items-center w-full flex-col justify-center">
            <TheoremLogo className="w-20 h-20 mb-6" />
            {/* <h2 className="soleil-bold text-5xl text-white">Theorem</h2> */}
            <h1 className="text-center mt-4 mb-4 text-white rounded-lg max-md:text-sm text-4xl w-full soleil-bold">
              Concevoir. Créer. Célébrer.
            </h1>
            <p className="text-white text-center text-2xl soleil-light">
              Une approche simple et agile pour construire votre projet de vie.
            </p>
          </div>
          <Link to="/realisations">
            <button
              className="bg-vert_light shadow text-white text-2xl max-md:text-sm rounded-lg p-2 pt-3 px-8 soleil"
              type="button"
            >
              Découvrir nos projets
            </button>
          </Link>
        </div>
      </article>
    </header>
  );
}

export default Header;
