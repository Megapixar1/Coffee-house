import { NavLink } from 'react-router-dom';
import beans from '../../resources/img/header/coffee-beans.png';

import './header.scss';

const Header = () => {
    
    return (
        <header>
            <nav className='navbar'>
                <NavLink end to="/" className='navbar-item'><img src={beans} alt="Coffee-beans"/>Coffee house</NavLink>
                <NavLink end to="/our-coffee"  className='navbar-item'>Our coffee</NavLink>
                <NavLink end to="/for-your" className='navbar-item'>For your pleasure</NavLink>
            </nav>
        </header>
    );
}

export default Header;