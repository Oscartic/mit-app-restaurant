import { Card, Col } from 'antd';
import styles from '../styles/Dishes.module.css';
import { PlusCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import useCart from '../Hooks/useCart';

const CardRestaurant = ({dish}) => {
    const { Meta } = Card;
    const { addAmountFromRestaurant, showItemCart } = useCart();
    
    const infoCart = () => {
        const item = showItemCart(dish.id);
        if(!item) return <span className={styles.dishes_cart_quantity_empty}> <ShoppingCartOutlined /> 0 </span>;
        return <span className={styles.dishes_cart_quantity}> <ShoppingCartOutlined /> {item.quantity} </span>
    }

    return (
        <Col className="gutter-row" span={6}>
            <Card title={dish.name}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                >
                <Meta
                    description={dish.description}
                /> 
                <span className={styles.dishes_price}>${dish.price} USD</span>
                <span className={styles.dishes_action} onClick={() => addAmountFromRestaurant(dish)}><PlusCircleOutlined /> Add to cart </span>
                { infoCart ()}
            </Card>
        </Col>
    );
};
export default CardRestaurant;
