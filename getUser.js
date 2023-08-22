export async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  let data = await res.json();

  return data.data;
}

export async function getSingleUsers(id) {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  let data = await res.json();

  return data.data;
}
