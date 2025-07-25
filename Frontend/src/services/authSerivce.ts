import type { Customer } from "@/interface/Customer"

import { apiClient } from "./api-client"

export async function registerCustomer(customer: Customer) {
  return await apiClient.post(`/auth/register`, JSON.stringify(customer), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function loginCustomer(customer: Customer) {
  return await apiClient.post(`/auth/login`, JSON.stringify(customer), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
