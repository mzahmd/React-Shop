import { useEffect } from "react"

import { useAuthenticated } from "@/hooks/useAuthenticated"
import { AuthRouter } from "@/pages/AuthArea/router"

interface EnsureAuthProps {
  children: React.ReactNode
}

export default function EnsureAuth({ children }: EnsureAuthProps) {
  const isAuthenticated = useAuthenticated()

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
