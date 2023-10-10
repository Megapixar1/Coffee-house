import { useState } from 'react';
import transition from "../../transition";

import CardsBlock from '../cards-block/CardsBlock';
import CoffeeLogo from '../coffee-logo/Coffee-logo';
import CupCoffee from '../../resources/img/forYour/cup-coffee.png';

import './forYourPleasure.scss';

const ForYour = () => {

    const [filter, setFilter] = useState('');
    const [term, setTerm] = useState('');

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }
    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
    }

    //A method for searching
    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.country.indexOf(term) > -1
        })
    }

    
    return (
        <>
            <div className="container">
                <div className="for-your">
                    <h1 className='for-your__title'>For your pleasure</h1>
                </div>     
                <div className="about-our">
                    <div className="about-our__left">  
                        <img src={CupCoffee} alt="Cup-Coffe" /> 
                    </div>
                    <div className="about-our__right">
                        <h5 className='our__right-title'>About our goods </h5>
                        <CoffeeLogo /> 
                        <p className='our__right-text'>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/> <br/> 
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/> so questions.<br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/> met spot shy want.
                        Children me la ughing we<br/> prospect answered followed. At it went<br/> is song that held help face.
                        </p>    
                    </div> 
                </div>
                <div className="block-cards">
                    <CardsBlock term={term} searchEmp={searchEmp} filter={filter}/>
                </div>
            </div>
        </>
    )
}

export default transition(ForYour);