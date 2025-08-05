import { match } from "ts-pattern"

import { UserRouter } from "./router"
import Profile from "./routes/Profile"

export function UserArea() {
  const router = UserRouter.useRoute(["User"])

  return (
    <>
      {match(router)
        .with({ name: "User" }, () => <Profile />)
        .otherwise(() => (
          <>User Page not found</>
        ))}
    </>
  )
}
