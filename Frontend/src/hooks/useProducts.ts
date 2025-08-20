import type { IProduct } from "@/interface/IProduct"
import { ProductRouter } from "@/pages/ProductArea/router"

import { useData } from "./useData"

export function useProducts(): IProduct[] {
  const categoryParam = ProductRouter.useRoute(["Products"])?.params.category

  const products = useData<IProduct[]>(
    `/products${categoryParam ? `?category=${categoryParam}` : ""}`,
  )

  if (!products) {
    return []
  }

  return products
}
