import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
