import React from "react";
import '../Card/Card.css';

const Card = ({ className, orientation, size, children }) => {

    const cardClasses = `card ${className || ''} ${orientation === 'horizontal' ? 'horizontal' : 'vertical'} ${size === 'grande' ? 'grande' : 'chico'}`;

    console.log(cardClasses)
    return (
        <div className={cardClasses}>{children}</div>
    )
};


export default Card;