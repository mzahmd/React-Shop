import { useEffect } from "react"

import { useUserAuthenticated } from "@/hooks/useUserAuthenticated"
import { AuthRouter } from "@/pages/AuthArea/router"

interface EnsureAuthProps {
  children: React.ReactNode
}

export default function EnsureAuth({ children }: EnsureAuthProps) {
  const isAuthenticated = useUserAuthenticated()

  useEffect(() => {
    if (isAuthenticated === false) {
      AuthRouter.push("Login")
    }
  }, [isAuthenticated])

  if (isAuthenticated === null) {
    return <>Loading...</>
  }

  return <>{children}</>
}
