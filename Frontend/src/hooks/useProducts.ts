import type { IProduct } from "@/interface/IProduct"

import { useData } from "./useData"

export function useProducts(categoryParam?: string): IProduct[] {

  const products = useData<IProduct[]>(
    `/products${categoryParam ? `?category=${categoryParam}` : ""}`,
  )

  if (!products) {
    return []
  }

  return products
}
