import { createRouter } from "@swan-io/chicane"

export const Router = createRouter({
  Home: "/",
  Auth: "/auth/*",
  Admin: "/admin/*",
  User: "/user/*",
  Products: "/products/*",
})
