import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Button'

export default function Home() {


  return (
    <main className={styles.main}>
HOme page
{

<Button path={"/login"} name={"login"}/>
}
    </main>
  )
}
