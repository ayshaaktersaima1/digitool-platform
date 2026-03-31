import React from 'react';
import badgeIcon from '../assets/badgeIcon.png'
import playIcon from '../assets/play.png'
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='my-8 md:my-20 mx-2 md:mx-[10%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                {/* left */}
                <div className='order-2 lg:order-1'>
                    <div className='space-y-4 pt-10 lg:pt-0 text-center lg:text-left'>
                        <p className='badge bg-[#E1E7FF] p-4 rounded-full '><span className='flex justify-center items-center gap-2 bg-linear-65 from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent  font-semibold '><img src={badgeIcon} alt="" />New: AI-Powered Tools Available</span></p>
                        <h1 className='font-extrabold text-3xl md:text-6xl text-color leading-tight'>Supercharge Your Digital Workflow</h1>
                        <p className='text-sec text-lg leading-1.2'>Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                    </div>
                    <div className='flex gap-4 mt-8 justify-center lg:justify-start'>
                        <button className='btn rounded-3xl bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white font-bold'>Explore Products</button>
                        <button className='btn btn-outline rounded-3xl border-2 border-[#9514fa] text-[#9514fa] font-extrabold'><img src={playIcon} alt="" />Watch Demo</button>
                    </div>
                </div>
                {/* right */}
                <div className='flex justify-center lg:justify-end order-1 lg:order-2'>

                    <img src={bannerImg} alt="" />


                </div>
            </div>

        </div>
    );
};

export default Banner;