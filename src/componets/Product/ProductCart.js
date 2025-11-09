import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

import styles from "./ProductCard.module.css";
import { ProductGallery } from "./ProductGallery";


export const ProductCard = ({ id,name, price ,image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, name, price, image }; // ✅ tạo object đầy đủ
    dispatch(addToCart(product)); // ✅ gửi action lên Redux
  };

  return (
    <div className={styles.card}>
      <ProductGallery image={image}/>
      <h3>{name}</h3>
      <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p className={styles.price}>{price.toLocaleString("vi-VN")}₫</p>{/*{price}*/}
      <button className={styles.button} onClick={handleAddToCart}>Thêm vào giỏ</button>
    </div>
  );
};
