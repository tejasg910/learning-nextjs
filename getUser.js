export default async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  let data = await res.json();

  return data.users;
}
