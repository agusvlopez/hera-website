import React from 'react';

const Card = ({ title, price, paragraph1, paragraph2, message1, message2, imageUrl }) => {
    return (
        <div className='card'>
            <div className='card-img--container'>
                <img src={imageUrl} alt={title} className='card-image' />
            </div>
            <div className='card-content'>
                <h2 className='card-title'>{title}</h2>
                <div className='card-price--container'>
                    <span className='card-price--span'>{price}</span>
                </div>
                <div className='card-text--container'>
                    <p className='card-text'>{paragraph1}</p>
                    <p className='card-text'>{paragraph2}</p>
                </div>
                <div className='card-message--container'>
                    <p className='card-message font-bold'>{message1}</p>
                    <p className='card-message font-bold'>{message2}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;