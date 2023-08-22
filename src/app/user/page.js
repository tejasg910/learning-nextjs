import Link from "next/link";
import { getUsers } from "../../../getUser";
import UserCard from "./UserCard";
const page = async () => {
  const data = await getUsers();
  console.log(data[0].id);

  //   const data = [];
  return (
    <div>
      <h3>All users</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <UserCard
                name={item.name}
                email={item.email}
                username={item.username}
                key={item.id}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default page;
