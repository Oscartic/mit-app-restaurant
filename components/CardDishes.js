import { Card, Col } from 'antd';
import styles from '../styles/Dishes.module.css';
import { PlusCircleOutlined } from '@ant-design/icons';

const CardRestaurant = ({name, description, price}) => {
    const { Meta } = Card;
    
    const addToCart = () => {
        console.log("add food plate to card");
    }
    
    return (
        <Col className="gutter-row" span={6}>
            <Card title={name}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                >
                <Meta
                    description={description}
                /> 
                <span className={styles.dishes_price}>${price} USD</span>
                <span className={styles.dishes_action} onClick={addToCart}><PlusCircleOutlined /> Add to cart</span>           
            </Card>
        </Col>
    );
};
export default CardRestaurant;
