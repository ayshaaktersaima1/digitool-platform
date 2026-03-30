import React from 'react';

const Card = ({ cardInfo }) => {
    const { name, description, price, period, tag, features } = cardInfo;

    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body">

                    <div className='flex justify-between'>
                        <div>
                            <h1>icon</h1>
                        </div>
                        <span className={`badge badge-xs capitalize p-3 rounded-3xl font-bold
                        ${tag === 'popular' ? 'bg-[#e1e7ff] text-[#9514fa]' : tag === 'new' ? 'bg-[#dbfce7] text-[#0a883e]' : tag === 'best seller' ? 'bg-[#fef3c6] text-[#bb4d00]' : ''}`}>{tag}</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-color h-15">{name}</h2>
                    </div>
                    <div>
                        <p className='h-15 text-sec text-base'>{description}</p>
                    </div>
                    <div>
                        <p><span className='text-color text-2xl font-bold'>${price}</span><span className='text-sec text-base'>/{period}</span></p>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                        {
                            features.map(feature => {
                                return (
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-sec font-medium'>{feature}</span>
                                    </li>
                                )
                            })
                        }


                    </ul>
                    <div className="mt-6">
                        <button className="btn text-white font-bold bg-linear-65 from-[#4f39f6] to-[#9514fa] rounded-3xl btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;