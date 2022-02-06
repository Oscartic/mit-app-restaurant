import React, { useState } from "react";
import { Drawer, Divider, Empty } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from '../styles/Cart.module.css'
const Cart = ({quantity, total}) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

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
            title="Cart"
            placement="right"
            width={640}
            onClose={onClose}
            visible={visible}
        >
            <Empty description="You still do not have selected dishes"/>
        </Drawer>
        </div>
    );
};

export default Cart;