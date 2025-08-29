import { createRouter } from "@swan-io/chicane"

export const ProductRouter = createRouter({
  Products: "/products?:category",
  Checkout: "/products/checkout",
})
