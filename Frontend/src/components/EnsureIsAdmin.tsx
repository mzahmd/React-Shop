import { useEffect } from "react"

import { useUserContext } from "@/hooks/useUserContext"
import { HomeRouter } from "@/pages/HomeArea/router"

interface EnsureIsAdminProps {
  children: React.ReactNode
}
// http://localhost:5173/admin/user
export default function EnsureIsAdmin({ children }: EnsureIsAdminProps) {
  const { user } = useUserContext()

  useEffect(() => {
    if (user && user.role !== "ADMIN") {
      HomeRouter.push("Home")
    }
  }, [user])

  if (!user) {
    return <>Loading...</>
  }

  if (user.role !== "ADMIN") {
    return <>Redirecting...</>
  }

  return (
    <>
      {children}
    </>
  )
}