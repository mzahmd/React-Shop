import { createContext, useEffect, useState } from "react"
import { toast } from "sonner"

import type { IUser } from "@/interface/IUser"
import { HomeRouter } from "@/pages/HomeArea/router"
import { apiClient } from "@/services/api-client"

interface IUserContextType {
  user: IUser | null
  setUser: (user: IUser | null) => void
  logoutUser: () => void
  deleteUser: () => void
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
        HomeRouter.push("Home")
      })
      .catch(() => {
        toast("Logout failed")
      })
  }

  function deleteUser() {
    apiClient.delete("/user")
      .then(() => {
        setUser(null)
        localStorage.removeItem("user")
        HomeRouter.push("Home")
        toast("Your profile has been deleted")
      })
      .catch(() => {
        toast("Delete failed")
      })
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      logoutUser,
      deleteUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }

