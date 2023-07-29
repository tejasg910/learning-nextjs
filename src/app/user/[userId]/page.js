import React from "react";
import getUsers from "../../../../getUser";

export default async function Page(props) {
  const users = await getUsers();
  console.log(props);
  const user = users[props.params.userId - 1];
  return (
    <div>
      <h4>Username:{user.username}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
