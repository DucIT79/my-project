import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, increaseQuantity } from "../../redux/CartSlice";
import styles from "./Cart.module.css";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h4>{item.name}</h4>
        <p>{item.price.toLocaleString()}₫</p>
        <div className={styles.quantity}>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <button className={styles.removeBtn} onClick={() => dispatch(removeFromCart(item.id))}>
        ✕
      </button>
    </div>
  );
};
