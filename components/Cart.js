import React, { useEffect, useState } from "react";
import { Drawer, Empty } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css'
import ItemsCart from "./ItemsCart";

const Cart = () => {

    const data = [
        {id: 1, quantity: 1, price: 5.13, dishName: 'Swsopwaal', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, quantity: 2, price: 2.99, dishName: 'Logua Logua', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 4, quantity: 4, price: 1.11, dishName: 'Mulan', restaurantId: 2, restaurantName: 'Karma', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."}
    ];

    const [itemsCart, setItemsCart] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(itemsCart.length <= 0) setItemsCart(data);
    },[]);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const totalCart = () => {
        let acc = 0;
        itemsCart.map(item => {
            return acc += (item.quantity * item.price);
        });
        return Number(acc).toFixed(2);
    }

    const totalItems = () => {
        let acc = 0; 
        itemsCart.map(item => {
            return acc += item.quantity;
        });
        return Number(acc);
    }


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
            </Drawer>
        </div>
    );
};

export default Cart;