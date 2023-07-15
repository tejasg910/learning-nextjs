import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'



export default function Home() {


  return (
    <main className={styles.main}>
HOme page
<Link href={"/productlist"}>Go to products </Link>
<Link href={"/studentlist"}>Go to Students </Link>

    </main>
  )
}
