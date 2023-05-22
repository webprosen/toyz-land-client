import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import logo from '/logo.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [customHidden, setCustomHidden] = useState(false);

    // Menu control
    const profileClick = () => {
        setCustomHidden(false);
    }

    const profileItemClick = () => {
        setCustomHidden(true);
    }

    // Logout
    const handleLogout = () => {
        logOut();
    }

    return (
        <>
            <div id="desktop-nav" className='bg-white border-b border-gray-300 hidden md:block sticky top-0 z-50'>
                <div className='max-w-7xl mx-auto px-8 pt-4 pb-3 md:py-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold text-red-600'>
                            <Link to="/">
                                <img className='w-[120px]' src={logo} />
                            </Link>
                        </h2>
                        <ul className='uppercase'>
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/all-toys">All Toys</ActiveLink>
                            {user && <><ActiveLink to="/my-toys">My Toys</ActiveLink>
                            <ActiveLink to="/add-toy">Add A Toy</ActiveLink></>}
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                        </ul>
                        <div className='flex items-center justify-center'>
                            {user && <div className="w-12 rounded-full overflow-hidden mr-4">
                                <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                    <img className='cursor-pointer rounded-full w-full' src={user.photoURL} />
                                </a>
                                <Tooltip id="my-tooltip" />
                            </div>}

                            {user ? <button onClick={handleLogout} className='text-sm md:text-lg bg-red-600 py-2 px-4 rounded text-white font-semibold hover:opacity-80 transition-colors duration-200 uppercase'>Logout</button>
                                :
                                <Link to="/login">
                                    <button className='text-sm md:text-lg bg-gray-900 py-2 px-6 rounded text-white font-semibold hover:opacity-80 transition-colors duration-200 uppercase'>Login</button>
                                </Link>}
                        </div>
                    </div>
                </div>
            </div>

            <div id="mobile-nav" className='bg-white border-b border-gray-300 md:hidden sticky top-0 z-50'>
                <div className='max-w-6xl mx-auto px-6'>
                    <div className="flex items-center justify-between py-2">
                        <div className="">
                            <div className="dropdown">
                                <label onClick={profileClick} tabIndex={0} className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul onClick={profileItemClick} tabIndex={0} className={customHidden ? 'hidden menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-white' : ' bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52'}>
                                    <Link to="/">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link to="/all-toys">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                        All Toys
                                        </li>
                                    </Link>
                                    {user && <><Link to="/my-toys">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                        My Toys
                                        </li>
                                    </Link>
                                    <Link to="/add-toy">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                        Add A Toy
                                        </li>
                                    </Link></>}
                                    <Link to="/blogs">
                                        <li className='py-1 px-2 cursor-pointer hover:bg-gray-200 rounded-md'>
                                        Blogs
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <Link to="/">
                                <img className='w-[80px]' src={logo} />
                            </Link>
                        </div>
                        <div className="">
                            <div className='flex items-center justify-center'>
                                {user && <div className="w-8 rounded-full overflow-hidden mr-2">
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
                                        <img className='cursor-pointer rounded-full w-full' src={user.photoURL} />
                                    </a>
                                    <Tooltip id="my-tooltip" />
                                </div>}

                                {user ? <button onClick={handleLogout} className='text-sm md:text-lg bg-red-600 py-1 px-2 rounded text-white font-semibold hover:opacity-80 transition-colors duration-200 uppercase'>Logout</button>
                                    :
                                    <Link to="/login">
                                        <button className='text-sm md:text-lg bg-gray-900 py-2 px-4 rounded text-white font-semibold hover:opacity-80 transition-colors duration-200 uppercase'>Login</button>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;