import { useState, useEffect, createContext, useMemo } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [itemsCart, setItemsCart] = useState([]);
    const [orderSummary, setOrderSummary] = useState({});
    const [showModalOrder, setShowModalOrder] = useState(false);


    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('cart')) || [];
        if(localData.length > 0) {
            setItemsCart(localData);
        };
    },[setItemsCart]);

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

    const addAmountFromRestaurant = (dish, restaurantName, restaurantId) => {
        const search = itemsCart.find(e => e.dishId === dish.dishId);
        if(search) {
            const addQuantityItemCart = itemsCart.map(item => {
                if(item.dishId == dish.dishId && item.quantity >= 1) {
                    item.quantity += 1;
                }
                return item;
            });
            setItemsCart(addQuantityItemCart);
            localStorage.setItem('cart', JSON.stringify(itemsCart));
        } else {
            const newItem =  {
                dishId: dish.dishId, 
                quantity: 1, 
                price: Number(dish.price.$numberDecimal).toFixed(2), 
                dishName: dish.name, 
                restaurantId: dish.restaurantId,  
                description: dish.description,
                restaurantId,
                restaurantName
            };
    
            console.log('addAmountFromRestaurant CartContext', newItem)
            setItemsCart([...itemsCart, newItem]);
            const local = JSON.parse(localStorage.cart);
            const newLocal = [...local, newItem]
            localStorage.setItem('cart', JSON.stringify(newLocal));         
        }
        return itemsCart;
    };

    const showItemCart = (dishId) => {
        const itemCart = itemsCart.find(e => e.dishId === dishId);
        if(!itemCart) return null;
        return itemCart; 
    };

    const value = useMemo(() => {
        return ({
            itemsCart,
            setItemsCart,
            totalCart,
            totalItems,
            addAmountFromRestaurant,
            showItemCart,
            orderSummary,
            setOrderSummary,
            showModalOrder, 
            setShowModalOrder
        });
    }, [itemsCart, setItemsCart, orderSummary, showModalOrder]);

    return <CartContext.Provider value={value} {...props} /> 
};

export default CartProvider;