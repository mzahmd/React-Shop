import { match } from "ts-pattern"

import { AdminRouter } from "./router"
import UsersList from "./router/UsersList"

export function AdminArea() {
  const router = AdminRouter.useRoute(["UsersList"])

  return (
    <>
      {match(router)
        .with({ name: "UsersList" }, () => <UsersList />)
        .otherwise(() => (
          <>Admin Page not found</>
        ))
      }
    </>
  )
}
