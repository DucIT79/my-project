import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Error.module.css'; 

export const Error = () => {
    return (
        <Container className={styles.notFoundContainer}>
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div className={styles.contentWrapper}>
                       
                        <div className={styles.svgContainer}>
                            <svg 
                                xmlns="http://www.w3.org/https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-5-800x450.jpg2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                                className={styles.notFoundSvg}
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-17v2h2v-2h-2zm0 4v8h2v-8h-2z"/>
                            </svg>
                        </div>
                        
                       
                        <h1 className={styles.notFoundTitle}>404</h1>
                        
                        <p className={styles.notFoundMessage}>
                            Oops! Lỗi rồi bạn êy.
                        </p>
                        <p className={styles.notFoundSuggestion}>
                            Đừng lo lắng, bạn có thể quay lại trang chủ.
                        </p>
                        
                        
                        <Button 
                            tag={Link} 
                            to="/" 
                            className={styles.homeButton}
                        >
                            Quay về Trang Chủ
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};