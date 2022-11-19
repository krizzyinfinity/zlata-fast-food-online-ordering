import React from 'react'
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

  const Product = ({item}) => {
    const [price, setPrice] = useState(item.prices);
      //const [size, setSize] = useState(0);
      const [extras, setExtras] = useState([]);
      const [quantity, setQuantity] = useState(1);
      const dispatch = useDispatch();

      const changePrice = (number) => {
        setPrice(price + number);
      }

      const handleSize = (index) => {
        const difference = item.prices[index] - item.prices[size];
        setSize(index);
        changePrice(difference);

      }
      const handleChange = (e, option) => {
        const checked = e.target.checked;

        if(checked) {
      
          setExtras(prev=>[...prev, option]);
        }else {
          
          setExtras(extras.filter((extra) => extra._id !== option._id));
        }

      }
      const handleClick=() => {
        dispatch(addProduct({...item, extras, price, quantity}));

      }
    
  return (
    <div className={styles.container}>
         <div className={styles.left}>
         <div className={styles.imgContainer}>
             <Image src={item.img} layout="fill" objectFit='contain' alt="" />
             
             </div>
         </div>
         <div className={styles.right}>
         <h1 className={styles.title}>{item.title}</h1>
         <span className={styles.price}>kuna {price}</span> 
         <p className={styles.desc}>{item.desc}</p>
        
        
          <h3 className={styles.choose}>Choose what to put inside</h3>
        <div className={styles.ingredients}>
          {item.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
              type="checkbox"
              id={option.text}
              name={option.text}
              className={styles.checkbox}
              onChange={(e)=>handleChange(e, option)}
            />
            <label htmlFor="double">{option.text}</label>
          </div>
          ))}
          
          
        </div>
          
        <div className={styles.add}>
            <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}/>
            <button onClick={handleClick} className={styles.button}>Add to cart</button>
        </div>
             </div>
        
        </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      item: res.data,
    }
  }

}

export default Product;
