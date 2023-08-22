import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  //getting the data from api

  //getting id
  const id = params.user;
  console.log(id, "api id");
  console.log(params, "this is id");
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  console.log(data, "this is data");
  return NextResponse.json({ data });
}
