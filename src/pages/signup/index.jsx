import { Link, useHistory  } from 'react-router-dom'
import { Form, Input, Button, message, Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons'
import './signup.css'

const Signup = () => {
    const [form] = Form.useForm()
    const history = useHistory()
    const { confirm } = Modal

    const onSignup = async (values) => {
        try {
            const response = await fetch('api/account/signup', {
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(values)
            })
            const data = await response.json()
            
            if (data.success) {
                confirm({
                    title: 'Congratulations, your registeration is successful. Sign in now?',
                    icon: <CheckCircleOutlined className="text-success" />,
                    cancelText: 'No',
                    okText: 'Ok',
                    onOk: () => history.push('/signin')
                });
                
            } else {
                message.error(data.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="signup-container">
            <div>
                <h1 className="text-white">Create your account</h1>
                <div className="signup-form">
                    <Form layout="vertical" form={form} onFinish={onSignup} scrollToFirstError>
                            <Form.Item
                            label="Username"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email address"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid email!',
                                    },
                                    {
                                    required: true,
                                    message: 'Please input your email!',
                                    }
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }
                                ]}
                                hasFeedback>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                label="Confirm Password"
                                name="confirm"
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
                                    }
                                })
                                ]}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button className="signup-button" type="primary" htmlType="submit">Create account</Button>
                                <div className="signin-link">Already have an account? <Link className="signup-link" to="/signin">Sign in</Link></div>
                            </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signup