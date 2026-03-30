import React from 'react';
import AddedCard from './AddedCard';

const AddedCards = ({ selectedCards, setSelectedCards }) => {

    console.log(selectedCards)
    return (
        <div>
            {
                selectedCards.map(selectedCard => <AddedCard selectedCard={selectedCard} setSelectedCards={setSelectedCards}></AddedCard>)
            }
        </div>
    );
};

export default AddedCards;