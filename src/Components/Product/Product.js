import { usePagination } from '@umijs/hooks';
import { Avatar, Card, List } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './Product.css';

const queryData = ({ current, pageSize }) =>
    fetch(`https://randomuser.me/api?results=${pageSize}&page=${current}`)
        .then(res => res.json())
        .then(res => ({
            total: 55,
            data: res.results,
        }));

const Product = () => {
    const { data, loading, pagination } = usePagination(queryData, {
        defaultPageSize: 9,
    });
    return (

        <div className="container">
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