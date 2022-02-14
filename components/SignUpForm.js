import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

const SignUpForm = () => { 
    const { user, register } = useFirebase();

    const onFinish = async (values) => {
        const { nickname, email , password } = values;
        try {
            const result = await register({nickname, email, password});    
            console.log(result);        
        } catch (error) {
            console.log("[SignUpForm.onFinish] >>> ", error.message);
        }
        console.log('Success:', values);
    };
    

    return (

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 10,
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

    )
}
export default SignUpForm;