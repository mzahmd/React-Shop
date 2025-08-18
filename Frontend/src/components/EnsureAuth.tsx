import { useEffect } from "react"

import { useIsUserAuthenticated } from "@/hooks/useIsUserAuthenticated"
import { AuthRouter } from "@/pages/AuthArea/router"

interface EnsureAuthProps {
  children: React.ReactNode
}

export default function EnsureAuth({ children }: EnsureAuthProps) {
  const isAuthenticated = useIsUserAuthenticated()

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
