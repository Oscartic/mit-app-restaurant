import React, { useState } from "react";
import { Drawer, Button } from "antd";

const Cart = ({quantity, total}) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
        <span onClick={showDrawer}>
            Cart {quantity} {total}
        </span>
        <Drawer
            title="Cart"
            placement="right"
            width={640}
            onClose={onClose}
            visible={visible}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
        </>
    );
};

export default Cart;