import { server } from "./config/constants";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  console.log(server);
  return (
    <main className={styles.main}>
      HOme page
      <Link href={"/productlist"}>Go to products </Link>
      <Link href={"/studentlist"}>Go to Students </Link>
      {/* <Imagecomp /> */}
    </main>
  );
}
