import shoppingCartIcon from '../assets/products/shoppingcartNav.png'

const NavBar = ({ navCount }) => {



    return (
        <div className='sticky top-0 z-10 '>
            <div className="navbar bg-base-100 shadow-sm px-2 md:px-[10%]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#101727] font-semibold">
                            <li><a>Products</a></li>
                            <li> <a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-3xl font-bold bg-linear-65 from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent leading-relaxed">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#101727] font-semibold text-base">
                        <li><a>Products</a></li>
                        <li> <a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end text-base relative">


                    <div className=" flex justify-center items-center gap-2 rounded-3xl text-base text-[#101727]">
                        {/* <span className='absolute -top-2 h-5 w-5 bg-amber-600 border border-none rounded-full flex justify-center items-center p-3'><a className='' href="">0</a></span>
                        <img className='h-6 w-6' src={shoppingCartIcon} alt="" />Login</a> */}

                        <div className='relative h-6 w-6'><img className='h-6 w-6' src={shoppingCartIcon} alt="" />
                            <span className={`absolute -top-3 -right-2 h-5 min-w-5 bg-red-500 border border-none rounded-full flex justify-center items-center  text-white ${navCount === 0 ? 'invisible' : 'visible'}`}><p className='text-sm'>{navCount}</p></span>
                        </div>

                        <button className='btn btn-ghost rounded-3xl text-base text-color'>Login</button>


                    </div>

                    <a className="btn rounded-3xl bg-linear-65 from-[#4f39f6] to-[#9514fa] text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;