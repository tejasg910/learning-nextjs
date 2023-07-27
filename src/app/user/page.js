const page = async () => {
  const res = await fetch("https://dummyjson.com/users");
  let data = await res.json();
  console.log(typeof data.users);

  data = data.users.slice(0, 5);

  console.log(data);
  //   const data = [];
  return (
    <div>
      <h3>All users</h3>

      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <p key={index}>
              <strong>{item.id}</strong>
            </p>
          );
        })}
    </div>
  );
};

export default page;
