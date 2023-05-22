import React from 'react';

const Hero = () => {
    return (
        <div className='bg-pink-100'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <div className='md:flex justify-between items-center'>
                    <div className='md:w-[40%]' data-aos="fade-right" data-aos-duration="1000">
                        <img className='rounded-lg mx-auto' src="/hero.png" alt="" />
                    </div>
                    <div className='md:w-[50%] mt-8' data-aos="fade-left" data-aos-duration="1000">
                        <h2 className='text-4xl md:text-5xl font-bold leading-[45px] md:leading-[55px] text-red-600'>
                            New Arrival
                        </h2>
                        <p className='mt-5 text-justify w-full text-gray-900'>At The Toyz Land, we meet all of your kids' "play time" criteria by giving them the best toys in Pakistan.You can take your time to explore our captivating kid’s world online.</p>
                        <button className='bg-gray-900 py-3 px-6 rounded-md text-white font-semibold mt-8 text-md hover:opacity-80 transition-colors duration-200 uppercase'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;