import React from 'react';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({ index, toy, toys, setToys }) => {
    const { _id, photo, name, subCategory, price, sellerEmail, quantity, rating } = toy;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toyz-land-server.vercel.app/my-toys/${_id}`, {
                    method: 'DELETE'
                });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const remaining = toys.filter(toy => toy._id !== _id);
                setToys(remaining);
            }
        });
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
            <td>
                {name}
            </td>
            <td>
                {subCategory}
            </td>
            <td>
                ${price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {rating}
            </td>
            <td className='font-semibold'>
                {sellerEmail}
            </td>
            <td>
                <div className='flex'>
                    <div className='mr-4'>
                        <Link to={`/update/${_id}`}>
                            <FaRegEdit className='text-green-600 text-2xl cursor-pointer'></FaRegEdit>
                        </Link>
                    </div>
                    <div className='text-red-600 text-2xl cursor-pointer'>
                        <FaTrash onClick={() => handleDelete(_id)}></FaTrash>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToysRow;