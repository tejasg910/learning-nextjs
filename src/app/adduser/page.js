"use client";
import React from "react";

const page = () => {
  return (
    <div>
      Add new user
      <input type="text" placeholder="Enter name" />
      <input type="email" placeholder="Enter email" />
      <button>Submit</button>
    </div>
  );
};

export default page;
