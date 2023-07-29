import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/");
  return <div>The user page </div>;
};

export default page;
