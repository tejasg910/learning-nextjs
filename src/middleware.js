import { NextResponse } from "next/server";
export function middleware(request) {
  NextResponse.redirect(new URL("/login", request.url));
}
