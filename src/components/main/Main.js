import {Link} from "react-scroll";
import transition from "../../transition";

import Cards from './our-best-cards/Cards';

import CoffeeLogo from '../coffee-logo/Coffee-logo';
import logoWhite from '../../resources/img/main/main-coffee.png';

import './main.scss';

const Main = () => {

        return (
            <div className="container">
                
                <div className="bg-wrapper">
                    <div className="block-top">
                        <h1 className='title-top'>Everything You Love About Coffee</h1>
                        <div className="coffee-top">
                            <img className="coffee-top_img" src={logoWhite} alt="CoffeLogo" />
                        </div>
                        <h2 className='sub-title_top'>We makes every day full of energy and taste</h2>
                        <h2 className='sub-title_top'>Want to try our beans?</h2>
                        <Link smooth={true} offset={10} duration={500} to="about-us">
                            <button className='btn-top'>More</button> 
                        </Link>      
                    </div>
                </div>
                
                <div id="about-us"  className="block-about-us">
                    <h2 className='title-about'>About Us</h2>
                    <CoffeeLogo/>       
                    <p className='text-about-top'>Extremity sweetness difficult behaviour he of.
                    On disposal of as landlord horrible. Afraid at highly months do things on at.
                    Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. 
                    Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                    <p className='text-about-bottom'>Now residence dashwoods she excellent you. Shade being under his bed her,
                    Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. 
                    Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                </div>

                <div className="block-our-best">
                    <h2 className='title-our-best'>Our best</h2>
                    <div className="cards">
                        <Cards />
                    </div>
                </div>
                
            </div>
        );
    }

export default transition(Main);  