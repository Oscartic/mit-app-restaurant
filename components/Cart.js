import React, { useEffect, useState } from "react";
import { Drawer, Empty, Button } from "antd";
import { ShoppingCartOutlined, CreditCardOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css'
import ItemsCart from "./ItemsCart";
import useCart from "../Hooks/useCart";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'; 

const Cart = () => {

    const { itemsCart, setItemsCart, totalCart, totalItems } = useCart();

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const makePayment = async token => {

        try {
            const respond = await axios.post(`http://localhost:5001/payment`, {
                    token,
                    itemsCart
                }
            );
            console.log(respond);    
        } catch (error) {
            console.log(error);
        }
    };

    return (    
        <div className={styles.cart}>
            <div className={styles.btn} onClick={showDrawer}>
                <span className={styles.title}>
                    <ShoppingCartOutlined />
                    Cart 
                </span>
                <span className={styles.quantity}>
                    {totalItems()} 
                </span>
                <span className={styles.total}>
                    $ {totalCart()}
                </span>
            </div>
            <Drawer
                title="MitRestaurants Cart"
                placement="right"
                width={495}
                onClose={onClose}
                visible={visible}
            >
                {
                    itemsCart.map((item)=> {
                        return (
                            <ItemsCart 
                                key={item.dishId}
                                dishId={item.dishId} 
                                quantity={item.quantity} 
                                price={item.price} 
                                dishName={item.dishName} 
                                description={item.description}
                                restaurantId={item.restaurantId}
                                restaurantName={item.restaurantName}
                                itemsCart={itemsCart}
                                totalCart={totalCart}
                                totalItems={totalItems}
                                setItemsCart={setItemsCart}
                                size='small'
                            />
                        )
                    })
                }
                <div className={styles.estimated_total}>
                    <span className={styles.text}>Estimated total: </span>
                    <span className={styles.value}>${totalCart()}</span>
                </div>
                
                {
                    itemsCart.length <= 0 &&
                    <Empty description="You still do not have selected dishes"/>
                }
                <StripeCheckout
                    name="MitRestaurants"
                    stripeKey={process.env.STRIPE_KEY}
                    token={makePayment}
                    amount={totalCart() * 100}
                >
                    <Button type="primary" block>
                        <CreditCardOutlined /> Checkout all Dishes
                    </Button>
                </StripeCheckout>

            </Drawer>
        </div>
    );
};

export default Cart;