import { NextResponse } from "next/server";

export default async function POST(reqeust) {
  const { username, email } = await reqeust.json();

  NextResponse.json({ username, email });
}
