import { CheckOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import styles from '../styles/Cart.module.css';


const ItemsCart = ({id, quantity, price, dishName, description, restaurantId, restaurantName}) => {
    return (
        <div className={styles.item_cart}>
            <div className={styles.item_cart_desc}>
                <h3><CheckOutlined /> {dishName}</h3>
                <p>{description}</p>
                <div className={styles.item_quantity}>
                    <MinusCircleOutlined />
                    <span>{quantity}</span>
                    <PlusCircleOutlined />
                </div>
            </div>
            <div className={styles.item_cart_price}>
                <span>${price}</span>
                <h5>REST: {restaurantName}</h5>
            </div>
        </div>
    );
};

export default ItemsCart;