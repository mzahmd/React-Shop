import type { IUser } from "@/interface/User"

import { apiClient } from "./api-client"

export async function registerUser(user: IUser) {
  return await apiClient.post(`/user/register`, JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function loginUser(user: IUser) {
  return await apiClient.post(`/auth/login`, JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
