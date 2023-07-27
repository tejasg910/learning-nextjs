import React from "react";
import Button from "./components/button";
import "./style.css";
async function getProducts() {
  let data = await fetch("https://dummyjson.com/products");
  const res = await data.json();
  return res;
}

export default async function StudentList() {
  //fetching data in server side component
  const products = await getProducts();

  return (
    //server side component

    <div>
      {products.products.map((item, index) => {
        return (
          <div
            key={item.id}
            className="container bg-slate-100 m-4 rounded p-4 shadow-md"
          >
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <Button id={item.id} />
          </div>
        );
      })}
    </div>
  );
}
