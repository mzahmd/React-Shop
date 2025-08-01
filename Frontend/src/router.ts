import { createGroup, createRouter } from "@swan-io/chicane"

export const Router = createRouter({
  Home: "/",

  ...createGroup("Auth", "/auth", {
    Login: "/login",
    Registration: "/register",
  }),
  
  ...createGroup("Admin", "/admin", {
    Users: "/users",
  }),
  
  Users: "/user",
})
