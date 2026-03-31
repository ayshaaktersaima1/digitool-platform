import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="px-4 md:px-[10%] bg-[#101727] pb-10 text-white">

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 md:gap-10 lg:gap-22 pt-20 pb-20'>
                    <div className=' text-center md:text-left col-span-2 space-y-4'>
                        <h6 className="text-4xl font-bold">DigiTools</h6>
                        <p className='text-white/80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-xl font-medium'>Product</h3>
                        <div className='text-white/80 space-y-4'>
                            <p><a href="">Features</a></p>
                            <p><a href="">Pricing</a></p>
                            <p><a href="">Templates</a></p>
                            <p><a href="">Integrations</a></p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-xl font-medium'>Company</h3>
                        <div className='text-white/80 space-y-4'>
                            <p><a href="">About</a></p>
                            <p><a href="">Blog</a></p>
                            <p><a href="">Careers</a></p>
                            <p><a href="">Press</a></p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-xl font-medium'>Resources</h3>
                        <div className='text-white/80 space-y-4'>
                            <p><a href="">Documentation</a></p>
                            <p><a href="">Help Center</a></p>
                            <p><a href="">Community</a></p>
                            <p><a href="">Contact</a></p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-xl font-medium'>Social Links</h3>
                        <div className='flex items-center gap-3'>
                            <a href=""><FaInstagram className='text-xl lg:text-4xl' /></a>
                            <a href=""><FaFacebook className='text-xl lg:text-4xl' /></a>
                            <a href=""><FaXTwitter className='text-xl lg:text-4xl' /></a>
                        </div>
                    </div>
                </div>
                <hr className='text-white/20' />
                <div className='flex flex-col md:flex-row justify-between items-center text-white/50 pt-8'>
                    <div><h4>© 2026 Digitools. All rights reserved.</h4></div>
                    <div className='flex items-center gap-5'>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms of Service</a></p>
                        <p><a href=""> Cookies</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;