import React from 'react'
import styles from "./Footer.module.css";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection} id="lienhe">
          <h3>Liên Hệ</h3>
          <p>📍 123 Đường Nguyễn Gia Trí, Quận Bình Thạnh, TP.HCM</p>
          <p><FaPhone/> 0901 234 567</p>
          <p><CiMail/> info@nhatuifruit.com</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Chính Sách</h3>
          <p><a href="#">Chính sách đổi trả</a></p>
          <p><a href="#">Chính sách bảo mật</a></p>
          <p><a href="#">Điều khoản sử dụng</a></p>
        </div>

        <div className={styles.footerSection}>
          <h3>Theo Dõi</h3>
          <p><a href="https://www.facebook.com/FashionistaZ7" target="_blank" rel="noreferrer">Facebook</a></p>
          <p><a href="https://www.instagram.com/fashionshop_24.12/" target="_blank" rel="noreferrer">Instagram</a></p>
          <p><a href="#">Zalo</a></p>
        </div>
      </div>

      <p className={styles.copyRight}>
        Copyright &copy; 2025 NhaTui - Trái Cây Tươi - Sạch - Tiện Lợi.
      </p>
    </div>
  )
}
