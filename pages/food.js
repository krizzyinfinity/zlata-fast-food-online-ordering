import React from 'react'
import { ProductList } from '../components/ProductList'
import axios from 'axios'
const food = ({productList}) => {
  return (
    <div>
         <ProductList productList={productList} />
        
    </div>
  )
}

export default food

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;
  
   
  
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        productList: res.data,
        
      }
    }
  
  }
           