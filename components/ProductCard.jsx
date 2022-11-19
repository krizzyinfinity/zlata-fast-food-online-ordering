import Image from 'next/image'
import React from 'react'
import styles from "../styles/ProductCard.module.css"
import Link from 'next/link'
export const ProductCard = ({item}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${item._id}`}>
      <Image src={item.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{item.title}</h1>
      <span className={styles.price}>kuna {item.prices}</span>
      <p className={styles.desc}>
        {item.desc}
      </p>
      
      </div>
  )
}
