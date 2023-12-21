import React from "react";
import '../Card/Card.css';
import '../Product/Product.css';
const Card = ({ className, orientation, size, children }) => {

    const cardClasses = `card ${className || ''} ${orientation === 'horizontal' ? 'horizontal' : 'vertical'} ${size === 'grande' ? 'grande' : 'chico'}`;

    return (
        <div className="product-container">
            <div className={cardClasses}>{children}</div>
        </div>
    )
};


export default Card;