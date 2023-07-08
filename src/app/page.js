import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>Home page</h3>
      <div>
        <h4>Linking </h4>
        <Link href="/about">Go to About</Link>
        <Link href="/login">Go to Login</Link>
      </div>
    </main>
  );
}
