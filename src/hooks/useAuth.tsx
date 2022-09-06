import { createContext, useContext, useState } from "react"

export const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<any>(null)
  const [sessionUserName, setSessionUserName] = useState<any>(null)
  const [sessionUserPassword, setSessionUserPassword] = useState<any>(null)
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        sessionUserName,
        setSessionUserName,
        sessionUserPassword,
        setSessionUserPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
