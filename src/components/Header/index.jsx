import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import HeaderSearch from '../HeaderSearch'
import './header.css'

const Header = () => {
    const location = useLocation()
    const currentRouter = location.pathname
    const showSearch = currentRouter !== '/signin' && currentRouter !== '/signup'
    return (
        <div className="header clearfix">
            <div className="float-left"><Nav /></div>
            {
                showSearch && <div className="float-right"><HeaderSearch /></div>
            }
        </div>
    )
}
export default Header