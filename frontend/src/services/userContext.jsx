import { createContext, useEffect, useMemo, useState } from "react"
import jwtDecode from "jwt-decode"

const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [connected, setConnected] = useState(false)
  const [role, setRole] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))

  useEffect(() => {
    if (token) {
      setConnected(true)
      const decodedToken = jwtDecode(token)
      setRole(decodedToken)
    } else {
      setConnected(false)
    }
  }, [token])

  const contextData = useMemo(
    () => ({
      connected,
      setConnected,
      token,
      setToken,
      role,
    }),
    [connected, token, setConnected, role]
  )

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}

export default UserContext
