import { object, string } from "yup";
import "yup-phone";

export const yupOrder = object({
  name: string().required().min(2),
  email: string().email().required(),
  phone: string().phone().required(),
  adress: string().required().min(4),
  zip: string()
    .required()
    .matches(/^[0-9]+$/)
    .length(5),
  city: string().required().min(2),
  country: string().required().min(2),
  payMethod: string().required().equals(["cash", "e-money"]),
  eMoneyNumber: string()
    .matches(/^[0-9]+$/)
    .length(9)
    .optional(),
  eMoneyPin: string()
    .matches(/^[0-9]+$/)
    .length(4)
    .optional(),
});
