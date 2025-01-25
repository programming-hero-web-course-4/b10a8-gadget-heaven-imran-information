import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayouts = () => {
    return (
        <div>
            {/* NavBar  */}
            <ToastContainer></ToastContainer>
            <div className='h-16 w-full  fixed top-0 z-50 backdrop-blur-xl mx-auto'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-220px)] py-10 w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;