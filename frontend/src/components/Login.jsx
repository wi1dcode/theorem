import React, { useContext, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../services/userContext"
import { login } from "../api/users"

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
    <section className="flex flex-col gap-y-4 justify-center items-center">
      {!connected ? (
        <form>
          <div className="flex flex-col gap-y-4 mt-12">
            <input
              type="text"
              name="email"
              maxLength="50"
              placeholder="Email"
              className={`rounded-lg border bg-transparent px-2 py-1 w-[100%] ${
                redInput && "border-red-400"
              }`}
              onChange={(e) => {
                userLogin.current = {
                  ...userLogin.current,
                  email: e.target.value,
                }
              }}
              required
            />
            <input
              type="password"
              name="password"
              maxLength="50"
              placeholder="Mot de passe"
              className={`rounded-lg border bg-transparent px-2 py-1 w-[100%] ${
                redInput && "border-red-400"
              }`}
              onChange={(e) => {
                userLogin.current = {
                  ...userLogin.current,
                  password: e.target.value,
                }
              }}
              required
            />
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={logIn}
              className="bg-sable px-3 py-2 rounded-lg"
            >
              Se connecter
            </button>
          </div>
        </form>
      ) : (
        navigate("/dashboard")
      )}
    </section>
  )
}

export default Login
