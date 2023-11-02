import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Quelque chose n'est pas clair ou besoin d'aide ?
        </h2>
        <p className="text-xl mt-4 text-gray-700">
          Détendez-vous, nous sommes prêts à vous accompagner!
        </p>
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
              <div className="w-full basis-auto gap-4 lg:w-6/12 xl:w-8/12 flex justify-center flex-wrap">
                <div className="h-full w-[45%] text-center py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">🗺</span>
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
                <div className="h-full w-[45%] text-center py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">💼</span>
                  <p>Informations complémentaires...</p>
                </div>
                <div className="h-full w-[45%] text-center py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">📧</span>
                  <p>
                    Contactez-nous pour nous demander de l'aide, nous vous
                    contacterons dans les plus brefs délais
                  </p>
                  <a
                    href="mailto:contact@theorem-servies.com"
                    className="text-marron flex flex-col items-center gap-y-2"
                  >
                    contact@theorem-servies.com
                    <button
                      type="button"
                      className="py-2 px-6 text-white font-semibold bg-marron rounded-full overflow-hidden"
                    >
                      Ecrire
                    </button>
                  </a>
                </div>
                <div className="h-full w-[45%] text-center py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">☎️</span>
                  <p>
                    Contactez-nous pour nous demander de l'aide, nous vous
                    contacterons dans les plus brefs délais
                  </p>
                  <a
                    href="tel:555-555-555"
                    className="text-marron flex flex-col items-center gap-y-2"
                  >
                    555-555-555
                    <button
                      type="button"
                      className="py-2 px-4 text-white font-semibold bg-marron rounded-full overflow-hidden"
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
