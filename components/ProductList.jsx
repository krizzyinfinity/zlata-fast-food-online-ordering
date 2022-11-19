import React from 'react'
import styles from "../styles/ProductList.module.css"
import { ProductCard } from './ProductCard'
export const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
        <h1>The best food on Dugi Otok</h1>
        <p className={styles.description}>
           We have been around for a while and we have a reputation
           of good food and unbeatable sea-view!</p>
            <div className={styles.wrapper}>
              {productList?.map((item)=> (
                <ProductCard key={item._id} item={item} />

              ))}
                
                
                </div>
        </div>
  )
}
