import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../redux/CartSlice';
import { fetchProducts } from '../../redux/ProductSlice';
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import styles from './UserLayout.module.css'

const UserLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart());
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            <Header />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default UserLayout