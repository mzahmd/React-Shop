import { createRouter } from "@swan-io/chicane";

export const Router = createRouter({
  Home: "/",
  Login: "/login",
  Registration: "/register",
  About: "/about",
  UserList: "/users",
  UserDetail: "/users/:userId",
});