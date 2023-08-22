import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    //getting body
    const { username, name, email } = params.user;
    const body = await request.json();
    const id = params.user;
    const res = fetch("https://jsonplaceholder.typicode.com/user/" + id, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name,
        username,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    NextResponse.json({
      success: true,
      message: "User updated successfully",
      data,
    });

    //update user with this id
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong " },
      { status: 500 }
    );
  }
}
