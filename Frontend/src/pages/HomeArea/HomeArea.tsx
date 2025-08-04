import { match } from "ts-pattern"

import { HomeRouter } from "./router"
import Home from "./router/Home"

export function HomeArea() {
  const router = HomeRouter.useRoute(["Home"])

  return (
    <>
      {match(router)
        .with({ name: "Home" }, () => <Home />)
        .otherwise(() => (
          <>Home Page not found</>
        ))
      }
    </>
  )
}
