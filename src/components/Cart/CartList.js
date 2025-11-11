import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css";
import { fetchCart } from "../../redux/CartSlice"; 

export const CartList = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);

 
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loading) {
    return <p className={styles.loading}>Đang tải giỏ hàng...</p>;
  }

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
