import { useEffect, useState } from "react"

import type { User } from "@/interface/User"
import { apiClient } from "@/services/api-client"

export function useGetUsers(): User[] {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await apiClient.get("/user")
        setUsers(response.data)
      } catch (error) {
        console.error("Error fetching users:", error)
        setUsers([])
      }
    }

    fetchUsers()
  }, [])

  return users
}
