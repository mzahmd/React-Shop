import { match } from "ts-pattern"

import EnsureAuth from "./components/EnsureAuth"
import { AdminArea } from "./pages/AdminArea/Index"
import { AuthArea } from "./pages/AuthArea/Index"
import { HomeArea } from "./pages/HomeArea/Index"
import { UserArea } from "./pages/UserArea/Index"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "Auth", "Admin", "User"])

  return (
    <>
      {match(router)
        .with({ name: "Auth" }, () => <AuthArea />)
        .with({ name: "Home" }, () => (
          <EnsureAuth>
            <HomeArea />
          </EnsureAuth>
        ))
        .with({ name: "Admin" }, () => (
          <EnsureAuth>
            <AdminArea />
          </EnsureAuth>
        ))
        .with({ name: "User" }, () => (
          <EnsureAuth>
            <UserArea />
          </EnsureAuth>
        ))
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
