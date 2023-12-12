"use client";
import React from "react";
import styles from "./aboutSoldiers.module.css";
// import {data} from "../../../public/data/dataAboutSoldiers";
import Image from "next/image";
import picOne from "./../../../public/asset/picSoldiers/image0.jpeg";
import picTwo from "./../../../public/asset/picSoldiers/image2.jpeg";
import picThree from "./../../../public/asset/picSoldiers/image1.jpeg";

const data = [
  {
    img: picOne,
    name: "עידו יהושע ז״ל",
    about:
      "בן 27, גדל בקיבוץ איילת השחר, נשוי לזיו נבון, שבהריון ראשון, גרים יחד בבאר שבע",
    militaryRole:
      "בתפקידו האחרון היה מפקד פלגת הדרכה בבית הספר המשותף לשלדג ו-669",
    storyAbout:
      "חבריו לצוות מספרים על עידו כי היה המצחיק והשטותניק, עוד מספרים כי הוא הדביק את הצוות במילים ובדיחות, ומצד שני היה רציני ומשימתי, שנתן את כולו למשימה. תמיד עשה הכל עם חיוך ולב גדול, ואהב לתרום לאחרים.",
    aboutlastDay: "נפל בקרב באוגדת רעים, ביום שבת ה-7.10.",
  },
  {
    img: picTwo,
    name: "רום שלומי ז״ל",
    about: "בן 23, גדל בגנות",
    militaryRole:
      "התגייס ליחידת שלדג ב-2018, סיים את מסלול הלוחם ויצא לקצונה המשיך לתפקיד קצין הסיור של בית הספר המשותף לשלדג ו-669",
    storyAbout:
      "חבריו מספרים על רום כי היה עושה כל משימה באנרגיות אינסופיות ורצון תמידי לדחוף קדימה. רום פיקד על מחלקה גדולה ותמיד הקדיש זמן ודאגה לחיילות שלו, ותוך כדי המשיך לתפח ולקדם את הנושא הסיור והניווט של שתי היחידות.",
    aboutlastDay: "נפל בקרב באוגדת רעים, ביום שבת ה-7.10.",
  },
  {
    img: picThree,
    name: "שילה ציקו כהן ז״ל",
    about: "בן 24, גדל בשדרות",
    militaryRole:
      "התגייס ליחידת שלדג ב-2019, סיים את המסלול הלוחם ויצא לקורס קצונה, המשיך לתפקיד בתור מפקד צוות במסלול הכשרה של נוב 2022.",
    storyAbout:
      "חבריו מספרים על שילה כי מההתחלה הפגין יכולות פיקוד והובלה נדירים וחוסר פחד מתאגרים. כמפקד היה מלא בענווה ויושרה ומקצועיות.",
    aboutlastDay:
      "ביום שבת ה7.10 יצא מביתו בשדרות עם נשק וללא ציוד, הצטרף לצוות לוחמים שהכיר ונלחם עד לנפילתו בקיבוץ בארי.",
  },
];

// export async function getServerSideProps() {
//   console.log("getServerSideProps");
 

//   return {
//     props: {data},// will be passed to the page component as props
//   };

// }

const AboutSoldiers = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.item}>
                <Image
                  className={styles.imageMobile}
                  width={250}
                  height={250}
                  src={item.img}
                  alt='/soldier_image'
                />
              <div className={styles.textContainer}>
                <h4>{item.name}</h4>
                <p>{item.about}</p>
                <p>{item.militaryRole}</p>
                <p>{item.storyAbout}</p>
                <p className={styles.lastParagraph}>{item.aboutlastDay}</p>
              </div>
              <Image
                className={styles.image}
                width={250}
                height={250}
                src={item.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSoldiers;
