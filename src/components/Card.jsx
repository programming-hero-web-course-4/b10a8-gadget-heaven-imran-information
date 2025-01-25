import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";

const Card = ({ product, handleProductRemove }) => {
    const { pathname } = useLocation()

    const { product_name, image, details, price, id } = product
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl p-5 ">

            <figure>
                <img className='h-72'
                    src={image}
                    alt={product_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{price}</p>
                <p>{details}</p>
                <div className="card-actions ">
                    {
                        pathname === '/' ? <NavLink to={`/details/${id}`} className="btn  btn-outline btn-primary">View Details</NavLink> : <button onClick={() => handleProductRemove(id)} className='text-xl btn btn-outline w-full btn-error mt-5'>Remove<FaTrash></FaTrash></button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Card;