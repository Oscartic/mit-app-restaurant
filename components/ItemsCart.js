import { CheckOutlined, PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css';


const ItemsCart = ({id, quantity, price, dishName, description, restaurantId, restaurantName, itemsCart, setItemsCart, totalCart, totalItems}) => {

    const subtractAmount = () => {
        if(quantity <= 1) return null; 
        quantity -= 1;
        const newItemsCart = itemsCart.map(item => {
            if(item.id == id && item.restaurantId == restaurantId) {
                item.quantity = quantity
            }
            return item;
        });
        totalCart();
        totalItems();
        setItemsCart(newItemsCart);
    }

    const addAmount = () => {
        if(quantity < 1) return null;
        quantity += 1; 
        const newItemsCart = itemsCart.map(item => {
            if(item.id == id && item.restaurantId == restaurantId) {
                item.quantity = quantity
            }
            return item;
        });
        totalCart();
        totalItems();
        setItemsCart(newItemsCart);
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
                <div className={styles.item_quantity}>
                    <MinusCircleOutlined onClick={subtractAmount} className={styles.subtract} />
                    <span>{quantity}</span>
                    <PlusCircleOutlined onClick={addAmount} className={styles.add}/>
                </div>
                <div className={styles.item_remove}>
                <DeleteOutlined /> <span>Remove</span>
                </div>
            </div>
            <div className={styles.item_cart_price}>
                <span>${AmountPerItem(price, quantity)}</span>
                <h5>{restaurantName}</h5>
            </div>
        </div>
    );
};

export default ItemsCart;