import React from "react";
import styles from "./footer.module.css";
import Developer from "../../../public/asset/developers/profile2.jpeg";
import Developer1 from "../../../public/asset/developers/profile1.jpeg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerFooter}>
        <div className={styles.developer}>
          <div className={styles.textContainer}>
          <Image className={styles.img} src={Developer} alt='fsf' />
            <p className={styles.developerName}>Aviv Haim-s</p>
            <span className={styles.role}>Nodejs Developer</span>
            <br />
          </div>
          <Link href='https://www.linkedin.com/in/aviv-haim-s-874bb0265/'>
            <FaLinkedin size={20} color='white'></FaLinkedin>
          </Link>
        </div>
        <div className={styles.developer}>
          <br />
          <div className={styles.textContainer}>
          <Image className={styles.img} src={Developer1} alt='fsf' />
            <p className={styles.developerName}>Daniel Elias</p>
            <span className={styles.role}>Nodejs Developer</span>
            <br />
          </div>
          <Link href='https://www.linkedin.com/in/danieleliastech/'>
            <FaLinkedin size={20} color='white'></FaLinkedin>
          </Link>
        </div>
      </div>
      <p>&copy; 2023 כל הזכויות שמורות</p>
    </div>
  );
};

export default Footer;
