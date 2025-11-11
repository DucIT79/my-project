import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css'; // Chúng ta sẽ tạo file CSS này ngay sau đây

/**
 * Component Breadcrumb tái sử dụng.
 * @param {object} props
 * @param {Array<{name: string, path: string}>} props.paths - Mảng các đối tượng đường dẫn.
 */
const Breadcrumb = ({ paths }) => {
  if (!paths || paths.length === 0) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumb}>
      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;

        return (
          <React.Fragment key={path.name}>
            {isLast ? (
              // Mục cuối cùng (trang hiện tại) - là text, không phải link
              <span className={styles.active}>{path.name}</span>
            ) : (
              // Các mục trước đó - là link
              <Link className={styles.link} to={path.path}>
                {path.name}
              </Link>
            )}

            {/* Thêm dấu / ngăn cách */}
            {!isLast && <span className={styles.separator}>/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;