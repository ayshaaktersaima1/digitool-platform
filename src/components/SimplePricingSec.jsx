import { Check } from 'lucide-react';
import React from 'react';

const SimplePricingSec = () => {
    return (
        <div className='mx-2 md:mx-[10%]'>
            <h1 className='text-3xl md:text-5xl font-bold text-color pb-4 text-center'>Simple, Transparent Pricing</h1>
            <p className='text-sec pb-10 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            {/* card con */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 md:pb-32 items-stretch'>
                {/* 1st card */}
                <div className='flex flex-col h-full text-left border border-[#f2f2f2] rounded-2xl bg-[#f9fafcFF] p-6'>
                    <h1 className='text-color text-2xl font-bold pb-2'>Starter</h1>
                    <p className='text-sec pb-6'>Perfect for getting started</p>
                    <h2 className='text-sec text-xl pb-6'><span className='text-color text-[40px] font-bold'>$0</span>/month</h2>
                    <div className='space-y-2 pb-6'>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Access to 10 free tools</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Basic templates</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Community support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>1 project per month</p>
                        </div>
                    </div>
                    <button className='btn btn-block bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-3xl mt-auto'>Get Started Free</button>
                </div>
                {/* 2nd card */}
                <div className='flex flex-col h-full text-left border border-[#f2f2f2] rounded-2xl bg-[#f9fafcFF] p-6 bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white relative'>
                    <div className='flex justify-center items-center absolute -top-3 left-0 right-0'>
                        <div className='badge bg-[#fef3c6] 
                    text-[#bb4d00] rounded-3xl border-none'><span>Most Popular</span></div>
                    </div>
                    <h1 className='text-2xl font-bold pb-2'>Pro</h1>
                    <p className='pb-6'>Best for professionals</p>
                    <h2 className='text-xl pb-6'><span className='text-[40px] font-bold'>$29</span>/month</h2>
                    <div className='space-y-2 pb-6'>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Access to all premium tools</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Unlimited templates</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Priority support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Unlimited projects</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Cloud sync</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-white' />
                            <p className='font-medium'>Advanced analytics</p>
                        </div>
                    </div>
                    <button className='btn btn-block  font-bold rounded-3xl mt-auto'><span className='bg-linear-65 from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                </div>
                {/* 3rd */}
                <div className='flex flex-col h-full text-left border border-[#f2f2f2] rounded-2xl bg-[#f9fafcFF] p-6'>
                    <h1 className='text-color text-2xl font-bold pb-2'>Enterprise</h1>
                    <p className='text-sec pb-6'>For teams and businesses</p>
                    <h2 className='text-sec text-xl pb-6'><span className='text-color text-[40px] font-bold'>$99</span>/month</h2>
                    <div className='space-y-2 pb-6'>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Everything in Pro</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Team collaboration</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Custom integrations</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Dedicated support</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>SLA guarantee</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Check className='text-[#30b868]' />
                            <p className='text-sec font-medium'>Custom branding</p>
                        </div>
                    </div>
                    <button className='btn btn-block bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-3xl mt-auto'>Contact Sales</button>
                </div>

            </div>
        </div>
    );
};

export default SimplePricingSec;