import { createContext, useEffect, useMemo, useState } from "react"
import { validateToken } from "../api/session"
import { getMe } from "../api/client"

const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [connected, setConnected] = useState(null)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))

  const checkSession = async () => {
    if (token) {
      try {
        const verifiedToken = await validateToken()
        if (verifiedToken.userData) {
          setConnected(true)
          const userInfo = await getMe()
          setUser(userInfo)
        } else {
          setConnected(false)
          setUser(null)
          setToken(null)
        }

        const now = new Date().getTime()
        const expToken = verifiedToken.exp * 1000
        if (now > expToken) {
          localStorage.removeItem("token")
          setConnected(false)
          setUser(null)
          setToken(null)
        }
      } catch (error) {
        console.log(error)
        localStorage.removeItem("token")
        setConnected(false)
        setUser(null)
        setToken(null)
      }
    } else {
      setConnected(false)
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
      user,
      setUser,
      checkSession,
    }),
    [connected, token, setConnected, user, setUser]
  )

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}

export default UserContext
