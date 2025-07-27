import type { ProductDTO } from "@/interface/Product";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function ProductCard({ title, image, price }: ProductDTO) {
  return (
    <Card className="w-50 h-fit mt-10 mx-10 hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-300 cursor-pointer">
      <CardHeader>
        <img src={image} alt={title} className="size-fit object-cover" />
      </CardHeader>
      <CardContent className="text-center mt-5 space-y-2">
        <CardTitle>{title}</CardTitle>
        <p>${price}</p>
      </CardContent>
    </Card>
  );
}