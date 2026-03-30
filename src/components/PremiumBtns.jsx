import React, { use, useState } from 'react';
import AllCards from './Cards/AllCards';
import AddedCards from './Cards/AddedCards';

const PremiumBtns = ({ fetchData }) => {

    const cardInfos = use(fetchData);
    const [selectedCards, setSelectedCards] = useState([]);

    const [activeBtn, setActiveBtn] = useState('product');

    const [countCart, setCountCart] = useState(0);
    const [total, setTotal] = useState(0);


    return (
        <div className='mt-8 lg:mt-30 space-y-4 mx-2 md:mx-[10%]  flex flex-col items-center mb-11'>
            <h1 className='text-color font-extrabold text-5xl'>Premium Digital Tools</h1>
            <p className='text-sec font-normal text-base w-136 text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

            <div className='border border-[#f6f6f6] rounded-3xl p-[1px]'>
                {/* {
                    activeBtn==='product'? 
                } */}
                <button onClick={() => setActiveBtn('product')} className={`btn font-bold rounded-3xl ${activeBtn === 'product' ? 'bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white' : 'btn-ghost bg-white text-[#25065dFF]'}`}>Products</button>
                <button onClick={() => setActiveBtn('cart')} className={`btn font-bold rounded-3xl ${activeBtn === 'cart' ? 'bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white' : 'btn-ghost bg-white text-[#25065dFF]'}`}>Cart({countCart})</button>
            </div>
            {
                activeBtn === 'product' ?
                    <AllCards total={total} setTotal={setTotal} cardInfos={cardInfos} selectedCards={selectedCards} setSelectedCards={setSelectedCards} countCart={countCart} setCountCart={setCountCart}></AllCards> : <AddedCards total={total} setTotal={setTotal} selectedCards={selectedCards} setSelectedCards={setSelectedCards}></AddedCards>
            }
        </div>
    );
};

export default PremiumBtns;