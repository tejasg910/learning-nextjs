"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ path, buttonText }) => {
  const router = useRouter();
  const navigation = () => {
    router.push(path);
  };
  return <button onClick={navigation}>{buttonText}</button>;
};

export default Button;
