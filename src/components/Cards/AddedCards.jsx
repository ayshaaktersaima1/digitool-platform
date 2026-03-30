import React from 'react';
import AddedCard from './AddedCard';

const AddedCards = ({ selectedCards, setSelectedCards }) => {


    console.log(selectedCards)
    return (
        <div className='border border-[#F2F2F2] rounded-2xl w-full p-10 space-y-4'>
            <h1 className='text-2xl font-bold text-color'>Your Cart</h1>
            {
                selectedCards.map(selectedCard => <AddedCard selectedCard={selectedCard} setSelectedCards={setSelectedCards}></AddedCard>)
            }
        </div>
    );
};

export default AddedCards;