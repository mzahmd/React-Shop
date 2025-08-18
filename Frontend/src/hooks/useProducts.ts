import { useEffect, useState } from "react"

import type { IProduct } from "@/interface/IProduct"
import { apiClient } from "@/services/api-client"

export function useProducts(): IProduct[] {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await apiClient.get("/products")
        setProducts(response.data)
      } catch (error) {
        console.error("Error fetching products:", error)
        setProducts([])
      }
    }

    fetchProducts()
  }, [])

  return products
}
