import { Link, useHistory } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd';
import '../signup/signup.css'
import { setCookie } from '../../utils/cookie'

const Signin = () => {
    const [form] = Form.useForm()
    const history = useHistory()

    const onSignin = async (values) => {
        try {
            const response = await fetch('api/account/signin', {
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(values)
            })
            const data = await response.json()
            if (data.success) {
                setCookie('access_token', data.access_token)
                history.push('/home')
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
                <h1 className="text-white">Sign up</h1>
                <div className="signup-form">
                    <Form form={form} layout="vertical" onFinish={onSignin}>
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
                        <Form.Item>
                            <Button className="signup-button" type="primary" htmlType="submit">Sign in</Button>
                            <div className="signin-link">Or <Link className="signup-link" to="/signup">Sign up now!</Link></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Signin