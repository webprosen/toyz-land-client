import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    useTitle('Toyz Land | Toy Details');
    
    const toy = useLoaderData();
    const { _id, photo, name, subCategory, price, sellerName, sellerEmail, quantity, rating, description } = toy;

    return (
        <div className='bg-yellow-50'>
            <div className='max-w-7xl mx-auto px-6 md:px-8 py-10 md:pb-20 md:pt-15'>
                <h2 className='text-3xl font-bold md:leading-[55px] text-red-600 text-center mb-8 uppercase'>
                    Toy Details
                </h2>
                <div className='md:flex justify-between items-center'>
                    <div className='md:w-[40%]'>
                        <img className='rounded-lg mx-auto' src={photo} alt="" />
                    </div>
                    <div className='md:w-[50%] mt-8'>
                        <div className='text-gray-900'>
                            <h2 className='text-4xl font-bold leading-[45px] md:leading-[55px] text-gray-900 mb-2'>
                                {name}
                            </h2>
                            <p className='text-md mb-2'><span className='font-semibold'>Seller Name: </span>{sellerName}</p>
                            <p className='text-md mb-2'><span className='font-semibold'>Seller Email: </span>{sellerEmail}</p>
                            <p className='text-md mb-2'><span className='font-semibold'>Price: </span>${price}</p>
                            <p className='text-md mb-2'><span className='font-semibold'>Quantity: </span>{quantity}</p>
                            <div className='flex items-center justify-start mb-2'>
                                <div className=' text-gray-900 mr-1'><span className='font-semibold'>Rating: </span></div>
                                <div className='max-w-[140px] flex'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={Math.round(rating)}
                                        readOnly
                                    />
                                    <p className='ml-2 text-lg font-bold text-yellow-600'>({Math.round(rating)})</p>
                                </div>
                            </div>
                            <p className='text-justify w-full'><span className='font-semibold'>Description: </span>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;