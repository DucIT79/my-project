import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { ProductListAdmin, ProductEditAdmin, ProductCreateAdmin } from './ProductAdmin';
import ProductIcon from '@mui/icons-material/LocalOffer';
import { Dashboard } from './Dashboard';

export const AdminApp = () => (
    <Admin
        dataProvider={dataProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="fruit"
            list={ProductListAdmin}
            edit={ProductEditAdmin}
            create={ProductCreateAdmin}
            icon={ProductIcon}
            options={{ label: 'Sản phẩm' }}
        />
    </Admin>
);