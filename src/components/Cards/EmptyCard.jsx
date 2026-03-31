import React from 'react';
import cartImg from '../../assets/products/shopping-cart.png'

const EmptyCard = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-color'>Your Cart</h1>

            <div className='space-y-4 py-10 flex flex-col items-center'>
                <div><img className='h-20 w-20' src={cartImg} alt="" /></div>
                <h2 className='text-base text-sec font-medium'>Your cart is empty</h2>
            </div>
        </div>
    );
};

export default EmptyCard;