import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");
  const { pathname } = request.nextUrl;

  if (!token && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}