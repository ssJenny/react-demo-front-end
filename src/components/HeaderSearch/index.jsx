import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd';

const HeaderSearch = () => {
    return (
        <Form className="header-search" layout="inline">
            <Form.Item>
                <Input className="search-input" placeholder="Search..." />
            </Form.Item>
            <Form.Item>
                <Link to="/signin">
                    <Button ghost className="btn-signin">Sign in</Button>
                </Link>
            </Form.Item>
            <Form.Item>
                <Link to="/signup">
                    <Button ghost>Sign up</Button>
                </Link>
            </Form.Item>
        </Form>
    )
}

export default HeaderSearch