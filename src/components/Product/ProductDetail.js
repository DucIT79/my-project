
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import styles from "./ProductDetail.module.css";

export const ProductDetail = () => {
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // 🔹 Hàm tăng giảm số lượng
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    axios
      .get(`https://68e7a0cd10e3f82fbf3ffe42.mockapi.io/fruit/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, [id]);

  if (!product)
    return <p className={styles.loading}>Đang tải chi tiết sản phẩm...</p>;

  return (
    <div className={styles.detailContainer}>
      {/* Hình ảnh sản phẩm */}
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      {/* Thông tin sản phẩm */}
      <div className={styles.infoSection}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>
          {product.price.toLocaleString("vi-VN")}₫
        </p>
        <p className={styles.desc}>
          {product.discription || "Chưa có mô tả chi tiết."}
        </p>

        {/* 🔸 Bộ chọn số lượng */}
        <div className={styles.quantityContainer}>
          <button onClick={handleDecrease} className={styles.qtyBtn}>
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className={styles.qtyInput}
          />
          <button onClick={handleIncrease} className={styles.qtyBtn}>
            +
          </button>
        </div>

        {/* 🔸 Nút thêm vào giỏ */}
        <button
          className={styles.addButton}
          onClick={() => dispatch(addToCart({ ...product, quantity }))}
        >
          🛒 Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
