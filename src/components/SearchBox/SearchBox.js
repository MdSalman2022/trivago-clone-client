import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';


const SearchBox = () => {

    const handleTabs = (e) => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('tab-active');
        })
        e.target.classList.add('tab-active');

    }


    return (
        <div className='bg-accent w-full lg:px-96 py-10'>
            <div className="tabs tabs-boxed bg-transparent">
                <a onClick={handleTabs} className="tab rounded-t-lg text-neutral bg-success tab-active mr-2">All stays</a>
                <a onClick={handleTabs} className="tab rounded-t-lg text-neutral bg-success mr-2">Hotels</a>
                <a onClick={handleTabs} className="tab rounded-t-lg text-neutral bg-success">House / Apartment</a>
            </div>

            <div className="form-control  ">
                <label className="input-group flex flex-wrap lg:flex-none lg:flex-nowrap ">
                    <span className='bg-base-100 text-2xl '><IoIosSearch className='' /></span>
                    <input type="text" placeholder="Enter a hotel name or destination" className="input w-64 px-0 " />
                    <span className='bg-base-100'><RxCross2 /></span>
                    <input type="date" placeholder="Check in" className="checkin w-52" />
                    <input type="date" placeholder="Check out" className="checkout w-52" />
                    <input type="text" placeholder="Members" className="member w-52" />
                    <button className="btn btn-info text-white w-52">Search</button>
                </label>
            </div>
            <p className='text-left font-bold my-5'>We compare multiple booking sites at once</p>
            <div className="flex flex-wrap gap-8 justify-evenly items-center">
                <img className='w-20 h-10 object-contain' src="https://i.ibb.co/DttXL3z/395.png" alt="395" border="0" />
                <img className='w-32 h-10 object-contain' src="https://i.ibb.co/6DGJh82/452.png" alt="452" border="0" />
                <img className='w-32 h-10 object-contain' src="https://i.ibb.co/3Cv0YSV/626.png" alt="626" border="0" />
                <img className='w-20 h-10 object-contain' src="https://i.ibb.co/HDggQpK/2192.png" alt="2192" border="0" />
                <img className='w-20 h-10 object-contain' src="https://i.ibb.co/0cxkRdd/14.png" alt="14" border="0" />
                <img className='w-20 h-10 object-contain' src="https://i.ibb.co/L1CDFvg/634.png" alt="634" border="0" />
                <img className='w-20 h-10 object-contain' src="https://i.ibb.co/PYRrdtn/2452.png" alt="2452" border="0" />
                <p>+100 more</p>
            </div>
        </div>
    );
};

export default SearchBox;