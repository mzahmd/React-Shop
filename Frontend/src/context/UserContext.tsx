import { createContext, useEffect, useState } from "react"
import { toast } from "sonner"

import type { IUser } from "@/interface/IUser"
import { AuthRouter } from "@/pages/AuthArea/router"
import { apiClient } from "@/services/api-client"

interface IUserContextType {
  user: IUser | null
  setUser: (user: IUser | null) => void
  logoutUser: () => void
}

const UserContext = createContext<IUserContextType | null>(null)

interface UserProviderProps {
  children: React.ReactNode
}

function UserContextProvider({ children }: UserProviderProps) {
  const [user, setUserState] = useState<IUser | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUserState(JSON.parse(storedUser))
    }
    else {
      localStorage.removeItem("user")
    }
  }, [])

  function setUser(user: IUser | null) {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    } else {
      localStorage.removeItem("user")
    }
    setUserState(user)
  }

  function logoutUser() {
    apiClient.post("/auth/logout")
      .then(() => {
        setUser(null)
        localStorage.removeItem("user")
        AuthRouter.push("Login")
      })
      .catch(() => {
        toast("Logout failed")
      })
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      logoutUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }

