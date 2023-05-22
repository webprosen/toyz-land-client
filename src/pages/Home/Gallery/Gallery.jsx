import React from 'react';

const Gallery = () => {
    return (
        <div className='bg-yellow-50'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <h2 className="text-3xl text-center font-bold text-red-600 uppercase">Car's Gallery</h2>
                <p className="text-center mt-3 mx-auto mb-10 text-gray-900">Lets explore our car's gallery, Just play 
                & enjoy!</p>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center">
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g1.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g2.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g3.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g4.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g5.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g6.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g7.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center min-h-[250px] border border-gray-300 rounded-lg p-6 bg-[#fff]' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <img src="/g8.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;