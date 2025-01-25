import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Cards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            const filterByProducts = [...data].filter(product => product.category === category)
            setProducts(filterByProducts)
        } else {
            setProducts(data)
        }

    }, [category, data])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto'>
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>


    );
};

export default Cards;