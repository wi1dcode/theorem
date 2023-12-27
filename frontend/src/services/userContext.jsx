import { createContext, useEffect, useMemo, useState } from "react"
import { validateToken } from "../api/session"

const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [connected, setConnected] = useState(false)
  const [role, setRole] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))

  const checkSession = async () => {
    if (token) {
      try {
        const verifiedToken = await validateToken()
        console.log(verifiedToken)
        if (verifiedToken.userData) {
          setConnected(true)
          setRole(verifiedToken.userData)
        } else {
          setConnected(false)
          setRole(null)
          setToken(null)
          console.log("Token expired! " + "CONNECTED " + connected)
        }

        const now = new Date().getTime()
        const expToken = verifiedToken.exp * 1000
        if (now > expToken) {
          localStorage.removeItem("token")
          setConnected(false)
          setRole(null)
          setToken(null)
        }
      } catch (error) {
        console.log(
          "[userContext] Error while validating token, i will remove token:",
          error
        )
        localStorage.removeItem("token")
        setConnected(false)
        setRole(null)
        setToken(null)
      }
    } else {
      setConnected(false)
      setRole(null)
      setToken(null)
    }
  }

  useEffect(() => {
    checkSession()
  }, [token])

  const contextData = useMemo(
    () => ({
      connected,
      setConnected,
      token,
      setToken,
      role,
      checkSession,
    }),
    [connected, token, setConnected, role]
  )

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}

export default UserContext
