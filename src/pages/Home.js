import React from 'react'
import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'
import { ProductList } from '../components/Product/ProductList'
import { Sidebar } from '../components/Layout/Sidebar'
import { Banner } from '../components/Layout/Banner'

export const Home = () => {
  return (
    <div id = "home">
        <Banner/>
        {/* <Sidebar/> */}
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
    </div>
  )
}
