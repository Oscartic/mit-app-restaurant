import { Card, Col } from 'antd';
import styles from '../styles/Dishes.module.css';
import { PlusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import useCart from '../Hooks/useCart';

const CardRestaurant = ({dish, restaurantName, restaurantId}) => {
    const { Meta } = Card;
    const { addAmountFromRestaurant, showItemCart } = useCart();

    const infoCart = () => {
        const item = showItemCart(dish.dishId);
        if(!item) return <span className={styles.dishes_cart_quantity_empty}> <ShoppingCartOutlined /> 0 </span>;
        return <span className={styles.dishes_cart_quantity}> <ShoppingCartOutlined /> {item.quantity} </span>
    }

    return (
        <Col className="gutter-row" xs={24} lg={6}>
            <Card title={dish.name}
                cover={
                    <img
                        alt="example"
                        src={dish.imageUrl}
                    />
                }
                >
                <Meta
                    description={dish.description}
                /> 
                <span className={styles.dishes_price}>${Number(dish.price.$numberDecimal).toFixed(2)} USD</span>
                <span className={styles.dishes_action} onClick={() => addAmountFromRestaurant(dish, restaurantName, restaurantId)}><PlusCircleOutlined /> Add to cart </span>
                { infoCart ()}
            </Card>
        </Col>
    );
};
export default CardRestaurant;
