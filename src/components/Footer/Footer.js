import React from 'react';

import { FaFacebookF } from 'react-icons/fa';
import { FaBeer, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className="footer w-full lg:px-96 pt-10 lg:pb-32 pb-20 bg-neutral flex justify-between ">
            <div>
                <span className="font-semibold text-left text-base-100">trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, <br /> Germany</span>
                <div className='flex gap-5 text-2xl text-neutral'>
                    <FaFacebookF className='bg-base-100 p-1 rounded-full' />
                    <AiOutlineTwitter className='bg-base-100 p-1 rounded-full' />
                    <AiOutlineInstagram className='bg-base-100 p-1 rounded-full' />
                    <AiFillYoutube className='bg-base-100 p-1 rounded-full' />
                    <FaLinkedinIn className='bg-base-100 p-1 rounded-full' />
                </div>
            </div>

            <div>
                <select className=" lg:w-64 select select-bordered bg-neutral border-base-100 text-base-100 w-full max-w-xs">
                    <option selected>India</option>
                    <option>Hong Kong</option>
                    <option>Hungery</option>
                    <option>Italy</option>
                    <option>USA</option>
                    <option>Canada</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;