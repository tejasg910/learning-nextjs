import Image from "next/image";

export default async function Student({ params }) {
  "https://i.dummyjson.com/data/products/1/thumbnail.jpg";

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
