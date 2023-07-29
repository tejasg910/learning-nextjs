import Link from "next/link";
import getUsers from "../../../getUser";
const page = async () => {
  const data = await getUsers();
  console.log(data);
  //   const data = [];
  return (
    <div>
      <h3>All users</h3>

      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <p key={index}>
              <strong>
                <Link href={`user/${item.id}`}>{item.username}</Link>{" "}
              </strong>
            </p>
          );
        })}
    </div>
  );
};

export default page;
