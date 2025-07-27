import Header from "@/components/Header";
import { useGetProducts } from "@/hooks/useGetProducts";

export default function Home() {
  const products = useGetProducts();
  console.log("MY products:", products);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="object-cover"
            />
            {/* <p className="text-xl font-bold">{product.category}</p> */}
            {/* <p className="text-gray-600">{product.description}</p> */}
            {/* <p className="text-lg font-semibold">${product.price}</p> */}
          </div>
        ))}
      </div>
    </>
  )
}
