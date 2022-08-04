import { NextRequest, NextResponse } from "next/server";
import { CartProductInterface } from "./interface";

export function middleware(req: NextRequest) {
  const cookieCartList = req.cookies.get("cartList");
  const cookieTotalPrice = req.cookies.get("totalPrice")
  const url = req.nextUrl.clone();
  url.pathname = "/";

  if (!cookieCartList || !cookieTotalPrice) {
    return NextResponse.redirect(url);
  }

  const cartList: CartProductInterface[] = JSON.parse(cookieCartList);
  const totalPrice: number = JSON.parse(cookieTotalPrice)

  if (cartList.length <= 0) {
    return NextResponse.redirect(url);
  }

  if (totalPrice <= 0){
    return NextResponse.redirect(url); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/checkout",
};
