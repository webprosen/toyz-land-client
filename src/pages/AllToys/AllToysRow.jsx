import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';

const AllToysRow = ({ index, toy, toys, setToys }) => {

    const {user} = useContext(AuthContext);
    const { _id, photo, name, subCategory, price, sellerName, sellerEmail, quantity, rating } = toy;

    const handleViewDetails = () => {
        if(!user){
            toast.warn('You have to log in first to view details!');
        }
    }

    return (
        <tr className='text-gray-700'>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="w-14">
                    <img src={photo} />
                </div>
            </td>
            <td className='font-semibold'>
                {sellerName}
            </td>
            <td>
                {name}
            </td>
            <td>
                {subCategory}
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                <Link onClick={handleViewDetails} to={`/toy/${_id}`}>
                    <button className='bg-gray-900 py-2 px-4 rounded-md text-white font-semibold text-sm hover:opacity-80 transition-colors duration-200 uppercase'>View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysRow;