import Image from "next/image";

export default async function Student({ params }) {
  // title	"iPhone 9"
  // description	"An apple mobile which is nothing like apple"
  // price	549
  // discountPercentage	12.96
  // rating	4.69
  // stock	94
  // brand	"Apple"
  // category	"smartphones"
  // thumbnail	"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  // images
  // 0	"https://i.dummyjson.com/data/products/1/1.jpg"
  // 1	"https://i.dummyjson.com/data/products/1/2.jpg"
  // 2	"https://i.dummyjson.com/data/products/1/3.jpg"
  // 3	"https://i.dummyjson.com/data/products/1/4.jpg"
  // 4	"https://i.dummyjson.com/data/products/1/thumbnail.jpg"

  const res = await fetch("https://dummyjson.com/products/" + params.student);
  const student = await res.json();

  return (
    <div className="bg-slate-100">
      <h4>{student.title}</h4>
      <Image src={student.thumbnail} width={100} height={100} />
      <p>{student.description}</p>
      <p>
        <strong>{student.price}</strong>
      </p>
    </div>
  );
}
