import { useEffect } from "react"

import { useAuthenticated } from "@/hooks/useAuthenticated"
import { HomeRouter } from "@/pages/HomeArea/router"

interface EnsureAuthProps {
  children: React.ReactNode
}

export default function EnsureAuth({ children }: EnsureAuthProps) {
  const isAuthenticated = useAuthenticated()

  useEffect(() => {
    if (isAuthenticated === false) {
      HomeRouter.push("Home")
    }
  }, [isAuthenticated])

  if (isAuthenticated === null) {
    return <>Loading...</>
  }

  return <>{children}</>
}
