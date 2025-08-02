import { Router } from "@/router"
import { apiClient } from "@/services/api-client"

export default function useLogout() {
  function logout() {
    apiClient.post("/auth/logout").then(() => {
      localStorage.removeItem("user")
      Router.push("AuthLogin")
    })
  }

  return { logout }
}
