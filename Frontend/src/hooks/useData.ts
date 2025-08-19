import { useEffect, useState } from "react"
import { toast } from "sonner"

import { apiClient } from "@/services/api-client"

export function useData<T>(URL: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiClient.get(URL)
        setData(response.data)
      } catch (error) {
        toast.error(`Error fetching data: ${error}`)
        setData(null)
      }
    }

    fetchData()
  }, [URL])

  return data
}
