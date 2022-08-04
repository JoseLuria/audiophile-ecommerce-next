import { object, string, number } from "yup"
import "yup-phone"

const yupDirection = object({
  name: string().required().min(2),
  email: string().email().required(),
  phone: string().phone().required(),
  adress: string().required().min(5),
  zip: number().required().min(5).max(5),
  city: string().required().min(5),
  country: string().required().min(5),
})

export const yupBody = object({
  direction: object({
    name: string().required().min(2),
    email: string().email().required(),
    phone: string().phone().required(),
    adress: string().required().min(4),
    zip: number().required(),
    city: string().required().min(4),
    country: string().required().min(2),
  }).required(),
  payMethod: string().required()
})