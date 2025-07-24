import { match } from "ts-pattern"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { Router } from "./router"

export default function App() {
  const router = Router.useRoute(["Home", "Login", "Registration", "About"])

  return (
    <>
      {match(router)
        .with({ name: "Home" }, () => <Home />)
        .with({ name: "Login" }, () => <Login />)
        .with({ name: "Registration" }, () => <Registration />)
        .with({ name: "About" }, () => <h1>About Us</h1>)
        .otherwise(() => (
          <h1>Page Not Found</h1>
        ))}
    </>
  )
}
