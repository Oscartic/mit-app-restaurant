import React, { useState } from "react";
import { Drawer, Divider, Empty } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from '../styles/Cart.module.css'
import ItemsCart from "./ItemsCart";
const Cart = ({quantity, total}) => {

    const itemsCart = [
        {id: 1, quantity: 1, price: 5.13, dishName: 'Swsopwaal', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, quantity: 2, price: 2.99, dishName: 'Logua Logua', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 4, quantity: 4, price: 1.11, dishName: 'Mulan', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."}
    ];

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const totalCost = () => {
        let total = 0;
        itemsCart.map((element) => {
            total += element.price;
        });
        return <div className={styles.estimated_total}><span className={styles.text}>Estimated total: </span><span className={styles.value}>${total}</span></div>; 

    }

    return (
        <div className={styles.cart}>
        <div className={styles.btn} onClick={showDrawer}>
            <span className={styles.title}>
                <ShoppingCartOutlined />
                Cart 
            </span>
            <span className={styles.quantity}>
                {quantity} 
            </span>
            <span className={styles.total}>
                $ {Number(total).toFixed(2)}
            </span>
        </div>
        <Drawer
            title="MITRESTAURANT CART"
            placement="right"
            width={440}
            onClose={onClose}
            visible={visible}
        >
            {
                itemsCart.map((item)=> {
                    return (
                        <ItemsCart 
                            key={`${item.id}${item.restaurantId}`}
                            id={item.id} 
                            quantity={item.quantity} 
                            price={item.price} 
                            dishName={item.dishName} 
                            description={item.description}
                            restaurantId={item.restaurantName}
                            restaurantName={item.restaurantName}
                            size='small'
                        />
                    )
                })
            }
            {
                totalCost()
            }
            {
                itemsCart.length <= 0 &&
                <Empty description="You still do not have selected dishes"/>
            }
        </Drawer>
        </div>
    );
};

export default Cart;