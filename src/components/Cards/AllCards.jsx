import React from 'react';
import Card from './Card';

const AllCards = ({ cardInfos }) => {

    return (
        <div className='mx-2 md:mx-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 mt-5 md:mt-7'>


            {
                cardInfos.map(cardInfo => <Card cardInfo={cardInfo}></Card>)
            }

        </div>
    );
};

export default AllCards;