import { match } from "ts-pattern"

import EnsureAuth from "./components/EnsureAuth"
import Users from "./pages/Admin/Users"
import Login from "./pages/Auth/Login"
import Registration from "./pages/Auth/Registration"
import Home from "./pages/Home/Home"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "AuthLogin", "AuthRegistration", "AdminUsers"])

  return (
    <>
      {match(router)
        .with({ name: "AuthLogin" }, () => <Login />)
        .with({ name: "AuthRegistration" }, () => <Registration />)
        .with({ name: "Home" }, () => <EnsureAuth><Home /></EnsureAuth>)
        .with({ name: "AdminUsers" }, () => <Users />)
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
