import { useEffect } from "react"

import { useUserContext } from "@/hooks/useUserContext"
import { HomeRouter } from "@/pages/HomeArea/router"

interface EnsureIsAdminProps {
  children: React.ReactNode
}

export default function EnsureIsAdmin({ children }: EnsureIsAdminProps) {
  const { user } = useUserContext()

  useEffect(() => {
    if (user && user.role !== "ADMIN") {
      HomeRouter.push("Home")
    }
  }, [user])

  return (
    <>
      {children}
    </>
  )
}