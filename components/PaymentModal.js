import React, { useState, useEffect } from 'react';
import { Modal, Button, Spin, Result, Divider, List } from 'antd';
import { useRouter } from 'next/router';
import useCart from "../Hooks/useCart";

const PaymentModal = ({orderFetch, wasSuccessful, setVisible}) => {

    const { showModalOrder, orderSummary, setShowModalOrder, setItemsCart } = useCart();

    const router = useRouter();

    const closeOrder = () => {
        localStorage.removeItem('cart');
        setShowModalOrder(false);
        //* this setVisible corresponds to the setState of cart (close cart modal) ❯
        setVisible(false);
        setItemsCart([]);
        router.push('/restaurants');
    };

    const detailOrder = () => {
        if(Object.keys(orderSummary) === 0) return <span>Data not available</span>
        const { orderId, description, amount, currency } = orderSummary;
        console.log(orderId, description, amount, currency)
        const orderItems = JSON.parse(description[0]);
        console.log(orderItems)
        return (
            <>
                <Divider orientation="left">Detail Order</Divider>
                <List
                    size="small"
                    header={<div><strong>OrderId </strong>: <code style={{color: 'red', display: 'block'}}>{orderSummary.orderId}</code></div>}
                    footer={<div style={{textAlign: 'center'}}>Total paid: <strong>{orderSummary.amount.$numberDecimal / 100}</strong> {orderSummary.currency}</div>}
                    bordered
                    dataSource={orderItems}
                    renderItem={item => <List.Item>Dish: {item.dishName} ❯ Qty: {item.quantity} ❯ Rest: {item.restaurantName} ❯ price: ${item.price}</List.Item>}
                /> 
            </>
        )
    };


    const renderResult = () => {
        if(!orderFetch && !wasSuccessful) {
            return <Result
                    status="error"
                    title="There are some problems with your payment."
                    subTitle="Try again later." 
                    extra={
                    <Button type="primary" key="console">
                        Go Cart
                    </Button>
                }
            />
        } 
        if(!orderFetch && wasSuccessful){
            return <Result
                        status="success"
                        title="You successfully bought your dishes!"
                        subTitle={`Order number: ${orderSummary?.orderId ? orderSummary.orderId : '000001214'} delivery takes 10-45 minutes, please wait.`}
                    >
                    {
                        detailOrder()
                    }
                </Result>
        };
        return <></>
    };
    
return (
        <>
            <Modal
                title="Order Summary"
                centered
                closable={false}
                visible={showModalOrder}
                footer={[
                    <Button
                        key="link"
                        onClick={() => closeOrder()}
                        disabled={orderFetch}
                    >
                        Go back to restaurants
                    </Button>,
                ]}
                
            >
                {
                    orderFetch &&
                    <Spin size="large" style={{display: 'block', margin: 'auto'}} />
                }
                {
                    renderResult()
                }
            </Modal>
        </>
    );
};

export default PaymentModal;