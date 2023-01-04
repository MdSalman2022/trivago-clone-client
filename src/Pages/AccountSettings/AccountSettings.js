import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AccountSettings = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Header />
            <div className='grid grid-cols-4  px-96 py-10 '>
                <ul className="menu bg-base-100 w-56 col-span-1">
                    <li><a>Account Settings</a></li>
                    <li><a>Recently viewed</a></li>
                    <li><a>Help and support</a></li>
                    <div className="divider"></div>
                    <li ><Link onClick={handleLogOut} >Logout</Link></li>
                </ul>
                <div>
                    <p className='text-2xl font-bold text-left mb-10'>Account settings</p>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-96  " defaultValue={user?.displayName} />
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-96  " defaultValue={user?.displayName} />
                    </div>
                    <button className="btn btn-secondary mt-5 texr-secondary" >Update personal information</button>
                </div>

            </div>
        </div>
    );
};

export default AccountSettings;