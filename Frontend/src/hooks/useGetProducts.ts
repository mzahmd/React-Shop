import axios from "axios"
import { useEffect, useState } from "react"

import type { Product } from "@/interface/Product"

export function useGetProducts(): Product[] {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(import.meta.env.VITE_BASE_STORE_URL)
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
