import React from "react";
import { getSingleUsers } from "../../../../getUser";

import UpdateModal from "./Update";

export default async function Page({ params }) {
  const user = await getSingleUsers(params.userId);
  console.log(user);
  return (
    <div>
      <h4>Username:{user.username}</h4>

      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>

        <UpdateModal />
      </div>
    </div>
  );
}
