import React from "react";
import styles from "./QRCodeCard.module.scss";

const QRCodeCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.title}>
          Improve your front-end skills by building projects
        </h3>
        <p className={styles.desc}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
