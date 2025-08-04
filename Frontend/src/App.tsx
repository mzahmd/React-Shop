import { match } from "ts-pattern"

import EnsureAuth from "./components/EnsureAuth"
import { AdminArea } from "./pages/AdminArea/AdminArea"
import { AuthArea } from "./pages/Auth/AuthArea"
import { HomeArea } from "./pages/HomeArea/HomeArea"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "Auth", "Admin"])

  return (
    <>
      {match(router)
        .with({ name: "Auth" }, () => <AuthArea />)
        .with({ name: "Home" }, () =>
          <EnsureAuth>
            <HomeArea />
          </EnsureAuth>
        )
        .with({ name: "Admin" }, () =>
          <EnsureAuth>
            <AdminArea />
          </EnsureAuth>
        )
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
