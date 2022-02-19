import { useState, useEffect, createContext, useMemo } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [itemsCart, setItemsCart] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(localData)
        if(localData.length > 0) {
            setItemsCart(localData);
        }
    },[]);

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
            const newCart = [...itemsCart, newItem]
            setItemsCart(newCart);
        }
        localStorage.setItem('cart', JSON.stringify(itemsCart));

    }

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
            showItemCart
        });
    }, [itemsCart, setItemsCart]);

    return <CartContext.Provider value={value} {...props} /> 
};

export default CartProvider;