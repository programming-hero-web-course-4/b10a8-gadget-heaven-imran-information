import React, { useEffect, useState } from 'react';
import { getToProduct, purchaseProduct, removeProduct } from '../utility';
import Card from './Card';
import paymentImg from '../assets/Group.png'
import { NavLink } from 'react-router-dom';
const DashboardCart = () => {
    const getProducts = getToProduct()
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState(0)


    useEffect(() => {
        setProduct(getProducts)
    }, [])

    const handleShortByProduct = () => {
        const sorted = [...getProducts].sort((a, b) => b.price - a.price)
        setProduct(sorted)
    }
    const handleProductRemove = (id) => {
        removeProduct(id)
        const getProducts = getToProduct()
        setProduct(getProducts)
    }
    const handlePurchaseProduct = () => {
        purchaseProduct()
        const getProducts = getToProduct()
        setProduct(getProducts)
    }
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold'>Cart</div>
                <div className='md:flex justify-between gap-10 items-center'>
                    <h2 className='text-2xl font-bold'>Total cost: {price}</h2>
                    <button onClick={handleShortByProduct} className='btn btn-outline font-bold'>Short by Price</button>
                    <button onClick={() => (document.getElementById('my_modal_1').showModal(), handlePurchaseProduct())} className='btn btn-outline font-bold'>Purchase</button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    product.map(product => <Card key={product.id} handleProductRemove={handleProductRemove} product={product}></Card>)

                }
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                    <div className='flex justify-center'>
                        <img src={paymentImg} alt="" />
                    </div>
                    <h3 className="font-bold text-2xl mt-5 text-center">Payment Successfully</h3>
                    <p className="py-4 text-center">Thanks for purchasing. </p>
                    <p className="py- text-center">Total: 2449.96 </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <NavLink to='/' className="btn">Close</NavLink>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DashboardCart;