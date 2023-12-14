import React from 'react';
import styles from "./footer.module.css";
import Developer from "../../../public/asset/developers/profile2.jpeg"
import Developer1 from "../../../public/asset/developers/profile1.jpeg"
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {


  return (
    <div className={styles.container}>
      <div className={styles.containerFooter}>
        <div className={styles.developer}>
          <Image className={styles.img} src={Developer} alt="fsf"  />
          <div className={styles.span}>
          <b>Aviv Haim-s</b>
          <span className={styles.d}>Full Stack Developer</span><br />
          </div>
          <a href="https://www.linkedin.com/in/aviv-haim-s-874bb0265/">
            <LinkedInIcon className={styles.btn}></LinkedInIcon>
          </a>
        </div>
        <div className={styles.developer}>
          <Image className={styles.img} src={Developer1} alt="fsf"  /><br />
          <div className={styles.span}>
          <b>Daniel Elias</b>
          <span className={styles.d}>Full Stack Developer</span><br />
          </div>
            <a href="https://www.linkedin.com/in/danieleliastech/">
              <LinkedInIcon className={styles.btn}></LinkedInIcon>
            </a>
        </div>
      </div>
        <p>&copy; 2023 כל הזכויות שמורות</p>
    </div>
  )
}

export default Footer