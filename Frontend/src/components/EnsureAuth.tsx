import { useEffect } from "react"
import { toast } from "sonner"

import { useUserAuthenticated } from "@/hooks/useUserAuthenticated"
import { AuthRouter } from "@/pages/AuthArea/router"
import { apiClient } from "@/services/api-client"

interface EnsureAuthProps {
  children: React.ReactNode
}

export default function EnsureAuth({ children }: EnsureAuthProps) {
  // useEffect(() => {
  //   async function checkAuth() {
  //     await apiClient.get("/user/authenticated")
  //       .then(response => {
  //         if (!response.data) {
  //           AuthRouter.push("Login")
  //         }
  //       }).catch(() => {
  //         toast("An Error has happend")
  //         AuthRouter.push("Login")
  //       })
  //   }

  //   checkAuth()
  // }, [])

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
