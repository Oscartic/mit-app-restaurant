import { Table, Tag, Space, Empty, Divider } from 'antd';
import { useEffect, useState } from 'react';

const Orders = ({orders}) => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        if(orders && orders.length > 0) {
            const copyOrders = orders.map(order => {
                return {
                    key: order._id,
                    ...order
                }
            });
            setOrderList(copyOrders);
        };
    },[orders]);
    const columns = [
    {
        title: 'OrderId',
        dataIndex: 'orderId',
        key: 'orderId',
        render: text => <code>{text}</code>,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Receipt email',
        dataIndex: 'receipt_email',
        key: 'receipt_email',
    },
    {
        title: 'Dishes',
        key: 'description',
        dataIndex: 'description',
        render: description => (
        <>
            {JSON.parse(description).map(product => {
            let color = product.dishName.length < 10 ? 'geekblue' : product.dishName.length < 16 ? 'volcano' : 'green';
            return (
                <Tag color={color} key={product.dishId}>
                    {product.dishName.toUpperCase()}
                    {' ➜ '}
                    {product.quantity}
                    {' × '}
                    {product.price}
                </Tag>
            );
            })}
        </>
        ),
    },
    {
        title: 'Amount',
        key: 'amount',
        dataIndex: 'amount',
        render: amount => '$ ' + Number(amount.$numberDecimal / 100).toFixed(2)
    },
    {
        title: 'Currency',
        key: 'currency',
        dataIndex: 'currency'
    },
    
];


    return (
        <>
            {
                orders && orders.length > 0 ?
                    <Table columns={columns} dataSource={orderList} />
                :
                    <Empty description="You do not record orders" /> 
            }
            
        </>
    );

}

export default Orders;