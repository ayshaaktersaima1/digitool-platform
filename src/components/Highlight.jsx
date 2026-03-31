import React from 'react';

const Highlight = () => {
    return (
        <div className=' flex items-stretch justify-center py-15 gap-4 lg:gap-32 bg-linear-65 from-[#4f39f6] to-[#9514fa] px-2 md:px-0'>
            <div className='space-y-3 text-center'>
                <h1 className='text-2xl md:text-6xl font-extrabold text-white'>50K+</h1>
                <h3 className='text-white text-base md:text-2xl font-medium'>Active Users</h3>
            </div>
            <div className="h-14 w-px bg-white my-auto"></div>
            <div className='space-y-3 text-center'>
                <h1 className='text-2xl md:text-6xl font-extrabold text-white'>200+</h1>
                <h3 className='text-white text-base md:text-2xl font-medium'>Premium Tools</h3>
            </div>
            <div className="h-14 w-px bg-white my-auto"></div>
            <div className='space-y-3 text-center'>
                <h1 className='text-2xl md:text-6xl font-extrabold text-white'>4.9</h1>
                <h3 className='text-white text-base md:text-2xl font-medium'>Rating</h3>
            </div>
        </div>
    );
};

export default Highlight;