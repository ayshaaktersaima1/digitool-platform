import React from 'react';

const ReadySec = () => {
    return (
        <div className='py-20 md:py-40 bg-linear-65 from-[#4f39f6] to-[#9514fa] px-2 md:px-[10%] text-white flex flex-col justify-center items-center text-center '>
            <h1 className='pb-4 text-3xl md:text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
            <p className='pb-10 w-auto lg:w-155'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='flex pb-4 gap-4 justify-center items-center'>
                <button className='btn bg-white font-semibold text-[#4f39f6] rounded-3xl'>Explore Products</button>
                <button className='btn text-white font-semibold bg-transparent border border-white rounded-3xl'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadySec;