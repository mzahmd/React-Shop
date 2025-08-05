import { useEffect, useState } from "react"

import { apiClient } from "@/services/api-client"

export function useUserAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await apiClient.get("/user/authenticated")
        setIsAuthenticated(response.data)
      } catch {
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  return isAuthenticated
}
