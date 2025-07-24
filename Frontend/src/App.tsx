import { match } from "ts-pattern";

import Login from "./pages/Login";

import { Router } from "./router";

export default function App() {
  const router = Router.useRoute(["Home", "Login", "Registration", "About"]);

  return (
    <>
      {match(router)
        .with({ name: "Home" }, () => <h1>Welcome to the Home Page</h1>)
        .with({ name: "Login" }, () => <Login/>)
        .with({ name: "Registration" }, () => <h1>About Us</h1>)
        .with({ name: "About" }, () => <h1>About Us</h1>)
        .otherwise(() => <h1>Page Not Found</h1>)
        }
    </>
  )
}
