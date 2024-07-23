import React from "react";
import { Link } from "react-router-dom";

import NavigateSvg from "../images/svg/NavigateSvg";
import CalendSvg from "../images/svg/CalendSvg";
import ContactMailSvg from "../images/svg/ContactMailSvg";
import ContactPhone from "../images/svg/ContactPhone";

function Contact() {
  return (
    <div>
      <div className="text-center overflow-hidden">
        <h2 className="text-3xl soleil-bold sm:text-4xl text-gray-900">
          Nous retrouver
        </h2>
      </div>
      <div className="container my-14 mx-auto md:px-6">
        <section className="mb-32">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <iframe
                    title="card"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2618.2047167522396!2d2.2552655!3d48.9876615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e667b0c1bcd85d%3A0x1d0ced49301af2e4!2s27%20Rue%20de%20Stalingrad%2C%2095120%20Ermont!5e0!3m2!1sfr!2sfr!4v1697448321889!5m2!1sfr!2sfr"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full basis-auto gap-4 lg:w-6/12 xl:w-8/12 flex justify-center flex-wrap max-md:flex-col max-md:items-center">
                <div className="h-[150px] w-[45%] max-md:w-full text-center py-6 px-6 shadow-md bg-white  flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">
                    <NavigateSvg />
                  </span>
                  <p>
                    Nous sommes situés à <br />
                    <Link
                      to="https://maps.app.goo.gl/QvpcjKJfxtMFy3Cb7"
                      target="_blank"
                      className="font-semibold"
                    >
                      27 Rue de Stalingrad, 95120 Ermont
                    </Link>
                  </p>
                </div>
                <div className="h-[150px] w-[45%] max-md:w-full text-center py-6 px-6 shadow-md bg-white  flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">
                    <CalendSvg />
                  </span>
                  <p>
                    Nous sommes ouverts
                    <br />
                    <span className="font-semibold">
                      Du lundi au samedi de 10h à 18h
                    </span>
                    <br />
                    <span className="font-semibold"> </span>
                    <span className="font-semibold"> </span>
                  </p>
                </div>
                <div className="w-[45%] h-[250px] max-xl:h-[300px] max-md:w-full text-center py-6 px-6 shadow-md bg-white flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">
                    <ContactMailSvg />
                  </span>
                  <p>
                    Nous écrire : <br />
                  </p>
                  <a
                    href="mailto:theorem.services@gmail.com"
                    className="text-marron flex flex-col items-center gap-y-2"
                  >
                    theorem.services@gmail.com
                    <button
                      type="button"
                      className="py-2 px-6 w-[200px] text-white font-semibold bg-marron rounded-lg overflow-hidden"
                    >
                      Ecrire
                    </button>
                  </a>
                </div>
                <div className="w-[45%]  h-[250px] max-xl:h-[300px] max-md:w-full text-center py-6 px-6 shadow-md bg-white flex flex-col items-center justify-center">
                  <span className="text-5xl mb-2">
                    <ContactPhone />
                  </span>
                  <p>Nous appeler :</p>
                  <a
                    href="tel:0695753702"
                    className="text-marron flex flex-col items-center gap-y-2"
                  >
                    06.95.75.37.02
                    <button
                      type="button"
                      className="py-2 px-4 w-[200px] text-white font-semibold bg-marron rounded-lg overflow-hidden"
                    >
                      Appelez
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
