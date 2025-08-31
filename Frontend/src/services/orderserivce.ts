import type { IShopcart } from "@/interface/IShopCart"

import { apiClient } from "./api-client"

export async function createOrder(order: IShopcart[]) {
  return await apiClient.post("/order", JSON.stringify(order), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
