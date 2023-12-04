

import Header from '@/components/header/Header'
import styles from './page.module.css'
import AboutSoldiers from '@/components/AboutSoldiers/AboutSoldiers'

export default function Home() {
  return (


    <main className={styles.continaer}>
      <Header/>
      <AboutSoldiers/>
     
    </main>

  )
}
