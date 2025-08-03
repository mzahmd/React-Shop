import { apiClient } from "./api-client"
interface IRequestUser {
  email: string
  password: string
}

export async function registerUser(user: IRequestUser) {
  return await apiClient.post("/user/register", JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function loginUser(user: IRequestUser) {
  return await apiClient.post("/auth/login", JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
