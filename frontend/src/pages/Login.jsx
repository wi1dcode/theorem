import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "../services/userContext"
import { login } from "../api/users"
import logo from "../images/icons/logo_black.png"
import NavBar from "../components/NavBar"

function Login() {
  const navigate = useNavigate()
  const userLogin = useRef({
    email: false,
    password: false,
  })
  const { connected, setConnected } = useContext(UserContext)
  const [redInput, setRedInput] = useState(false)

  useEffect(() => {
    if (connected) {
      navigate("/dashboard")
    }
  }, [connected, navigate])

  const logIn = async () => {
    try {
      const res = await login(userLogin.current)
      setConnected(res.user)
      const { token } = res
      localStorage.setItem("token", token)
      window.location.reload()
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setRedInput(true)
        setTimeout(() => {
          setRedInput(false)
        }, 3000)
      }
    }
  }

  return (
    <section
    className="h-screen"
      style={{
        backgroundImage: `url(https://app.globalradar.com/Images/login-background.jpg)`,
      }}
    >
      <NavBar />
      <div className="flex flex-col justify-center h-[80vh] items-center bg-center bg-cover">
        {!connected && (
          <>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
              <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                  <img className="w-auto h-20 sm:h-20" src={logo} alt="" />
                </div>

                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                  Welcome Back
                </h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                  Veuillez entrer vos identifiants de connexion pour continuer
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    logIn()
                  }}
                >
                  <div className="relative flex items-center mt-2.5">
                    <span className="absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>

                    <input
                      type="email"
                      name="email"
                      maxLength="50"
                      className={`block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 ${
                        redInput && "border-red-400"
                      }`}
                      placeholder="Email address"
                      onChange={(e) => {
                        userLogin.current = {
                          ...userLogin.current,
                          email: e.target.value,
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="relative flex items-center mt-4">
                    <span className="absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>

                    <input
                      type="password"
                      name="password"
                      maxLength="50"
                      className={`block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg ${
                        redInput && "border-red-400"
                      }`}
                      placeholder="Mot de passe"
                      onChange={(e) => {
                        userLogin.current = {
                          ...userLogin.current,
                          password: e.target.value,
                        }
                      }}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <Link
                      to="/"
                      className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                    >
                      Mot de passe oublié ?
                    </Link>

                    <button
                      type="submit"
                      className="tracking-wide rounded-lg bg-blue-700 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-blue-600"
                    >
                      <span className="w-full"> Se connecter </span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">
                  Nouveau client ?{" "}
                </span>

                <Link
                  to="/estimation"
                  className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Créer un compte
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Login
