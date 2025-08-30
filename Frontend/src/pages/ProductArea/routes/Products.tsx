import Spinner from "@/components/Spinner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CATEGORIES } from "@/data/category"
import { useProducts } from "@/hooks/useProducts"
import { useShoppingCartContext } from "@/hooks/useShopCarts"
import type { IProduct } from "@/interface/IProduct"

import { ProductRouter } from "../router"

interface ProductCardProps {
  product: IProduct
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShoppingCartContext()

  return (
    <Card className="w-3xs hover:scale-105 transition-transform duration-300 shadow-md shadow-gray-300 cursor-pointer">
      <CardHeader className="flex justify-center items-center">
        <img src={product.image} alt={product.title} className="object-cover" width={100} />
      </CardHeader>
      <CardContent className="text-center mt-auto">
        <CardTitle>{product.title}</CardTitle>
        <div className="flex flex-row justify-between items-end mt-4">
          <div>
            <p className="text-muted-foreground">Price</p>
            <p>${product.price}</p>
          </div>
          <Button onClick={() => addToCart({ product, quantity: 1 })}>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface CategoryCardProps {
  category: string | undefined;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="w-3xs shadow-lg shadow-gray-300">
      <CardHeader>Categories</CardHeader>
      <CardContent className="text-center space-y-2 px-0">
        <div className={`text-left bg-gradient-to-r from-slate-50 dark:from-slate-900 via-slate-200 dark:via-slate-700 to-slate-50 dark:to-slate-700 p-2 cursor-pointer ${category ? "" : "border-l-2 border-l-primary"}`} onClick={() => {
          ProductRouter.push("Products")
        }}>
          All
        </div>
        {CATEGORIES.map((CATEGORY) => (
          <div key={CATEGORY.id} className={`text-left bg-gradient-to-r from-slate-50 dark:from-slate-900 via-slate-200 to-slate-50 dark:via-slate-700 dark:to-slate-700 p-2 cursor-pointer ${CATEGORY.name === category ? "border-l-2 border-l-primary" : ""}`} onClick={() => {
            ProductRouter.push("Products", { category: CATEGORY.name })
          }}>
            {CATEGORY.name}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default function Products() {
  const category = ProductRouter.getRoute(["Products"])?.params.category
  const products = useProducts(category)

  if (!products || products.length === 0) {
    return <Spinner />
  }

  return (
    <div className="w-full flex flex-col-reverse justify-between md:flex-row gap-5 bg-gradient-to-b from-background via-slate-50 dark:via-slate-700 to-slate-100 dark:to-slate-800 my-10 pb-5 md:px-10">
      <div className="flex flex-wrap flex-row justify-center md:justify-start gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div className="text-center self-center md:self-start">
        <CategoryCard category={category} />
      </div>
    </div>
  )
}
