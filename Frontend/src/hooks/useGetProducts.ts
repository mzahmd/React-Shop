import { getProducts } from "@/services/productService";

export function useGetProducts() {
  const products = getProducts();

  return products;
}