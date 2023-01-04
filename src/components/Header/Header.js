import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

function Header() {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            {/* start  */}

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>My Favourites</a></li>
                            {
                                user?.uid ?
                                    <li tabIndex={0}>
                                        <a className='text-left '>
                                            {user?.displayName}
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-base-100">
                                            <li><Link to="/dashboard">Account Settings</Link></li>
                                            <li><Link>Recently Viewed</Link></li>
                                            <li><Link>Help & Support</Link></li>
                                            <li ><Link onClick={handleLogOut} >Logout</Link></li>
                                        </ul>
                                    </li>
                                    :
                                    <li><a><Link to="/login">Login</Link></a></li>
                            }
                            <li tabIndex={0}>
                                <a>
                                    Menu
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><Link to="/">Home</Link></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    INR
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal hidden lg:flex px-1">
                        <li><a>My Favourites</a></li>
                        {
                            user?.uid ?
                                <li tabIndex={0}>
                                    <a>
                                        {user?.displayName}
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-base-100">
                                        <li><Link to="/dashboard">Account Settings</Link></li>
                                        <li><Link>Recently Viewed</Link></li>
                                        <li><Link>Help & Support</Link></li>
                                        <li ><Link onClick={handleLogOut} >Logout</Link></li>
                                    </ul>
                                </li>
                                :
                                <li><a><Link to="/login">Login</Link></a></li>
                        }
                        <li tabIndex={0}>
                            <a>
                                Menu
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><Link to="/">Home</Link></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                INR
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl hidden">
                    <img src="https://i.ibb.co/HgVSrFM/trivago.png" alt="trivago" border="0"></img>
                </a>
            </div>
        </div >
    )
}

export default Header
