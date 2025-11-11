import React from 'react';
// 1. Import Reactstrap
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// 2. Import file CSS Module
import styles from './Pagination.module.css';

/**
 * Component Pagination tái sử dụng.
 * @param {object} props
 * @param {number} props.totalPages - Tổng số trang.
 * @param {number} props.currentPage - Trang hiện tại.
 * @param {function} props.onPageChange - Hàm được gọi khi người dùng click vào trang mới.
 */
function CustomPagination({ totalPages, currentPage, onPageChange }) {

    // (Các hàm logic handlePageClick, handlePrevious, handleNext giữ nguyên)
    const handlePageClick = (pageNumber) => {
        if (pageNumber !== currentPage) {
            onPageChange(pageNumber);
        }
    };
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    if (totalPages <= 1) {
        return null;
    }
    const pageNumbers = [...Array(totalPages)].map((_, index) => index + 1);

    return (
        // 3. Áp dụng class module cho thẻ <Pagination>
        <Pagination className={styles.pagination}>
            {/* Nút Lùi (Previous) */}
            <PaginationItem 
                disabled={currentPage === 1}
                // 4. Áp dụng class module cho thẻ <PaginationItem>
                className={styles.pageItem} 
            >
                <PaginationLink 
                    previous 
                    onClick={handlePrevious} 
                    // 5. Áp dụng class module cho thẻ <PaginationLink>
                    className={styles.pageLink} 
                />
            </PaginationItem>

            {/* Các số trang */}
            {pageNumbers.map((pageNumber) => (
                <PaginationItem 
                    key={pageNumber} 
                    active={currentPage === pageNumber}
                    // 4. Áp dụng class module
                    className={styles.pageItem} 
                >
                    <PaginationLink 
                        onClick={() => handlePageClick(pageNumber)}
                        // 5. Áp dụng class module
                        className={styles.pageLink} 
                    >
                        {pageNumber}
                    </PaginationLink>
                </PaginationItem>
            ))}
            
            {/* Nút Tiến (Next) */}
            <PaginationItem 
                disabled={currentPage === totalPages}
                // 4. Áp dụng class module
                className={styles.pageItem} 
            >
                <PaginationLink 
                    next 
                    onClick={handleNext} 
                    // 5. Áp dụng class module
                    className={styles.pageLink} 
                />
            </PaginationItem>
        </Pagination>
    );
}

export default CustomPagination;