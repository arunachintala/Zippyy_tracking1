
import React from 'react';
import './Card2.css';
import Button from '../Button/Button';

function Card2({ text1 }) {
    return (
        <div className='Card-container'>
            <p className="card-text">Order id: <span>{text1}</span></p>
            <p className="card-des">Sorry! Invalid order-id</p>
            <div className='button-container'>
                <Button />
            </div>
        </div>
    );
}

export default Card2;
