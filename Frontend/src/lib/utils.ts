import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Router } from "@/router"
import { apiClient } from "@/services/api-client"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logout() {
  apiClient.post("/auth/logout").then(() => {
    localStorage.removeItem("user")
    Router.push("AuthLogin")
  })
}
