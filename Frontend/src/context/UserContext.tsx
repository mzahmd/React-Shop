import { createContext, useState } from "react"

import type { IUser } from "@/interface/IUser"

interface IUserContextType {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const UserContext = createContext<IUserContextType | null>(null)

interface UserProviderProps {
  children: React.ReactNode
}

function UserContextProvider({ children }: UserProviderProps) {
  const [user, setUserState] = useState<IUser | null>(null)

  function setUser(user: IUser | null) {
    setUserState(user)
  }

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
