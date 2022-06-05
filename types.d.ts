export interface NewProductsHome {
  title: string,
  description: string,
  images: string[][],
  size: [{
    size: string,
    quantity: number
  }],
  category: Array<string>,
  color: Array<string>,
  price: number,


}