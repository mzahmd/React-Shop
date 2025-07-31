import { Router } from "@/router";

export default function useLogout() {
  const logout = () => {
    localStorage.removeItem("user");
    Router.push("Login");
  };

  return { logout };
}