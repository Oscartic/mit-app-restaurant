import { Alert, Form, Input, Button, Checkbox, Skeleton } from 'antd';
import Link from 'next/link';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useFirebase from '../Hooks/useFirebase';
import { useRouter } from 'next/router';


const LoginForm = () => { 
    const { logIn, errorLogin, isFetch} = useFirebase();

    const router = useRouter();

    const onFinish = async (values) => {
        const { username, password } = values;
        try {
            const user = await logIn(username, password);    
            if(user && user.uid) return router.push('/restaurants/');        
        } catch (error) {
            console.log("[Loginform] >>> ", error);
        }
    };
    
    return ( 
        <>
            <div style={{margin: 'auto', maxWidth: '450px'}}>
                { errorLogin !== '' &&
                        <Alert
                            message="Error"
                            description={errorLogin}
                            type="error"
                            showIcon
                            style={{marginBottom: '1rem'}}
                    />
                }
                { !isFetch ?
                    <Form
                        name="normal_login"
                        className="login-form"
                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            {' Or '} 
                            <Link as={`/sign-up/`} href="/sign-up/">
                            <a href="">register now!</a>
                            </Link>
                        </Form.Item>
                    </Form>
                : 
                    <Skeleton active />
                }
            </div>
        </>
    );
};

export default LoginForm;