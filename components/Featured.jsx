import styles from "../styles/Featured.module.css"
import Image from "next/image"

import React from 'react'
import { useState } from "react";

export const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/img1-featured.png",
        "/img/img10-featured.png",
        "/img/img14-featured.png",

    ]
    const handleArrow = (direction) => {
        if(direction ==="left"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction ==="right"){
            setIndex(index !== 2 ? index+1 : 0)
        }
        
    }
    console.log(index);
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("left")}>
        <Image src="/img/left-arrow.png" objectFit="contain" alt="left arrow" layout='fill' />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((image, i) => (
                    <div className={styles.imgContainer} key={i}>
                    <Image src={image}  alt="" objectFit="contain" layout='fill' />
                    </div>
))}
                

</div>
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("right")}>
        <Image src="/img/right-arrow.png" alt="right arrow" objectFit="contain" layout='fill' />
        </div>
    </div>
  );
};
