import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, FormGroup, Label, InputGroup } from 'reactstrap';
// ✅ Import các action từ slice
import { setSearchTerm, setSortOrder, setFilterPrice } from '../../redux/ProductSlice';

export const ProductFilter = () => {
    const dispatch = useDispatch();
    
    // ✅ Đọc state filter từ Redux để giữ cho UI đồng bộ
    const { searchTerm, sortOrder, filterPrice } = useSelector((state) => state.products);

    const handleSearchChange = (e) => {
        // ✅ Dispatch action thay vì gọi onSearchChange(props)
        dispatch(setSearchTerm(e.target.value));
    };

    const handleSortChange = (e) => {
        dispatch(setSortOrder(e.target.value));
    };

    const handlePriceChange = (e) => {
        dispatch(setFilterPrice(Number(e.target.value)));
    };

    return (
        <div /* className={styles.filterSidebar} */>
            <FormGroup>
                <Label>Tìm kiếm</Label>
                <Input
                    type="text"
                    placeholder="Tìm tên sản phẩm..."
                    value={searchTerm} // Lấy value từ Redux
                    onChange={handleSearchChange}
                />
            </FormGroup>

            <FormGroup>
                <Label>Sắp xếp</Label>
                <Input
                    type="select"
                    value={sortOrder} // Lấy value từ Redux
                    onChange={handleSortChange}
                >
                    <option value="">Mặc định</option>
                    <option value="asc">Giá: Tăng dần</option>
                    <option value="desc">Giá: Giảm dần</option>
                </Input>
            </FormGroup>
            
            <FormGroup>
                <Label>Giá tối đa: {filterPrice.toLocaleString()} VNĐ</Label>
                <Input
                    type="range"
                    min="0"
                    max="500000"
                    value={filterPrice} // Lấy value từ Redux
                    onChange={handlePriceChange}
                />
            </FormGroup>
        </div>
    );
};