import { Alert, Form, Input, Button, Checkbox, Skeleton } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

const SignUpForm = () => { 
    const { register, isFetch, errorSignUp } = useFirebase();

    const router = useRouter();

    const onFinish = async (values) => {
        const { nickname, email , password } = values;
        try {
            const respond = await register({nickname, email, password});  
            if(respond && respond.status === 200) router.push('/restaurants/');
            return respond;        
        } catch (error) {
            console.log("[SignUpForm.onFinish] >>> ", error.message);
        }
        console.log('Success:', values);
    };
    

    return (
        <div style={{margin: 'auto', maxWidth: '450px'}}>
            { errorSignUp !== '' &&
                        <Alert
                            message="Error"
                            description={errorSignUp}
                            type="error"
                            showIcon
                            style={{marginBottom: '1rem'}}
                    />
                }
            { !isFetch ? 
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nickname"
                        name="nickname"
                        rules={[
                        {
                            required: true,
                            message: 'Please input nickname!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            :
                <Skeleton active />
            }
        </div>            
    )
}
export default SignUpForm;