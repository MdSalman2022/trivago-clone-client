import React from 'react';

const Recent = () => {
    return (
        <div className='bg-base-100 w-full px-96 py-10 text-left hidden'>
            <p className="text-xl font-bold">Your recent activity</p>
            <ul className="steps steps-vertical">
                <li data-content="" className=" step-neutral"></li>
                <li data-content="●" className="step step-neutral">4 Jan 2023</li>
                <li data-content="" className="step step-neutral">
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-left">
                            <h2 className="card-title">Mumbai</h2>
                            <p>No dates selected</p>
                        </div>
                    </div>
                </li>
                <li data-content="" className="step step-neutral">4 Jan 2023</li>
            </ul>
        </div>
    );
};

export default Recent;