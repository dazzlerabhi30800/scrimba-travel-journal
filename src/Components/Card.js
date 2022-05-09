import React from 'react';
import './Card.css';
import CardComp from './CardComp'
import data from './data';
// console.log(data);

function Card() {
    const cardComp = data.map((item, index) => {
        return (
            <CardComp
            key={index}
            item={item}
             />
        )
    })
    return(
        <div className="card-container"> 
        {/* <CardComp /> */}
        {cardComp}
        </div>
    )
}

export default Card;