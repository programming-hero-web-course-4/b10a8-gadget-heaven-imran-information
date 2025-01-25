import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const categoryData = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories categories={categoryData}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;