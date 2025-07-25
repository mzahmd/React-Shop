// import { useGetProducts } from "@/hooks/useGetProducts";

import Header from "@/components/Header";

export default function Home() {
  // useGetProducts();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </div>
    </>
  )
}
