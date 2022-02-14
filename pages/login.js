import Head from 'next/head'
import { Row, Col } from 'antd';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <Row style={{margin: '1rem 0'}}>
            <Col span={24}>
                <Head>
                    <title>Login MITRestaurants</title>
                </Head>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <LoginForm />
            </Col>
        </Row>
    )
}
export default Login;