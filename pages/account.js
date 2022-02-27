import { Row, Col } from 'antd';
import AccountInfo from '../components/AccountInfo';


const Account = () => {
  return (
    <Row style={{margin: '1rem 0'}}>
        <Col span={24}>
            <AccountInfo />
        </Col>
    </Row>
    );
};

export default Account;