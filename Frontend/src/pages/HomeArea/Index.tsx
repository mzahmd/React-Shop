import { match } from "ts-pattern"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { HomeRouter } from "./router"
import Home from "./routes/Home"

export function HomeArea() {
  const router = HomeRouter.useRoute(["Home"])

  return (
    <>
      {match(router)
        .with({ name: "Home" }, () =>
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        )
        .otherwise(() => (
          <>Home Page not found</>
        ))}
    </>
  )
}
