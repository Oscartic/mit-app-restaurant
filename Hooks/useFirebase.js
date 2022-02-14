import { useContext } from "react";
import { FirebaseContext } from "../Context/FirebaseContext";

const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if(!context) {
        throw new Error('useCart must be inside CartProvider provider!');
    };

    return context;
}

export default useFirebase;