import { NextResponse } from "next/server";

export async function GET() {
  //getting the data from api

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json({ data });
}
