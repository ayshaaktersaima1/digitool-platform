import React from 'react';
import userImg from '../assets/user.png'
import productImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const GetStartedSec = () => {
    return (
        <div className='my-30 py-30 bg-[#f1f1f1]'>
            <h1 className=' text-center text-color text-5xl font-extrabold mb-4'>Get Started in 3 Steps</h1>
            <p className='text-center text-sec'>Start using premium digital tools in minutes, not hours.</p>
            {/* card con*/}
            <div className='mx-2 md:mx-[10%] mt-10 grid grid-cols-3 gap-7'>
                {/* 1st card */}
                <div className='bg-white border border-[#f1f1f1] rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className='border border-[#f1f1f1] rounded-full p-3 bg-linear-65 from-[#4f39f6] to-[#9514fa] h-10 w-10 flex justify-center items-center m-5'><h4 className='text-sm font-bold text-white'>01</h4>
                        </div>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center items-center px-6'>
                        <div className='border border-none bg-[#f9fafc] rounded-full flex justify-center items-center h-25 w-25'>
                            <div><img className='h-15 w-15' src={userImg} alt="" /></div>
                        </div>
                        <h1 className='text-2xl font-bold text-color'>Create Account</h1>
                        <p className='text-sec pb-22 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                {/* 2nd card */}
                <div className='bg-white border border-[#f1f1f1] rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className='border border-[#f1f1f1] rounded-full p-3 bg-linear-65 from-[#4f39f6] to-[#9514fa] h-10 w-10 flex justify-center items-center m-5'><h4 className='text-sm font-bold text-white'>02</h4>
                        </div>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center items-center px-6'>
                        <div className='border border-none bg-[#f9fafc] rounded-full flex justify-center items-center h-25 w-25'>
                            <div><img className='h-15 w-15' src={productImg} alt="" /></div>
                        </div>
                        <h1 className='text-2xl font-bold text-color'>Choose Products</h1>
                        <p className='text-sec pb-22 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                {/* 3rd card */}
                <div className='bg-white border border-[#f1f1f1] rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className='border border-[#f1f1f1] rounded-full p-3 bg-linear-65 from-[#4f39f6] to-[#9514fa] h-10 w-10 flex justify-center items-center m-5'><h4 className='text-sm font-bold text-white'>03</h4>
                        </div>
                    </div>
                    <div className='space-y-4 flex flex-col justify-center items-center px-6'>
                        <div className='border border-none bg-[#f9fafc] rounded-full flex justify-center items-center h-25 w-25'>
                            <div><img className='h-15 w-15' src={rocketImg} alt="" /></div>
                        </div>
                        <h1 className='text-2xl font-bold text-color'>Start Creating</h1>
                        <p className='text-sec pb-22 text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSec;