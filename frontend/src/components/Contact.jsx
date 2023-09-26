import React from "react"

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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20945.044392749984!2d2.2579626999999998!3d48.989073000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e667ba7576b8b5%3A0x40b82c3688b3320!2zOTUxMjAg0K3RgNC80L7QvQ!5e0!3m2!1sru!2sfr!4v1695654711131!5m2!1sru!2sfr"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full basis-auto gap-4 lg:w-6/12 xl:w-8/12 flex justify-center flex-wrap">
                <div className="h-full w-[45%] text-center py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">🗺</span>
                  <p>nous sommes situés à...</p>
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
                    className="text-yellow-400 flex flex-col items-center gap-y-2"
                  >
                    contact@theorem-servies.com
                    <button
                      type="button"
                      className="py-2 px-6 text-white font-semibold bg-yellow-400 rounded-full overflow-hidden"
                    >
                      Ecrire
                    </button>
                  </a>
                </div>
                <div className="h-full w-[45%] py-6 px-6 bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-y-2">
                  <span className="text-5xl">☎️</span>
                  <p>
                    Contactez-nous pour nous demander de l'aide, nous vous
                    contacterons dans les plus brefs délais
                  </p>
                  <a
                    href="tel:555-555-555"
                    className="text-yellow-400 flex flex-col items-center gap-y-2"
                  >
                    555-555-555
                    <button
                      type="button"
                      className="py-2 px-4 text-white font-semibold bg-yellow-400 rounded-full overflow-hidden"
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
  )
}

export default Contact
