import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useGetProducts } from "@/hooks/useGetProducts";

export default function Home() {
  const products = useGetProducts();

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map(product => (
          <Card className="w-50 h-fit mt-10 mx-10">
            <CardHeader>
              <img src={product.image} alt={product.title} className="size-fit object-cover" />
              {/* <CardDescription>{product.description}</CardDescription> */}
              {/* <CardAction>{product.category}</CardAction> */}
            </CardHeader>
            <CardContent className="text-center mt-5 space-y-2">
              <CardTitle>{product.title}</CardTitle>
              <p>${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
