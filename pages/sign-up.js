import Head from 'next/head'
import { Row, Col } from 'antd';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
    return (
        <Row style={{margin: '1rem 0'}}>
            <Col span={24}>
                <Head>
                    <title>SignUp MR</title>
                </Head>
                <h1 style={{textAlign: 'center'}}>SignUp</h1>
                <SignUpForm />
            </Col>
        </Row>
    )
}
export default SignUp;