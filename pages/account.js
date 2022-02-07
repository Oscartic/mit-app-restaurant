import Orders from '../components/Orders'
import { Row, Col, Typography, Divider } from 'antd';
import UserForm from '../components/UserForm';


const Account = () => {
    const { Text } = Typography;
  return (
    <>
        <Row style={{margin: '1rem 0'}}>
            <Col span={24}>
                <h1> Hi, Oscar</h1>
                <Text strong>Thanks for being a MitRestaurant customer.</Text>
                <Divider>Personal info</Divider>
                <UserForm />
                <Divider>Order history</Divider>
            </Col>
        </Row>
        <Orders />
    </>
    );
};

export default Account;