import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";

export const CartList = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cartList}>
      {items.length === 0 ? (
        <p className={styles.empty}>Giỏ hàng trống</p>
      ) : (
        items.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};
