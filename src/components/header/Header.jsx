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
        אנחנו החיילים של עידו שלה ורום החלטנו לגייס כסף על מנת לבנות אזור ישיבה
        ליד מבנה בית הספר, מקום ישיבה שמח שמקרין חום ושמחה ומאפיין את רוח הפיקוד
        של המפקדים האהובים שלנו, המקום ישמש את חיילי וחיילות המקום בדור הנוכחי
        ועוד דורות קדימה. עלות הפרויקט הינה 35,000 שח נשמח לעזרתכם
      </p>
    </div>
  );
};

export default Header;
