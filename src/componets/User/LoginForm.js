import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css"; // dùng module CSS
import anhtraicay from "../../assets/17c0474008cc8934eea9d3fe22d5c849-1.webp"

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollTriggered, setIsScrollTriggered] = useState(false);

  // Khi scroll quá 1/3 màn hình thì mở modal
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3 && !isScrollTriggered) {
        setIsScrollTriggered(true);
        setIsOpen(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollTriggered]);

  // ESC để đóng modal
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Ẩn scroll body khi mở modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Nút SCROLL DOWN */}
      {!isScrollTriggered && (
        <div className={styles.scrollDown}>
          SCROLL DOWN
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M16 3C8.832031 3 3 8.832031 3 16s5.832031 13 13 13 13-5.832031 13-13S23.167969 3 16 3zm0 2c6.085938 0 11 4.914063 11 11 0 6.085938-4.914062 11-11 11-6.085937 0-11-4.914062-11-11C5 9.914063 9.914063 5 16 5zm-1 4v10.28125l-4-4-1.40625 1.4375L16 23.125l6.40625-6.40625L21 15.28125l-4 4V9z" />
          </svg>
        </div>
      )}

      {/* Background scroll */}
      <div className={styles.container}></div>

      {/* Modal */}
      <div className={`${styles.modal} ${isOpen ? styles.isOpen : ""}`}>
        <div className={styles.modalContainer}>
          <div className={styles.modalLeft}>
            <h1 className={styles.modalTitle}>Welcome!</h1>
            <p className={styles.modalDesc}>
              Fanny pack hexagon food truck, street art waistcoat kitsch.
            </p>

            <div className={styles.inputBlock}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="password" className={styles.inputLabel}>
                Password
              </label>
              <input type="password" id="password" placeholder="Password" />
            </div>

            <div className={styles.modalButtons}>
              <a href="/">Forgot your password?</a>
              <button className={styles.inputButton}>Login</button>
            </div>

            <p className={styles.signUp}>
              Don't have an account? <a href="/">Sign up now</a>
            </p>
          </div>

          <div className={styles.modalRight}>
            <img
              src= {anhtraicay}
              alt="Login visual"
            />
          </div>

          <button
            className={`${styles.iconButton} ${styles.closeButton}`}
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25 3C12.86 3 3 12.86 3 25s9.86 22 22 22 22-9.86 22-22S37.14 3 25 3zm0 2c10.49 0 19 8.51 19 19s-8.51 19-19 19S6 34.49 6 24 14.51 5 25 5zm-8 10.99a1 1 0 0 0-.71 1.71L23.59 25l-7.3 7.29a1 1 0 1 0 1.42 1.42L25 26.41l7.29 7.3a1 1 0 0 0 1.42-1.42L26.41 25l7.3-7.29a1 1 0 0 0-1.42-1.42L25 23.59l-7.29-7.3a1 1 0 0 0-.71-.3z" />
            </svg>
          </button>
        </div>

        <button className={styles.modalButton} onClick={() => setIsOpen(true)}>
          Click here to login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
