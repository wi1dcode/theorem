import React from "react";
import logo from "../../images/icons/logo_black.png";
import CountUp from "react-countup";

import ProSavoir from "./ProSavoir.jsx";
import ProClients from "./ProClients.jsx";
import ProContact from "./ProContact.jsx";

function Pro() {
  return (
    <div className="mt-6" id="main">
      <div>
        <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
          <img src={logo} alt="logo" className="pb-6 w-[500px] mx-auto" />
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Theorem Services c'est:
            </h2> */}
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              numquam alias deserunt consectetur ab obcaecati, et excepturi enim
              vel vero quo neque doloribus! Esse quasi ab facere tempore sint
              commodi?
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-marron hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  The doctor said
                </h6>
                <p className="text-sm text-gray-900">
                  Sportacus andrew weatherall goose Refined gentlemen super
                  mario des lynam alpha trion zap rowsdower.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-marron hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Skate ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-marron hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Baseball ipsum dolor
                </h6>
                <p className="text-sm text-gray-900">
                  Bro ipsum dolor sit amet gaper backside single track, manny
                  Bike epic clipless. Schraeder drop gondy.
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-marron hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">They urge you</h6>
                <p className="text-sm text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quaerat, at illo cumque culpa laudantium!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-marron focus:shadow-outline focus:outline-none"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              The quick, brown fox jumps over a lazy dog
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
            <div className="relative flex flex-col items-center justify-around h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
              <div className="px-12 py-2 text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                  <CountUp start={0} end={100} duration={5} separator="," />
                </h6>
                <p className="text-center md:text-base font-semibold">
                  chantiers par an
                </p>
                <p className="text-center mt-2 md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid voluptatibus ipsam ipsa. Deserunt, tenetur id?
                </p>
              </div>
              <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
              <div className="px-12 py-2 text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                  <CountUp start={0} end={11} duration={5} suffix="M€" />
                </h6>
                <p className="text-center md:text-base font-semibold">
                  de chiffre d’affaires
                </p>
                <p className="text-center mt-2 md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid voluptatibus ipsam ipsa. Deserunt, tenetur id?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12" id="savoir">
        <ProSavoir />
      </div>
      <div className="mb-6" id="clients">
        <ProClients />
      </div>
      <div className="mt-6" id="contact">
        <ProContact />
      </div>
    </div>
  );
}

export default Pro;
