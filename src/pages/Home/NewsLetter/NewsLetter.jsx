import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-yellow-50'>
            <div className='max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <h2 className='text-3xl text-center font-bold text-red-600 uppercase'>Newsletter</h2>
                <h4 className='text-center font-semibold text-md sm:text-xl mt-3 text-gray-900'>Subscribe to get our latest news update!</h4>
                <div className='mt-6 flex justify-center'>
                    <input type="text" placeholder='name@example.com' className='bg-white border py-3 px-4 mr-3 rounded-md max-w-[320px] w-full border-gray-900 placeholder:text-gray-600'/>
                    <button className='bg-gray-900 py-3 px-4 text-white font-semibold rounded-md hover:opacity-80 transition-colors duration-200 uppercase'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;