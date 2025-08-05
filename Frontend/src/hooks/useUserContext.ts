import { useContext } from "react"

import { UserContext } from "@/context/UserContext"

export function useUserContext() {
  const userContext = useContext(UserContext)

  if (!userContext) {
    throw new Error("User Context is not initialized")
  }

  return userContext
}
