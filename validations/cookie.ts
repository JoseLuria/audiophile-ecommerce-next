import { object, array, string, number } from "yup"

export const yupCart = object({
  cartList: array().of(object({
    name: string().required(),
    slug: string().required(),
    image: string().required(),
    price: number().required(),
    quantity: number().required(),
  })).required().min(1),
  totalPrice: number().required()  
})