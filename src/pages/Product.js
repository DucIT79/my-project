import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { ProductList } from '../components/Product/ProductList';
import { ProductFilter } from '../components/Product/ProductFilter';
// 1. Import component Breadcrumb mới
import Breadcrumb from '../components/Common/Breadcrumb'; 

export const Product = () => {

  // 2. Định nghĩa đường dẫn cho trang này
  const breadcrumbPaths = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/product' } // 'Sản phẩm' là trang hiện tại
  ];

  return (
    <Container  className="mt-4">{/*fluid*/}
      
      {/* 3. Đặt Breadcrumb ở đây */}
      <Breadcrumb paths={breadcrumbPaths} />

      <Row>
        {/* CỘT TRÁI: FILTER */}
        <Col md="3">
          <ProductFilter />
        </Col>

        {/* CỘT PHẢI: LIST SẢN PHẨM */}
        <Col md="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};