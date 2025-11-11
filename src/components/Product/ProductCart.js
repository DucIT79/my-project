import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCart.module.css";
import { ProductGallery } from "./ProductGallery";
import { Link } from "react-router-dom";
// ✅ 1. Đổi icon (ví dụ dùng BsCart)
import { BsCart } from "react-icons/bs";

export const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, name, price, discription, image } = product;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleOpenDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleOpenDetail}>
      <Link to={`/product/${id}`} className={styles.link}>
        <ProductGallery image={image} />
      </Link>

      <div className={styles.contentWrapper}>
        <h3>{name}</h3>
        {/* ✅ 2. BỎ MÔ TẢ (description) ĐI CHO GỌN */}
        {/* <p className={styles.desc}>{discription || "..."}</p> */}
        <p className={styles.price}>{price?.toLocaleString("vi-VN")}₫</p>
      </div>

      {/* ✅ 3. SỬA LẠI NÚT BẤM */}
      <button className={styles.button} onClick={handleAddToCart}>
        <BsCart />
        <span>
          CHỌN MUA
        </span>
      </button>
    </div>
  );
};