import React from 'react'
import styles from "./Header.module.css";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Header = () => {
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)
    return (
        <div className={styles.header}>
            <div className={styles.logo}><a href='/'>NhaTui</a></div>
            <nav className={styles.nav}>
                <a href='/'>Trang chủ</a>
                <a href='/sanpham'>Sản Phẩm</a>
                <a href='/'>Trái Cây Tươi Hằng Ngày</a>
                <a href='/'>Quà Tặng</a>
                <a href='/lienhe'>Liên Hệ</a>
            </nav>
            <div className={styles.header_action}>
                <span className={styles.header_icons}>
                    <CiSearch /><p>Tìm Kiếm</p>
                    <Link to="/login" className={styles.nav_link}>
                        <FaRegUser /><p>Tài Khoản</p>
                    </Link>
                    <Link to="/cart" className={`${styles.nav_link} ${styles.cartLink}`}>
                        <div className={styles.cartWrapper}>
                            <BsCart />
                            {totalQuantity > 0 && (
                                <span className={styles.badge}>{totalQuantity}</span>
                            )}
                            <p>Giỏ Hàng</p>
                        </div>
                    </Link>
                </span>
            </div>
        </div>
    )
}