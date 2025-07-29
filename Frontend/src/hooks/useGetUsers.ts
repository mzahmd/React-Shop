import { useEffect, useState } from "react"

import type { Customer } from "@/interface/Customer"
import { apiClient } from "@/services/api-client"

export function useGetUsers(): Customer[] {
  const [users, setUsers] = useState<Customer[]>([])

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
