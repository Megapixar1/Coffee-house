import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import imgCard from '../../resources/img/cards-block-img.png';
import './cards-block.scss';

const CardsBlock = ({filter, searchEmp, term}) => {

    useEffect(() => {
        filterDataCards();
    }, [])

   // Filtering product cards  
   const dataCards = [
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99},
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
    {img: imgCard, title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
]

const filterDataCards = (items => {
    switch(filter) {
        case 'Brazil':
            return items.filter(item => item.country === 'Brazil');
        case 'Kenya': 
            return items.filter(item => item.country === 'Kenya');      
        case 'Columbia': 
            return items.filter(item => item.country === 'Columbia');
        case 'all':    
        default:
            return items;          
    }
})

const visibleData = filterDataCards(searchEmp(dataCards, term), filter);

        
    // Dynamic construction of product cards
    const card = visibleData.map((elem, i) => {
        const {img, title, country, price} = elem;

        return (
            <>
                <NavLink style={{'color': 'inherit'}} end to="/our-coffee/about-it">
                        <div key={i} className="card-item">
                            <img className='card-img' src={img} alt="Coffee-card" />
                            <h5 className='card-title'>{title}</h5>
                            <h5 className='card-title-country'>{country}</h5>
                            <span className='card-price'>{price}$</span>
                        </div> 
                </NavLink> 
            </>
        )
    })

    return (
        <>
            {card}
        </>
        
    )
}


export default CardsBlock;