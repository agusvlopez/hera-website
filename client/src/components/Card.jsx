import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, price, description, imageUrl }) => {

    return (
        <div className='card'>
            <Link to={`/product/${id}`} key={id}>
                <div className='card-img--container'>
                    <img src={imageUrl} alt={title} className='card-image' />
                </div>
                <div className='card-content'>
                    <h2 className='card-title'>{title}</h2>
                    <div className='card-content--price-container'>
                        <span className='card-price--span'>{price}</span>
                    </div>
                    <div className='card-content--text-container'>
                        <p className='card-text'>{description}</p>
                    </div>
                    <div className='card-content--link-container'>
                        <a href='/'>Leer más</a>
                    </div>
                </div>
                <div className='flex justify-center pb-4'>
                    <Link to={`./product/${id}`} key={id} className='card-link'>Me resuena, ¡lo quiero!</Link>
                </div>
            </Link>
        </div>
    );
};

export default Card;