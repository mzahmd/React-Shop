export interface IProductDTO {
  title: string
  price: number
  image: string
}

export interface IProduct extends IProductDTO {
  id: number
  description: string
  category: string
}
