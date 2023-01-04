import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Destination = () => {
    return (
        <div className='bg-base-100 w-full px-96 py-10 text-left '>
            <p className="text-xl font-bold text-left">These top destinations are just a click away</p>
            <div className="tabs">
                <a className="tab tab-bordered tab-active text-info">Top Cities</a>
                <a className="tab tab-bordered">Top Destinations</a>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-3">
                <div className="card   bg-transparent">
                    <figure><img src="https://i.ibb.co/gVypRNn/dummy.webp" alt="Shoes" /></figure>
                    <div className="pl-2">
                        <h2 className="card-title">Hotels in Mumbai</h2>
                        <p>10,111 Hotels Avg. ₹3,675</p>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <figure><img src="https://i.ibb.co/gVypRNn/dummy.webp" alt="Shoes" /></figure>
                    <div className="pl-2">
                        <h2 className="card-title">Hotels in Jaipur</h2>
                        <p>8,013 Hotels Avg. ₹3,232</p>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <figure><img src="https://i.ibb.co/gVypRNn/dummy.webp" alt="Shoes" /></figure>
                    <div className="pl-2">
                        <h2 className="card-title">Hotels in Udajpur</h2>
                        <p>4,523 Hotels Avg. ₹4,196</p>
                    </div>
                </div>
                <div className="card bg-transparent">
                    <figure><img src="https://i.ibb.co/gVypRNn/dummy.webp" alt="Shoes" /></figure>
                    <div className="pl-2">
                        <h2 className="card-title">Hotels in Hyderabad</h2>
                        <p>6,871 Hotels Avg. ₹3,808</p>
                    </div>
                </div>
            </div>
            <div className="btn-group grid grid-cols-3 w-32  justify-items-center mx-auto">
                <button className="btn bg-transparent border-none text-neutral hover:bg-transparent "><AiOutlineLeft /></button>
                <button className="btn bg-transparent border-none text-neutral hover:bg-transparent ">●</button>
                <button className="btn bg-transparent border-none text-neutral hover:bg-transparent "><AiOutlineRight /></button>
            </div>
        </div>
    );
};

export default Destination;