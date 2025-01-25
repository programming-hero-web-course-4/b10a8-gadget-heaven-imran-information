import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { setHartProductCart, setProductCart } from '../utility';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';
const CardDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { product_name, image, price, details } = product


    useEffect(() => {
        const productFind = data.find(product => product.id === parseInt(id))
        setProduct(productFind)

    }, [])

    const handleAddToCart = (product) => {
        setProductCart(product)
    }
    const handleHartAddToCart = (product) => {
        setHartProductCart(product)
    }


    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | {id}</title>
            </Helmet>
            <div className="hero bg-[#9538E2] min-h-[550px] rounded-xl items-start">
                <div className="hero-content text-center">
                    <div className=" mt-28">
                        <h1 className="text-5xl text-white font-bold">Product Details</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!.
                        </p>

                    </div>
                </div>
            </div>

            <div className="card md:flex-row p-8 card-compact bg-base-100 shadow-xl relative -top-64 md:w-3/5 mx-auto">
                <figure className='flex-1'>
                    <img className='rounded'
                        src={image}
                        alt={product_name} />
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{product_name}</h2>
                    <p>Price: {price}</p>
                    <p>Stoke: </p>
                    <p>{details} </p>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Card <FaCartPlus></FaCartPlus></button>
                        <button onClick={() => handleHartAddToCart(product)} className="btn btn-primary"><FaRegHeart></FaRegHeart></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;