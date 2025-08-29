import { match } from "ts-pattern"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

import { ProductRouter } from "./router"
import Checkout from "./routes/Checkout"
import Products from "./routes/Products"

export function ProductArea() {
  const router = ProductRouter.useRoute(["Products", "Checkout"])

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
        .with({ name: "Checkout" }, () =>
          <>
            <Navbar />
            <Checkout />
            <Footer />
          </>
        )
        .otherwise(() => (
          <>Product Page not found</>
        ))}
    </>
  )
}
