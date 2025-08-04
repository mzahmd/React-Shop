import { match } from "ts-pattern"

import EnsureAuth from "./components/EnsureAuth"
import Users from "./pages/AdminArea/Users"
import { AuthArea } from "./pages/Auth/AuthArea"
import Home from "./pages/HomeArea/Home"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "Auth", "AdminUsers"])

  return (
    <>
      {match(router)
        .with({ name: "Auth" }, () => <AuthArea />)
        .with({ name: "Home" }, () =>
          <EnsureAuth>
            <Home />
          </EnsureAuth>
        )
        .with({ name: "AdminUsers" }, () =>
          <EnsureAuth>
            <Users />
          </EnsureAuth>
        )
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
