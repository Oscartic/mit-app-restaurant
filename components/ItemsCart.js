import { CheckOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css';


const ItemsCart = ({id, quantity, price, dishName, description, restaurantId, restaurantName, itemsCart, setItemsCart}) => {

    const subtractAmount = () => {
        if(quantity > 1) {
            quantity -= 1;
            console.log("Subtract amount", quantity);

        }
        
    }

    const addAmount = () => {
        if(quantity >= 1) {
            console.log(itemsCart);
            const itemToUpdate = itemsCart.filter((item) => item.id == id && item.restaurantId == restaurantId)
            console.log(itemToUpdate[0].quantity =+ 1); 
            // itemToUpdate[0].quantity = newQuantity;
            // const itemIndexPosition = itemsCart.findIndex((item) => item.id == id && item.restaurantId == restaurantId)
            // itemsCart[itemIndexPosition] = itemToUpdate[0];
            // console.log(itemsCart);
            
        }
    }

    return (
        <div className={styles.item_cart}>
            <div className={styles.item_cart_desc}>
                <h3><CheckOutlined /> {dishName}</h3>
                <p>{description}</p>
                <div className={styles.item_quantity}>
                    <MinusCircleOutlined onClick={subtractAmount} className={styles.subtract} />
                    <span>{quantity}</span>
                    <PlusCircleOutlined onClick={addAmount} className={styles.add}/>
                </div>
            </div>
            <div className={styles.item_cart_price}>
                <span>${price}</span>
                <h5>{restaurantName}</h5>
            </div>
        </div>
    );
};

export default ItemsCart;