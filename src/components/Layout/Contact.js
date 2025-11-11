import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styles from './Contact.module.css'; 
 import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
 import Breadcrumb from '../Common/Breadcrumb';

export const Contact = () => {
    const breadcrumbPaths = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Liên hệ', path: '/lienhe' } 
  ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form (ví dụ: gửi email hoặc lưu vào API)
        console.log("Form đã gửi:", formData);
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className={styles.contactPage}>
            <Container>
                <Breadcrumb paths={breadcrumbPaths} />
                <Row>
                    <Col md={12} className="text-center">
                        <h1 className={styles.pageTitle}>Liên Hệ Với Chúng Tôi</h1>
                        <p className={styles.pageSubtitle}>
                            Bạn có câu hỏi? Đừng ngần ngại gửi một tin nhắn cho NhaTui!
                        </p>
                    </Col>
                </Row>

                <Row className={styles.contactWrapper}>
                 
                    <Col md={7} className={styles.formColumn}>
                        <h3 className={styles.sectionTitle}>Gửi tin nhắn</h3>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">Tên của bạn</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nhập tên của bạn"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Nhập email của bạn"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="subject">Chủ đề</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Chủ đề tin nhắn"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Tin nhắn</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    rows="5"
                                    placeholder="Nội dung tin nhắn của bạn..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <Button type="submit" className={styles.submitButton}>Gửi Tin Nhắn</Button>
                        </Form>
                    </Col>

                    <Col md={5} className={styles.infoColumn}>
                        <h3 className={styles.sectionTitle}>Thông tin liên hệ</h3>
                        <p>
                            Chúng tôi luôn sẵn lòng lắng nghe bạn. Hãy ghé thăm cửa hàng 
                            hoặc gọi cho chúng tôi bất cứ lúc nào!
                        </p>
                        <div className={styles.infoItem}>
                            <span><FaMapMarkerAlt /></span>
                            <strong>Địa chỉ:</strong>
                            <p>123 Đường Nguyễn Gia Trí, Quận Bình Thạnh, TP.HCM </p>
                        </div>
                        <div className={styles.infoItem}>
                            <span><FaPhone /></span>
                            <strong>Điện thoại:</strong>
                            <p>0909 123 456</p>
                        </div>
                        <div className={styles.infoItem}>
                            <span><FaEnvelope /></span>
                            <strong>Email:</strong>
                            <p>hotro@nhatui.com</p>
                        </div>
                        
                        {/* Bạn có thể nhúng bản đồ Google Map vào đây */}
                        <div className={styles.mapPlaceholder}>
                            {/* Thay thế bằng code nhúng Google Maps nếu bạn muốn */}
                            <img 
                                src="https://media.wired.com/photos/59269cd37034dc5f0312932e/master/w_960,c_limit/GoogleMapTA.jpg" 
                                alt="Bản đồ" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};