import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Error = () => {
    useTitle('Toyz Land | 404');
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <div className='h-screen flex justify-center items-center'>
                <div className='text-center mt-[-150px]'>
                    <img className='max-w-[300px] md:max-w-[500px] mx-auto w-full' src="/error.png" alt="" />
                    <Link to="/">
                        <button className='bg-[#222] py-3 px-6 rounded-md text-white font-bold mt-8 text-md hover:opacity-80 transition-colors duration-200 uppercase'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;