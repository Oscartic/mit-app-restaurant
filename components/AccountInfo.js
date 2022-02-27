import Orders from './Orders';
import UserInfo from './UserInfo';
import { Alert, Typography, Divider } from 'antd';
import useFirebase from '../Hooks/useFirebase';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AccountInfo = () => {
    
    const {user, inSession, userToken, setHeaderReq } = useFirebase();
    const [firebaseUid, setFirebaseUid] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user && user?.uid) setFirebaseUid(user.uid);
        if(firebaseUid && Object.keys(userInfo) == 0 && inSession) {
            getUserInfo();
            getUserOrders();
        };
    },[user, firebaseUid]);

    const getUserInfo = async () => {
        const url = `${process.env.API_MIT_RESTAURANT_URL}/users/${firebaseUid}`;
        const { data } = await axios.get( url,
            setHeaderReq(userToken)
        );
        if(data?.user) setUserInfo(data.user);
        return data;
    };

    const getUserOrders = async () => {
        const url = `${process.env.API_MIT_RESTAURANT_URL}/orders/${firebaseUid}`;
        const { data } = await axios.get( url,
            setHeaderReq(userToken)
        );
        if(data?.orders) setOrders(data.orders);
        return data;
    };

    const { Text } = Typography;
    return (
        <>
            {
                inSession ?
                <>
                    <h1> Hi, Oscar</h1>
                    <Text strong>Thanks for being a MitRestaurant customer.</Text>
                    <Divider>Personal info</Divider>
                    <UserInfo userInfo={userInfo} />
                    <Divider>Order history</Divider>
                    <Orders orders={orders} />
                </>
            :
                <Alert
                    message="Login required"
                    description="You must login to view this page!"
                    type="warning"
                    showIcon
                />
            }
        </>

    );
}

export default AccountInfo;