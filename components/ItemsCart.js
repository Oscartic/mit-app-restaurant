import { CheckOutlined, PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css';


const ItemsCart = ({dishId, quantity, price, dishName, description, restaurantId, restaurantName, itemsCart, setItemsCart }) => {

    const subtractAmount = () => {
        if(quantity <= 1) return null; 
        quantity -= 1;
        const newItemsCart = itemsCart.map(item => {
            if(item.dishId == dishId && item.restaurantId == restaurantId) {
                item.quantity = quantity
            }
            return item;
        });
        setItemsCart(newItemsCart);
        localStorage.setItem('cart', JSON.stringify(itemsCart));
    }

    const addAmount = () => {
        if(quantity < 1) return null;
        quantity += 1; 
        const newItemsCart = itemsCart.map(item => {
            if(item.dishId == dishId) {
                item.quantity = quantity
            }
            return item;
        });
        setItemsCart(newItemsCart);
        localStorage.setItem('cart', JSON.stringify(itemsCart));
    }

    const removeItem = () => {
        const updateItemsCart = itemsCart.filter( item => {
            return item.dishId !== dishId;
        });
        console.log(updateItemsCart)
        setItemsCart(updateItemsCart);
        localStorage.setItem('cart', JSON.stringify(updateItemsCart));
    }

    const AmountPerItem = (price, quantity) => {
        if(price && quantity) {
            return Number(price * quantity).toFixed(2);
        }
    }

    return (
        <div className={styles.item_cart}>
            <div className={styles.item_cart_desc}>
                <h3><CheckOutlined /> {dishName}</h3>
                <p>{description}</p>
                <code>{dishId}</code>
                <div className={styles.item_quantity}>
                    <MinusCircleOutlined onClick={subtractAmount} className={styles.subtract} />
                    <span>{quantity}</span>
                    <PlusCircleOutlined onClick={addAmount} className={styles.add}/>
                </div>
                <div className={styles.item_remove} onClick={removeItem}>
                <DeleteOutlined /> <span>Remove</span>
                </div>
            </div>
            <div className={styles.item_cart_price}>
                <span>${AmountPerItem(price, quantity)}</span>
                <span className={styles.info_rest}>
                    <h5>Restaurant:</h5>
                    <p>{restaurantName}</p>
                </span>
            </div>
        </div>
    );
};

export default ItemsCart;