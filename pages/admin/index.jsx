import styles from "../../styles/Admin.module.css"
import Image from "next/image";
import React, { useState } from 'react'
import axios from "axios";


const Index = ({orders, products}) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparing", "Ready"];
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setProductList(productList.filter((product) => product._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <h1 className={styles.title}>Produkti</h1>
            <table className={styles.table}>
            <tbody>
              
            <tr className={styles.trTitle}>
              <th>Slika</th>
              <th>Id</th>
              <th>Naziv</th>
              <th>Cijena</th>
              <th>Akcija</th>
            </tr>
          </tbody>
          
          {products.map((product) => (
            <tbody key={product._id}>
         
            <tr className={styles.trTitle}>
              <td><Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  /></td>
              <td>{product._id.slice(0,5)}...</td>
              <td>{product.title}</td>
              <td>{product.prices}</td>
              <td>
               
                  <button className={styles.button}>Izmijeni</button>
                  
                  <button onClick={()=> handleDelete(product._id)} className={styles.button}>Izbrisi</button>
              </td>
            </tr>
            </tbody>
             ))}
             
            </table>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>Narudzbe</h1>
        <table className={styles.table}>
            <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Gost</th>
              <th>Total</th>
              <th>Akcija</th>
            </tr>
          </tbody>
          {orderList.map((order) =>(

         
          <tbody key={order._id}>
            <tr className={styles.trTitle}>
              <td>{order._id.slice(0,5)}...</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{status[order.status]}</td>
              <td>
                  <button onClick={()=> handleStatus(order._id)} className={styles.button}>Sljedeci stadij</button>
                  
              </td>
            </tr>
          </tbody>
           ))}
            </table>
        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
