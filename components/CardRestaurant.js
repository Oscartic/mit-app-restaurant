import Link from 'next/Link'
import { Card, Avatar, Col, Rate } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const CardRestaurant = ({name, description}) => {
    const { Meta } = Card;
    return (
        <Col className="gutter-row" span={6}>
            <Card
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                >
                <Meta
                    title={
                        <Link as={`/restaurants/${name}`} href="/restaurants/[restaurant]">
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
