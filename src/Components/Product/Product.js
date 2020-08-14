import { usePagination } from '@umijs/hooks';
import { Avatar, Card, List } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Product.css';
import { Button } from 'react-bootstrap';
import ProductForm from '../Forms/ProductForm';

const queryData = ({ current, pageSize }) =>
    fetch(`https://randomuser.me/api?results=${pageSize}&page=${current}`)
        .then(res => res.json())
        .then(res => ({
            total: 55,
            data: res.results,
        }));



const Product = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { data, loading, pagination } = usePagination(queryData, {
        defaultPageSize: 9,
    });
    return (

        <div className="container">
            <div id="addProduct">
                <Button variant="success" color="primary" onClick={() => setOpen(true)}>Add new product</Button>
            </div>

            <ProductForm open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
            ></ProductForm>

            <div className="product-view">
                <List
                    grid={{
                        gutter: 16,
                        column: 3,
                    }}
                    dataSource={data}
                    loading={loading}
                    pagination={pagination}
                    renderItem={item => (
                        <List.Item>
                            <Card>
                                <Card.Meta
                                    avatar={
                                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    }
                                    title={item.name.last}
                                    description="Molla Salt"

                                />
                                <br />
                                <br />
                                <p>Quantity: 10pcs</p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Product;