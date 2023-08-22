import Link from "next/link";
import React from "react";

const UserCard = ({ name, email, username, id }) => {
  return (
    <Link href={`/user/${id}`}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
          <p class="text-gray-700 text-base">{username}</p>
          <p class="text-gray-700 text-base">{email}</p>
        </div>
        <div class="px-6 pt-4 pb-2"></div>
      </div>
    </Link>
  );
};

export default UserCard;
