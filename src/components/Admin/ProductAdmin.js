import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ImageField,
    DeleteButton 
} from 'react-admin';


export const ProductListAdmin = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="image" title="name" label="Ảnh" sortable={false} />
            <TextField source="name" label="Tên sản phẩm" />
            <NumberField source="price" label="Giá" options={{ style: 'currency', currency: 'VND' }} />
            <NumberField source="quantity" label="Số lượng" />
            <TextField source="discription" label="Mô tả" />
            <EditButton />
            <DeleteButton /> 
        </Datagrid>
    </List>
);

//   (Edit)
export const ProductEditAdmin = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" label="Tên sản phẩm" />
            <NumberInput source="price" label="Giá" />
            <NumberInput source="quantity" label="Số lượng" />
            <TextInput source="discription" label="Mô tả" multiline fullWidth />
            <TextInput source="image" label="Link ảnh" fullWidth />
        </SimpleForm>
    </Edit>
);

//  (Create)
export const ProductCreateAdmin = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Tên sản phẩm" />
            <NumberInput source="price" label="Giá" />
            <NumberInput source="quantity" label="Số lượng" />
            <TextInput source="discription" label="Mô tả" multiline fullWidth />
            <TextInput source="image" label="Link ảnh" fullWidth />
            D</SimpleForm>
    </Create>
);