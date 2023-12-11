import React from "react";
import styles from "./donations.module.css";
import Link from "next/link";

const Donations = () => {
  return (
    <div className={styles.container}>
      <button className={styles.link}>
        <Link
          href={
            "https://pay.tranzila.com/ghisdonat/bXFQSXAwa3ZpM3E2cDNPN2hyRDQwZz09"
          }
        >
    תרומה להנצחת מפקדי יחידת שלדג
        </Link>
      </button>
    </div>
  );
};

export default Donations;
