import { Row, Col } from 'antd';
import CardRestaurant from './CardRestaurant';
const CardsRestaurants = () => {
    return (
        <> 
            <Row style={{margin: '1rem 0'}}>
                <Col span={20} offset={2}>
                    <Row gutter={[16, 24]}>
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                        <CardRestaurant />
                    </Row> 
        
                </Col>
            </Row>
        </>
    )
};

export default CardsRestaurants; 
