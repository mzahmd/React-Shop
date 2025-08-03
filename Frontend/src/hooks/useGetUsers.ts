import { useEffect, useState } from "react"

import type { IUser } from "@/interface/IUser"
import { apiClient } from "@/services/api-client"

export function useGetUsers(): IUser[] {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await apiClient.get("/admin/user")
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
