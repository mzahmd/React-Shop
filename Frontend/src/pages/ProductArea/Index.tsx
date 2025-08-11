import { match } from "ts-pattern"

import { ProductRouter } from "./router"
import Products from "./routes/Products"

export function ProductArea() {
  const router = ProductRouter.useRoute(["Products"])

  return (
    <>
      {match(router)
        .with({ name: "Products" }, () => <Products />)
        .otherwise(() => (
          <>Product Page not found</>
        ))}
    </>
  )
}
