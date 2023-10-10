import AboutItImg from '../../../resources/img/ourCoffee/about-it.png';
import CoffeeLogo from '../../coffee-logo/Coffee-logo';
import transition from "../../../transition";
import './about-it.scss';

const AboutIt = () => {
    return (
        <>
            <div className="container">
                <div className="for-your-coffee">
                    <h1 className='for-your__title'>Our Coffee</h1>
                </div>
            </div>   

            <div className="about-it">
                <div className="about-it__left">  
                    <img src={AboutItImg} alt="Cup-Coffe" /> 
                </div>
                <div className="about-it__right">
                    <h3 className='it__right-title'>About it</h3>
                    <CoffeeLogo /> 
                    <h5 className='it__right-subtitle'><span className='bolt'>Country:</span> Brasil</h5>
                    <p className='it__right-text'>
                    <span className='bolt'>Description:</span> Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat.
                    </p>
                    <p className='it__right-price'><span className='bolt'>Price:</span>  16.99$</p>    
                </div> 
            </div>        
        </>
    )
}

export default transition(AboutIt);