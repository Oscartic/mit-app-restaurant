import Link from 'next/link';
import { Card, Col, Rate } from 'antd';

const CardRestaurant = ({restaurantId, name, description, imageUrl}) => {
    const { Meta } = Card;
    return (
        <Col className="gutter-row" xs={24} lg={6}>
            <Card
                cover={
                    <img
                        alt="example"
                        src={imageUrl}
                    />
                }
                >
                <Meta
                    title={
                        <Link as={`/restaurants/${restaurantId}/${name}`} href="/restaurants/[restaurantId]/[restaurant]">
                            {name}
                        </Link>
                    }
                    description={description}
                />
                <Rate allowHalf defaultValue={2.5} />
            </Card>
        </Col>
    );
};
export default CardRestaurant;
