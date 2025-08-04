import { createGroup, createRouter } from "@swan-io/chicane"

export const Router = createRouter({
  Home: "/",
  Auth: "/auth/*",

  ...createGroup("Admin", "/admin", {
    Users: "/users",
  }),

  Users: "/user",
})
