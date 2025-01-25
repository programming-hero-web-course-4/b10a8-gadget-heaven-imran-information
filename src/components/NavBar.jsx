import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { getToHartProduct, getToProduct } from '../utility';


const NavBar = () => {
    const cart = getToProduct()
    const heart = getToHartProduct()
    

    return (
        <div className="navbar mx-auto  w-10/12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <NavLink to='/' className="text-xl text-white font-bold">Gadget Heaven</NavLink >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base gap-4 text-white">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end gap-8 text-white">
                <NavLink to='/dashboard' className="border p-3 rounded-full ">
                    <FaCartPlus className='text-xl '></FaCartPlus>
                    <div className='fixed ml-5 text-xl top-5 '>
                        {cart.length}
                    </div>
                </NavLink>
                <NavLink to='/dashboard' className="border p-3 rounded-full"><FaRegHeart className='text-xl'></FaRegHeart>
                    <div className='fixed ml-5 text-xl top-5 '>
                        {heart.length}
                    </div>
                </NavLink>

            </div>
        </div>
    );
};

export default NavBar;