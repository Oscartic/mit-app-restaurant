import { Card, Col } from 'antd';
import styles from '../styles/Dishes.module.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import useCart from '../Hooks/useCart';

const CardRestaurant = ({dish}) => {
    const { Meta } = Card;
    const { addAmountFromRestaurant, showItemCart } = useCart();
    
    const infoCart = () => {
        const item = showItemCart(dish.id);
        if(!item) return null;
        console.log(item)
        return <>in cart: {item.quantity}</>
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
                <span className={styles.dishes_cart_quantity}>{ infoCart() }</span>
            </Card>
        </Col>
    );
};
export default CardRestaurant;
