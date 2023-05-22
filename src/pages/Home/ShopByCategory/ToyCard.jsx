import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../providers/AuthProvider';

const ToyCard = ({ toy }) => {
    const { user, logOut } = useContext(AuthContext);
    const { _id, photo, name, subCategory, price, sellerName, sellerEmail, quantity, rating } = toy;

    const handleViewDetails = () => {
        if (!user) {
            toast.warn('You have to log in first to view details!');
        }
    }

    return (
        <div className="card shadow-2xl ring-red-600 bg-white rounded-lg text-gray-900" data-aos="fade-up" data-aos-duration="1000">
            <figure className='p-5 min-h-[250px] flex items-center'>
                <img className='' src={photo} alt="Shoes" />
            </figure>
            <div className="card-body border-t px-5 py-2">
                <h2 className="card-title font-bold"></h2>
                <span className=' text-gray-900 mb-0'>Name: {name}</span>
                <span className=' text-gray-900'>Price: ${price}</span>

                <div className='flex items-center justify-start'>
                    <div className=' text-gray-900 mr-1'>Rating:</div>
                    <div className='max-w-[140px] flex'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={Math.round(rating)}
                            readOnly
                        />
                        <p className='ml-2 text-lg font-bold text-yellow-600'>({Math.round(rating)})</p>
                    </div>
                </div>

                <div className="card-actions justify-start">
                    <Link onClick={handleViewDetails} to={`/toy/${_id}`}>
                        <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold mt-2 mb-4 text-md hover:opacity-80 transition-colors duration-200'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;