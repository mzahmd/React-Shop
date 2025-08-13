import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useProducts } from "@/hooks/useProducts"
import type { IProductDTO } from "@/interface/IProduct"

function ProductCard({ title, image, price }: IProductDTO) {
  return (
    <Card className="w-3xs hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-300 cursor-pointer">
      <CardHeader>
        <img src={image} alt={title} className="object-cover" />
      </CardHeader>
      <CardContent className="text-center mt-auto space-y-2">
        <CardTitle>{title}</CardTitle>
        <p>${price}</p>
      </CardContent>
    </Card>
  )
}

export default function Products() {
  const products = useProducts()

  if (!products || products.length === 0) {
    return <span>No products found</span>
  }

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-5 md:gap-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 my-10 pb-5">
        <div className="flex flex-wrap flex-row justify-center gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
        <div className="md:mr-10 text-center self-center md:self-start">
          <Card className="w-3xs shadow-lg shadow-gray-300">
            <CardHeader>Categories</CardHeader>
            <CardContent className="text-center space-y-2 px-0">
              <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2">
                All
              </div>
              <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2">
                men's clothing
              </div>
              <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2">
                women's clothing
              </div>
              <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2">
                jewelery
              </div>
              <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2">
                electronics
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
