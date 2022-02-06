import Orders from '../components/Orders'
import { Typography } from 'antd';


const Account = () => {
    const { Text } = Typography;
  return (
    <>
        <h1> Hi, Oscar</h1>
        <Text strong>Thanks for being a MitRestaurant customer.</Text>
        <Orders />
    </>
    );
};

export default Account;