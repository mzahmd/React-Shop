import { match } from "ts-pattern"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { ProductRouter } from "./router"
import Products from "./routes/Products"

export function ProductArea() {
  const router = ProductRouter.useRoute(["Products"])

  return (
    <>
      {match(router)
        .with({ name: "Products" }, () =>
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        )
        .otherwise(() => (
          <>Product Page not found</>
        ))}
    </>
  )
}
