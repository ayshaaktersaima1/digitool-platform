import React from 'react';
import { toast } from 'react-toastify';

const AddedCard = ({ selectedCard, selectedCards, setSelectedCards, total, setTotal, index }) => {

    const handleRemoveBtn = (selectedCard, cardIndex) => {

        const finalCarts = selectedCards.filter((finalCard, index) => index !== cardIndex);
        setSelectedCards(finalCarts);
        const newTotalAfterRmv = total - selectedCard.price;
        setTotal(newTotalAfterRmv);
        toast.info(`${selectedCard.name} is Removed from Cart!`);

    }
    return (
        <div className='bg-[#f9fafc] p-5 rounded-2xl'>
            <div className='flex items-center  justify-between'>
                {/* left */}
                <div className='flex items-center gap-4'>
                    <div className='border border-[#f2f2f2] rounded-full p-4 bg-white'>
                        <img className='w-8 h-8' src={selectedCard.icon} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-lg md:text-xl font-semibold text-color'>{selectedCard.name}</h3>
                        <p className='font-medium text-sec'>${selectedCard.price}</p>
                    </div>
                </div>
                {/* right */}
                <div>
                    <button onClick={() => { handleRemoveBtn(selectedCard, index) }} className='btn btn-ghost text-[#ff3980] text-bold'>Remove</button>
                </div>
            </div>

        </div>
    );
};

export default AddedCard;