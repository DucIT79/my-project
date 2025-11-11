import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Title } from 'react-admin';

export const Dashboard = () => (
    <Card sx={{ marginTop: 2 }}>
        <Title title="Trang Quản Trị NhaTui" />
        <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
                Chào mừng bạn đến với Trang Quản Trị
            </Typography>
            <Typography variant="body1">
                Đây là nơi bạn có thể quản lý toàn bộ sản phẩm của cửa hàng.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
                Vui lòng chọn mục **"Sản phẩm"** (có icon 🏷️) ở thanh menu bên trái để bắt đầu:
                <ul>
                    <li>Xem danh sách sản phẩm.</li>
                    <li>Thêm sản phẩm mới.</li>
                    <li>Sửa thông tin sản phẩm.</li>
                    <li>Xóa sản phẩm.</li>
                </ul>
            </Typography>
        </CardContent>
    </Card>
);