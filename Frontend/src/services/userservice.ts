import { apiClient } from "./api-client"

export async function deleteUser() {
  return await apiClient.delete("/user")
}
