import { createContext, useEffect, useMemo, useState } from "react"
import { get } from "../api/api"
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
          console.log(
            "Token will be refreshed!!!!! " + "CONNECTED " + connected
          )
          refreshToken()
        }

        const now = new Date().getTime()
        const expToken = verifiedToken.exp * 1000
        if (now > expToken) {
          localStorage.removeItem("token")
          setConnected(false)
        }
      } catch (error) {
        console.log("[userContext] Error while validating token, i will remove token:", error)
        localStorage.removeItem("token")
      }
    }
  }

  useEffect(() => {
    checkSession()
  }, [token])

  const refreshToken = async () => {
    try {
      const response = await get("/account/refresh")
      const newToken = response.data
      console.log(newToken)

      localStorage.setItem("token", newToken)
      setToken(newToken)
      setConnected(true)
    } catch (error) {
      console.error("Error in refreshing token:", error)
      localStorage.removeItem("token")
    }
  }

  const contextData = useMemo(
    () => ({
      connected,
      setConnected,
      token,
      setToken,
      role,
      refreshToken,
    }),
    [connected, token, setConnected, role]
  )

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}

export default UserContext
