import './coffee-logo.scss';
import logoCoffee from '../../resources/img/coffe-logo.png';

const CoffeeLogo = () => {

    return (
        <div className="coffee-block">
            <img src={logoCoffee} alt="CoffeLogo" />
        </div> 
    );
}

export default CoffeeLogo;