import card1 from '../../../resources/img/main/card1.png';
import card2 from '../../../resources/img/main/card2.png';
import card3 from '../../../resources/img/main/card3.png';

import './cards.scss';


const Cards = () =>{

    const dataBestCards = [
            {img: card1, title: 'Solimo Coffee Beans 2 kg', price: 10.73},
            {img: card2, title: 'Presto Coffee Beans 1 kg', price: 15.99},
            {img: card3, title: 'AROMISTICO Coffee 1 kg', price: 6.99},
        ]        

        const card = dataBestCards.map(elem => {
            const {img, title, price} = elem;

            return (
                <div key={title} className="card-item-best">
                    <img className='card-img' src={img} alt="Coffee-card" />
                    <h5 className='card-title'>{title}</h5>
                    <span className='card-price__sm'>{price}$</span>
                </div>                
            )
        })

        return (
            <>
                {card}
            </>
            
        )
}


export default Cards;