import React from 'react'
import styles from "./navbar.module.css"
import logo from "../../../public/asset/logo/logo candle-01.png"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Image width={50} height={50} className={styles.logo} src={logo}/>
      <p>הנצחה למפקדי יחידת שלדג</p>
    </div>
  )
}

export default Navbar