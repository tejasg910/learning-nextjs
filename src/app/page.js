import styles from "./page.module.css";
import Link from "next/link";
import { Imagecomp } from "./components/image";
import Fonts from "./font/Fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      HOme page
      <Link href={"/productlist"}>Go to products </Link>
      <Link href={"/studentlist"}>Go to Students </Link>
      <Imagecomp />
      <Fonts />
    </main>
  );
}
