import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#222] first-letter'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-white border-b border-red-600'>
                    <div className=''>
                        <h2 className='text-3xl font-bold mb-4'>
                            <Link to="/">
                                <img className='w-[60px]' src={logo} />
                            </Link>
                        </h2>
                        <p className='leading-[22px] mb-6 text-white'>Welcome to our shop. You can get all kind of car toy here.</p>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4 text-red-600 uppercase'>Quick Shop</h2>
                        <ul className='text-white'>
                            <li className='mb-2'>About</li>
                            <li className='mb-2'>Contact</li>
                            <li className='mb-2'>Shop</li>
                            <li className='mb-2'>All Toys</li>
                            <li className='mb-2'>New Arrival</li>
                        </ul>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4 text-red-600 uppercase'>Quick Links</h2>
                        <ul className='text-white'>
                            <li className='mb-2'>FAQ's</li>
                            <li className='mb-2'>Privacy Policy</li>
                            <li className='mb-2'>Shipping Policy</li>
                            <li className='mb-2'>Refund Policy</li>
                            <li className='mb-2'>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mb-4 text-red-600 uppercase'>Contact</h2>
                        <p className='mb-2 text-white'>58/79, H-23, Mirpur, Dhaka</p>
                        <p className='mb-5 text-white'>+88 01758 910000</p>
                        <div className='flex'>
                            <FaFacebook className='text-2xl mr-4'></FaFacebook>
                            <FaInstagram className='text-2xl mr-4'></FaInstagram>
                            <FaLinkedin className='text-2xl mr-4'></FaLinkedin>
                            <FaTwitter className='text-2xl mr-4'></FaTwitter>
                        </div>
                    </div>
                </div>
                <div className='text-sm text-white pt-10'>
                    <p className='text-white text-left'>© 2023 Toyz Land. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;