import { NavLink } from 'react-router-dom';

import CoffeeLogo from '../coffee-logo/Coffee-logo';
import beans from '../../resources/img/footer/coffee-beans-black.png';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <nav className='navbar-footer'>
                <NavLink end to="/" className='navbar-footer_item'><img src={beans} alt="Coffee-beans"/>Coffee house</NavLink>
                <NavLink end to="/our-coffee" className='navbar-footer_item'>Our coffee</NavLink>
                <NavLink end to="/for-your" className='navbar-footer_item'>For your pleasure</NavLink>
            </nav>
            <CoffeeLogo />   
        </footer>
    );
}

export default Footer;