import { match } from "ts-pattern"

import Navbar from "@/components/Navbar"

import { UserRouter } from "./router"
import Profile from "./routes/Profile"

export function UserArea() {
  const router = UserRouter.useRoute(["User"])

  return (
    <>
      {match(router)
        .with({ name: "User" }, () =>
          <>
            <Navbar />
            <Profile />
          </>
        )
        .otherwise(() => (
          <>User Page not found</>
        ))}
    </>
  )
}
