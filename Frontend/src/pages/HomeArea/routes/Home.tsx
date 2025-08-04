import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';
import Navbar from '@/components/Navbar';
import ProductCard from "@/components/ProductCard";
import { useGetProducts } from "@/hooks/useProducts";

export default function Home() {
  const products = useGetProducts();

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap flex-row justify-center">
        {products.map((product, index) => (
          <MotionEffect
            key={product.id}
            slide={{
              direction: 'down',
            }}
            fade
            zoom
            delay={0.3 + index * 0.1}
          >
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </MotionEffect>
        ))}
      </div>
    </>
  )
}
