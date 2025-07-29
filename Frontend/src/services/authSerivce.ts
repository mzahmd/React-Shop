import type { User } from "@/interface/User"

import { apiClient } from "./api-client"

export async function registerCustomer(customer: User) {
  return await apiClient.post(`/auth/register`, JSON.stringify(customer), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function loginCustomer(customer: User) {
  return await apiClient.post(`/auth/login`, JSON.stringify(customer), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
