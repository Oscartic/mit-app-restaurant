import { useState, useEffect, createContext, useMemo } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const data = [
        {id: 1, quantity: 1, price: 5.13, dishName: 'Swsopwaal', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 2, quantity: 2, price: 2.99, dishName: 'Logua Logua', restaurantId: 2, restaurantName: 'WoodsHill', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."},
        {id: 4, quantity: 4, price: 1.11, dishName: 'Mulan', restaurantId: 2, restaurantName: 'Karma', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas convallis ullamcorper."}
    ];

    const [itemsCart, setItemsCart] = useState([]);

    useEffect(() => {
        if(itemsCart.length <= 0) setItemsCart(data);
    },[]);

    const value = useMemo(() => {
        return ({
            itemsCart,
            setItemsCart
        });
    }, [itemsCart, setItemsCart]);

    return <CartContext.Provider value={value} {...props} /> 
};

export default CartProvider;