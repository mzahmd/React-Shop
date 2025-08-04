import { match } from "ts-pattern";

import { AuthRouter } from "./router";
import Login from "./router/Login";
import Registration from "./router/Registration";

export function AuthArea() {
  const route = AuthRouter.useRoute(["Login", "Register"])

  return (
    <>
      {match(route)
        .with({ name: "Login" }, () => <Login />)
        .with({ name: "Register" }, () => <Registration />)
        .otherwise(() => (
          <>Auth page not found</>
        ))
      }
    </>
  )
}
