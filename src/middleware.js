import { NextResponse } from "next/server";
export function middleware (request){
    console.log("middle ware called")
  NextResponse.redirect(new URL("/login", request.url))
}