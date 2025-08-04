import axios from "axios"
import { useEffect, useState } from "react"

import type { IProduct } from "@/interface/IProduct"

export function useProducts(): IProduct[] {
  const [products, setProducts] = useState<IProduct[]>([])

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
