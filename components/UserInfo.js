import { Card } from 'antd';

const UserInfo = ({userInfo}) => {

    const { userId, displayName, email, firebaseUid, createdAt } = userInfo;

    return (
        <Card
            style={{ marginTop: 16}}
            type="inner"
            title="User Info"
        >
            <ul>
                <li><strong>MitRestaurants ID: </strong><code style={{color: 'red'}}>{userId}</code></li>
                <li><strong>Display Name: </strong>{displayName}</li>
                <li><strong>email: </strong>{email}</li>
                <li><strong>Firebase UID: </strong><code style={{color: '#850000'}}>{firebaseUid}</code></li>
                <li><strong>Date created: </strong>{createdAt}</li>
            </ul>
        </Card>
    );
};
export default UserInfo;