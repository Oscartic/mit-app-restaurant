import { Card, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusCircleOutlined } from '@ant-design/icons';

const CardRestaurant = ({name, description}) => {
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
                actions={[
                    <PlusCircleOutlined ey="addToCart" onClick={addToCart} />,
                ]}
                >
                <Meta
                    description={description}
                />            
            </Card>
        </Col>
    );
};
export default CardRestaurant;
