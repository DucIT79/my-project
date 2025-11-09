import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/CartSlice";
import styles from "./Cart.module.css";

export const CartAction = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  return (
    <div className={styles.cartAction}>
      <h3>Tổng cộng: {total.toLocaleString("vi-VN")}₫</h3>
      {/* <button onClick={() => dispatch(clearCart())} className={styles.checkoutBtn}>
        🧾 Thanh toán
      </button> */}
    </div>
  );
};
