import { match } from "ts-pattern"

import EnsureAuth from "./components/EnsureAuth"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Users from "./pages/Users"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "Login", "Registration", "Users"])

  return (
    <>
      {match(router)
        .with({ name: "Home" }, () => <EnsureAuth><Home /></EnsureAuth>)
        .with({ name: "Login" }, () => <Login />)
        .with({ name: "Registration" }, () => <Registration />)
        .with({ name: "Users" }, () => <Users />)
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
