import React from 'react';

const Card = ({ title, price, paragraph, imageUrl }) => {

    return (
        <div className='card'>
            <div className='card-img--container'>
                <img src={imageUrl} alt={title} className='card-image' />
            </div>
            <div className='card-content'>
                <h2 className='card-title'>{title}</h2>
                <div className='card-content--price-container'>
                    <span className='card-price--span'>{price}</span>
                </div>
                <div className='card-content--text-container'>
                    <p className='card-text'>{paragraph}</p>
                </div>
                <div className='card-content--link-container'>
                    <a href='/'>Leer más</a>
                </div>
            </div>
        </div>
    );
};

export default Card;