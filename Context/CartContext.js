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

    const addAmountFromRestaurant = (dish) => {
        const search = itemsCart.find(e => e.id === dish.id);
        console.log("search", search);
        if(search) {
            const addQuantityItemCart = itemsCart.map(item => {
                if(item.id == dish.id && item.quantity >= 1) {
                    item.quantity += 1;
                }
                return item;
            });
            console.log("addQuantityItemCart", addQuantityItemCart)
            setItemsCart(addQuantityItemCart);
        } else {
            const newItem =  {
                id: dish.id, 
                quantity: 1, 
                price: dish.price, 
                dishName: dish.name, 
                restaurantId: dish.restaurantId,  
                description: dish.description,
            };
            const newCart = [...itemsCart, newItem]
            console.log(newCart)
            setItemsCart(newCart);
        }
    }

    const showItemCart = (dishId) => {
        const itemCart = itemsCart.find(e => e.id === dishId);
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