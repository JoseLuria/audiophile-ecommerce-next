import { NextRequest, NextResponse } from "next/server";
import { cartStateInterface } from "./redux";

export function middleware(req: NextRequest) {
  const cartCookie = req.cookies.get("cart");
  const url = req.nextUrl.clone();
  url.pathname = "/";

  if (!cartCookie) {
    return NextResponse.redirect(url);
  }

  const cartState: cartStateInterface = JSON.parse(cartCookie);

  if (cartState.cartList.length <= 0) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/checkout",
};
