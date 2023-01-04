import React from 'react';

const Banner = () => {
    return (
        <div className="flex justify-left lg:px-96 py-10">
            <div>
                <img src="https://i.ibb.co/HgVSrFM/trivago.png" alt="trivago" border="0"></img>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className='text-left'>
                <h4 className="text-xl font-bold">Deals from your favourite booking sites</h4>
                <p>Try searching for a city, a specific hotel, or even a landmark!</p>
            </div>
        </div>
    );
};

export default Banner;