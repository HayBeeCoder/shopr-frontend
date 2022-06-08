export interface IProduct {
  _id: string,
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