import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg, CardText,} from "reactstrap";
import styles from "./CheckOutForm.module.css";
import qrImage from "../../assets/qr-code.png"; // 🔹 thay bằng ảnh QR của bạn

export const CheckOutForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Đơn hàng đã được gửi!");
    };

    return (
        <Form onSubmit={handleSubmit} className={styles.formContainer}>
            <h4 className={styles.title}>Thanh toán</h4>

            {/* Số điện thoại */}
            <FormGroup className={styles.formGroup}>
                <Label for="phone">Số điện thoại</Label>
                <Input
                    id="phone"
                    type="text"
                    placeholder="Nhập số điện thoại của bạn"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                />
            </FormGroup>

            {/* Phương thức thanh toán */}
            <FormGroup tag="fieldset" className={styles.formGroup}>
                <legend className={styles.legend}>Phương thức thanh toán</legend>
                <FormGroup check className={styles.radioGroup}>
                    <Input
                        name="payment"
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Label check>Thanh toán khi nhận hàng (COD)</Label>
                </FormGroup>
                <FormGroup check className={styles.radioGroup}>
                    <Input
                        name="payment"
                        type="radio"
                        value="bank"
                        checked={paymentMethod === "bank"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Label check>Chuyển khoản ngân hàng</Label>
                </FormGroup>
            </FormGroup>

            {/* QR khi chọn chuyển khoản */}
            {paymentMethod === "bank" && (
                <Card className={styles.qrCard}>
                    <CardBody className="text-center">
                        <CardImg
                            src={qrImage}
                            alt="QR chuyển khoản"
                            className={styles.qrImage}
                        />
                        <CardText className={styles.qrNote}>
                            Nội dung chuyển khoản:{" "}
                            <strong>{phone.trim() || "[số điện thoại của bạn]"}</strong>
                        </CardText>
                    </CardBody>
                </Card>
            )}

            <Button color="primary" type="submit" className={styles.submitButton}>
                Gửi đơn hàng
            </Button>
        </Form>
    );
};
