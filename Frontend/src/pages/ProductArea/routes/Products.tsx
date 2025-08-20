import { useState } from "react"

import Spinner from "@/components/Spinner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useProducts } from "@/hooks/useProducts"
import type { IProductDTO } from "@/interface/IProduct"

function ProductCard({ title, image, price }: IProductDTO) {
  return (
    <Card className="w-3xs hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-300 cursor-pointer">
      <CardHeader className="flex justify-center items-center">
        <img src={image} alt={title} className="object-cover" width={100} />
      </CardHeader>
      <CardContent className="text-center mt-auto">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-row justify-between items-end mt-4">
          <div>
            <p className="text-muted-foreground">Price</p>
            <p>${price}</p>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Products() {
  const [categoryQuery, setCategoryQuery] = useState<string>("")
  const products = useProducts(categoryQuery)

  if (!products || products.length === 0) {
    return <Spinner />
  }

  return (
    <div className="w-full flex flex-col-reverse justify-between md:flex-row gap-5 bg-gradient-to-b from-white via-slate-50 to-slate-100 my-10 pb-5 md:px-10">
      <div className="flex flex-wrap flex-row justify-center md:justify-start gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div className="text-center self-center md:self-start">
        <Card className="w-3xs shadow-lg shadow-gray-300">
          <CardHeader>Categories</CardHeader>
          <CardContent className="text-center space-y-2 px-0">
            <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2 cursor-pointer" onClick={() => setCategoryQuery("")}>
              All
            </div>
            <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2 cursor-pointer" onClick={() => setCategoryQuery("men's clothing")}>
              men's clothing
            </div>
            <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2 cursor-pointer" onClick={() => setCategoryQuery("women's clothing")}>
              women's clothing
            </div>
            <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2 cursor-pointer" onClick={() => setCategoryQuery("jewelery")}>
              jewelery
            </div>
            <div className="text-left bg-gradient-to-r from-gray-200 via-slate-200 to-slate-50 p-2 cursor-pointer" onClick={() => setCategoryQuery("electronics")}>
              electronics
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
