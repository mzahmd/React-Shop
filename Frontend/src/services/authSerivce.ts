import type { IRequestUser } from "@/interface/IUser"

import { apiClient } from "./api-client"

export async function registerUser(user: IRequestUser) {
  return await apiClient.post(`/user/register`, JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function loginUser(user: IRequestUser) {
  return await apiClient.post(`/auth/login`, JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
