import React from 'react'
import Image from "next/image";
import styles from "../../styles/Order.module.css";
import axios from 'axios';
import cartSlice from '../../redux/cartSlice';
 const Order = ({order}) => {
    const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    
  };
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.row}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Broj naruzdbe</th>
            <th>Gost</th>
            
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <span className={styles.id}>{order._id}</span>
            </td>
            <td>
              <span className={styles.name}>{order.customer}</span>
            </td>
            
            <td>
              <span className={styles.total}>kuna {order.total}</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.row}>
        
        <div className={statusClass(0)}>
          <Image src="/img/bake.png" width={30} height={30} alt="" />
          <span>Narudzba predana</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(1)}>
          <Image src="/img/bike.png" width={30} height={30} alt="" />
          <span>Preparing</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(2)}>
          <Image src="/img/bake.png" width={30} height={30} alt="" />
          <span>Ready</span>
          <div className={styles.checkedIcon}>
            <Image
              className={styles.checkedIcon}
              src="/img/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Subtotal:</b>kuna {order.total}
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b>kuna 0.00
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b>kuna {order.total}
        </div>
        <button disabled className={styles.button}>
          PAY WITH CASH ON THE PREMISES!
        </button>
      </div>
    </div>
  </div>
    
  );
};

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data,
    }
  }

}
export default Order;
