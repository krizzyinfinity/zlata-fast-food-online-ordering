import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import Router from "next/dist/server/router";
import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className={ styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/landline.png"
            width="40px"
            height="40px"
            alt="picture of phone"
          />
        </div>
        <div className={styles.texts}>
          <h3 className={styles.text}>0913910137</h3>
        </div>
      </div>

      <div className={active ? styles.active .navbar :  styles.navbar}>
        <ul className={styles.list}>
          <div className={styles.closed}>
            <AiOutlineClose className={styles.close} onClick={showMenu} />
          </div>
          <Link className={styles.myA} href="/" passHref>
            <li >Home</li>
          </Link>
          <Link className={styles.myA} href="/food" passHref>
            <li >Menu</li>
          </Link>
        </ul>
      </div>
      <div className={styles.changer}>
        <MdMenu className={styles.menu} onClick={showMenu} />
      </div>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/shopping-cart.png" width="50px" height="50px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
