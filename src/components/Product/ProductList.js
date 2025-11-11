import React, { useState, useEffect, useMemo } from "react"; // ✅ 1. Thêm useState, useMemo
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/ProductSlice";
import { addToCart } from "../../redux/CartSlice";
import { ProductCart } from "./ProductCart";
import CustomPagination from '../Common/Pagination'; // ✅ 2. Import Pagination
import { Row, Col } from 'reactstrap'; // ✅ 3. Import Row, Col để làm layout đẹp

export const ProductList = () => {
  const dispatch = useDispatch();

  // ✅ 4. Lấy TẤT CẢ state cần thiết từ Redux (bao gồm cả state lọc)
  const {
    list: allProducts, // Đổi tên 'products' thành 'allProducts' cho rõ nghĩa
    status,
    error,
    searchTerm,
    sortOrder,
    filterPrice
  } = useSelector((state) => state.products);

  // 5. Gọi API (giữ nguyên)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // ✅ 6. LOGIC LỌC VÀ SẮP XẾP
  // useMemo giúp logic này không chạy lại nếu không cần thiết
  const filteredProducts = useMemo(() => {
    let processedProducts = [...allProducts];

    // Lọc tìm kiếm
    if (searchTerm) {
      processedProducts = processedProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Lọc giá
    processedProducts = processedProducts.filter(p => p.price <= filterPrice);

    // Sắp xếp
    if (sortOrder === 'asc') {
      processedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      processedProducts.sort((a, b) => b.price - a.price);
    }
    return processedProducts;
  }, [allProducts, searchTerm, sortOrder, filterPrice]); // Phải khai báo các dependencies

  // ✅ 7. LOGIC PHÂN TRANG (Client-side)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Bạn có thể đổi số này

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // currentProducts là sản phẩm cuối cùng sẽ được render
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // ✅ 8. Tự động về trang 1 khi người dùng lọc
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder, filterPrice]);

  // 9. Hàm thêm vào giỏ (giữ nguyên)
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // 10. Xử lý trạng thái (giữ nguyên)
  if (status === 'loading') {
    return <div style={{ padding: "40px", textAlign: "center" }}>Đang tải sản phẩm từ MockAPI...</div>;
  }

  if (status === 'failed') {
    return <div style={{ padding: "40px", color: "red", textAlign: "center" }}>Lỗi: Không thể tải dữ liệu sản phẩm. {error}</div>;
  }

  // ✅ 11. CẬP NHẬT RENDER
  return (
    <div>
      {/* Hiển thị số lượng sản phẩm tìm thấy */}
      <div className="mb-3">
        <span className="fw-bold">{filteredProducts.length} sản phẩm</span>
      </div>

      {/* Kiểm tra nếu không có sản phẩm sau khi lọc */}
      {currentProducts.length === 0 ? (
        <div className="text-center p-5">Không tìm thấy sản phẩm nào.</div>
      ) : (
        <Row>
          {/* Map qua "currentProducts" (đã lọc VÀ phân trang) */}
          {currentProducts.map((p) => (
            <Col key={p.id} sm="6" md="4" lg="4" xl="3" className="mb-4">
              <ProductCart
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                product={p}
                onAddToCart={() => handleAddToCart(p)}
              />
            </Col>
          ))}
        </Row>
      )}

      {/* Hiển thị thanh phân trang */}
      <div className="d-flex justify-content-center mt-4">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage} // Truyền hàm setCurrentPage
        />
      </div>
    </div>
  );
};