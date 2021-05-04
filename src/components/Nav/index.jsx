import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd';

const MENUS = [
    {
        title: 'Home',
        link: '/home'
    }
]

const Nav = () => {
    const [menus] = useState(MENUS)
    const location = useLocation()
    const currentRouter = location.pathname
    const [current, setCurrent] = useState()

    useEffect(() => {        
        const found = menus.find(menu => menu.link === currentRouter)
        const current = found ? currentRouter : ''
        setCurrent(current)
    }, [currentRouter, menus])
    
    const changeMenu = (e) => {
        setCurrent(e.key)
    }

    return (
        <Menu onClick={changeMenu} className="header-menu" selectedKeys={[current]} mode="horizontal">
            {
                menus.map(menu => {
                    return (
                        <Menu.Item key={menu.link}>
                            <Link to={menu.link}>{menu.title}</Link>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
}
export default Nav