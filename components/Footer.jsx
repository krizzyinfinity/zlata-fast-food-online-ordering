import Image from "next/image";
import styles from "../styles/Footer.module.css";

import React from 'react'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/img11.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            TRY OUR FOOD AND LET IT MELT IN YOUR MOUTH
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR FAST FOOD</h1>
          <p className={styles.text}>
            DRAGOVE
            <br /> ON THE MAIN ROAD
            <br /> 0917914562
          </p>
          
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 12:00 – 22:00
          </p>
          
        </div>
      </div>
      </div>
    
  )
}
