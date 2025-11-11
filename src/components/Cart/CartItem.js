
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/CartSlice"; 


import styles from "./Cart.module.css";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  //  Giảm số lượng
  const handleDecrease = () => {
    const newQuantity = item.quantity - 1;
    
    if (newQuantity >= 1) {
      // Gửi yêu cầu PUT để cập nhật số lượng
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    } else {
      // Nếu số lượng về 0, chuyển sang xóa sản phẩm
      dispatch(removeFromCart(item.id)); 
    }
  };

  //  Tăng số lượng
  const handleIncrease = () => {
    const newQuantity = item.quantity + 1;
    // Gửi yêu cầu PUT để cập nhật số lượng
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  //  Xóa
  const handleRemove = () => {
      dispatch(removeFromCart(item.id));
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h4>{item.name}</h4>
        {/* Đảm bảo item.price tồn tại trước khi gọi toLocaleString */}
        <p>{item.price?.toLocaleString() || '0'}₫</p> 
        <div className={styles.quantity}>
       
          <button onClick={handleDecrease} disabled={item.quantity <= 0}>-</button>
          <span>{item.quantity}</span>
         
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    
      <button className={styles.removeBtn} onClick={handleRemove}>
        ✕
      </button>
    </div>
  );
};