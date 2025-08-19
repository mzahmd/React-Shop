import type { IProduct } from "@/interface/IProduct"

import { useData } from "./useData"

export function useProducts(): IProduct[] {
  const products = useData<IProduct[]>("/products")

  if (!products) {
    return []
  }

  return products
}
