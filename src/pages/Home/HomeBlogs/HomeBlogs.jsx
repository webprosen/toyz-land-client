import React from 'react';

const HomeBlogs = () => {
    return (
        <div className='bg-pink-100'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-20'>
                <h2 className="text-3xl text-center font-bold text-red-600 uppercase">Upcoming Toy</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                    <div className="rounded-lg p-5 space-y-5 cursor-pointer shadow-2xl bg-gradient-to-b from-yellow-100 via-gray-200 to-white border-gray-200 border-t" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <div className='min-h-[200px] flex items-center justify-center'>
                            <img className="" src="/g2.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Bugatti Veyron E-Class</h3>
                            <p className="text-sm">Metal Toy Bugatti Car with Openable Doors, High Speed Car with Pull Back, Dual Tone Sports Car for Kids.</p>
                        </div>
                        <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold mt-2 mb-4 text-md hover:opacity-80 transition-colors duration-200'>Book Now</button>
                    </div>

                    <div className="rounded-lg p-5 space-y-5 cursor-pointer shadow-2xl bg-gradient-to-b from-yellow-100 via-gray-200 to-white border-gray-200 border-t" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <div className='min-h-[200px] flex items-center justify-center'>
                            <img className="" src="/g8.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Bugatti Police Car</h3>
                            <p className="text-sm">Centy Toys Plastic Police Interceptor Fortune Pull Back Car, Number Of Pieces: 1, Black with Pull Back</p>
                        </div>
                        <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold mt-2 mb-4 text-md hover:opacity-80 transition-colors duration-200'>Book Now</button>
                    </div>

                    <div className="rounded-lg p-5 space-y-5 cursor-pointer shadow-2xl bg-gradient-to-b from-yellow-100 via-gray-200 to-white border-gray-200 border-t" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <div className='min-h-[200px] flex items-center justify-center'>
                            <img className="" src="/g3.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">G45 Concrete Mixer</h3>
                            <p className="text-sm">Concrete Hot Wheels Web-Car Launcher with Movement-Activated Eyes & 1:64 Scale Toy Car.</p>
                        </div>
                        <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold mt-2 mb-4 text-md hover:opacity-80 transition-colors duration-200'>Book Now</button>
                    </div>

                    <div className="rounded-lg p-5 space-y-5 cursor-pointer shadow-2xl bg-gradient-to-b from-yellow-100 via-gray-200 to-white border-gray-200 border-t" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <div className='min-h-[200px] flex items-center justify-center'>
                            <img className="" src="/g4.png" alt="" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Rescue Fire Truck</h3>
                            <p className="text-sm">Grafters Electric Fire Truck Kids Toy - with Bright Flashing 4D Lights & Real Siren Sounds | Bump and Go Firetruck.</p>
                        </div>
                        <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold mt-2 mb-4 text-md hover:opacity-80 transition-colors duration-200'>Book Now</button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default HomeBlogs;