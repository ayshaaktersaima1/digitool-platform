import React, { use, useState } from 'react';
import AllCards from './Cards/AllCards';
import AddedCards from './Cards/AddedCards';

const PremiumBtns = ({ fetchData }) => {

    const cardInfos = use(fetchData);

    const [activeBtn, setActiveBtn] = useState('product');


    return (
        <div className='mt-8 lg:mt-30 space-y-4 mx-2 md:mx-[10%]  flex flex-col items-center mb-11'>
            <h1 className='text-color font-extrabold text-5xl'>Premium Digital Tools</h1>
            <p className='text-sec font-normal text-base w-136 text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

            <div className='border border-[#f6f6f6] rounded-3xl p-[1px]'>
                {/* {
                    activeBtn==='product'? 
                } */}
                <button onClick={() => setActiveBtn('product')} className={`btn font-bold rounded-3xl ${activeBtn === 'product' ? 'bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white' : 'btn-ghost bg-white text-[#25065dFF]'}`}>Products</button>
                <button onClick={() => setActiveBtn('cart')} className={`btn font-bold rounded-3xl ${activeBtn === 'cart' ? 'bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white' : 'btn-ghost bg-white text-[#25065dFF]'}`}>Cart(2)</button>
            </div>
            {
                activeBtn === 'product' ?
                    <AllCards cardInfos={cardInfos}></AllCards> : <AddedCards></AddedCards>
            }
        </div>
    );
};

export default PremiumBtns;