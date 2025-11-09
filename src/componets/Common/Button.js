import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./Button.module.css";

export const Button = () => {
  const [visible, setVisible] = useState(false);

  // Khi cuộn xuống dưới 300px thì hiện nút
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 900) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className={styles.backToTop} onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};
