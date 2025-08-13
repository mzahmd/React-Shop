import { match } from "ts-pattern"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { AdminRouter } from "./router"
import UsersList from "./routes/UsersList"

export function AdminArea() {
  const router = AdminRouter.useRoute(["UsersList"])

  return (
    <>
      {match(router)
        .with({ name: "UsersList" }, () =>
          <>
            <Navbar />
            <UsersList />
            <Footer />
          </>
        )
        .otherwise(() => (
          <>Admin Page not found</>
        ))}
    </>
  )
}
