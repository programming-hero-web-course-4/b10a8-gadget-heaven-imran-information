import React from 'react';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] min-h-[700px] rounded-xl items-start">
                <div className="hero-content text-center">
                    <div className=" mt-28">
                        <h1 className="text-xl md:text-5xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn  border-0 rounded-full bg-white font-bold text-lg text-[#9538E2]">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='relative -top-64'>
                <img className='w-3/5 mx-auto border border-white backdrop-blur-xl rounded-xl p-6' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;