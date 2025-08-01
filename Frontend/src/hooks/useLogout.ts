import { Router } from "@/router"

export default function useLogout() {
  function logout() {
    localStorage.removeItem("user")
    Router.push("AuthLogin")
  }

  return { logout }
}
