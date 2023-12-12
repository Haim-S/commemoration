


import styles from './page.module.css'
import AboutSoldiers from '@/components/AboutSoldiers/AboutSoldiers'
import Donations from '@/components/donations/Donations'

export default function Home() {
  return (


    <main className={styles.continaer}>
      
      <AboutSoldiers/>
      {/* <Donations/> */}
     
    </main>

  )
}
