import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardCart from '../components/DashboardCart';
import DashboardWishlist from '../components/DashboardWishlist';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => {
        setToggle(true)
    }
    const handleToggleWishlist = () => {
        setToggle(false)
    }


    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dashboard</title>
            </Helmet>
            <div className="hero bg-[#9538E2] min-h-[300px] rounded-xl items-start">
                <div className="hero-content text-center ">
                    <div className="mt-10 w-3/4">
                        <h1 className="text-5xl text-white font-bold">Dashboard</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button onClick={handleToggle} className="btn mr-5 btn-primary font-bold text-lg text-white">Cart</button>
                        <button onClick={handleToggleWishlist} className="btn  btn-primary font-bold text-lg text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            {
                toggle ? <DashboardCart></DashboardCart> : <DashboardWishlist></DashboardWishlist>
            }


        </div>
    );
};

export default Dashboard;