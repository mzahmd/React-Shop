import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useGetProducts } from "@/hooks/useGetProducts";

export default function Home() {
  const products = useGetProducts();

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5">
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}
