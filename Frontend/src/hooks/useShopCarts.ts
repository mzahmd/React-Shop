import { useContext } from "react"

import { ShoppingCartContext } from "@/context/ShoppingCartContext"

export function useShoppingCartContext() {
  const shoppingCartContext = useContext(ShoppingCartContext)

  if (!shoppingCartContext) {
    throw new Error("Shopping Cart Context is not initialized")
  }

  return shoppingCartContext
}
