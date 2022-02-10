import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error('useCart must be inside CartProvider provider!');
    };

    return context;
}

export default useCart;