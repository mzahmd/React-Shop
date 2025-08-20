import type { IProduct } from "@/interface/IProduct"

import { useData } from "./useData"

export function useProducts(category: string): IProduct[] {
  const products = useData<IProduct[]>(
    `/products${category ? `?category=${category}` : ""}`,
  )

  if (!products) {
    return []
  }

  return products
}
