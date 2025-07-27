export interface ProductDTO {
  title: string
  price: number
  image: string
}

export interface Product extends ProductDTO {
  id: number
  description: string
  category: string
}
