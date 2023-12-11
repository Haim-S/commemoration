import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>תרומה לפרויקט הנצחה</h1>
      <p className={styles.paragraph}>
        במהלך יום שבת ה7.10 יחידת שלדג ו-669 לקחו חלק בלחימה. במהלך הלחימה נפלו
        9 לוחמים, 3 מתוכם היו חלק מיחידת ההכשרה המשותפת לשלדג ו-669.
      </p>
      <p className={styles.paragraph}>
        פרויקט זה נועד למען ההנצחה של המפקדים והלוחמים הללו, הכסף שיאסף יוקדש
        לבניית אזור ישיבה ליד מבנה בית הספר, אשר ישמש את חיילי וחיילות המקום,
        עידו, רום ושילה שימשו כמפקדיהם
      </p>
    </div>
  );
};

export default Header;
