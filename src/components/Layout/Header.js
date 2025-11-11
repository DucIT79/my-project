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
                <a href='/product'>Sản Phẩm</a>
                <a href='/'>Trái Cây Tươi Hằng Ngày</a>
                <a href='/'>Quà Tặng</a>
                <a href='/lienhe'>Liên Hệ</a>
            </nav>
            <div className={styles.header_action}>
                <span className={styles.header_icons}>
                    <CiSearch /><span>Tìm Kiếm</span>
                    <Link to="/dang-nhap" className={styles.nav_link}>
                        <FaRegUser /><span>Tài Khoản</span>
                    </Link>
                    <Link to="/cart" className={`${styles.nav_link} ${styles.cartLink}`}>
                        <div className={styles.cartWrapper}>
                            <BsCart />
                            {totalQuantity > 0 && (
                                <span className={styles.badge}>{totalQuantity}</span>
                            )}
                            <span>Giỏ Hàng</span>
                        </div>
                    </Link>
                </span>
            </div>
        </div>
    )
}